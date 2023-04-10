import {withAuthenticator, Authenticator, SignIn, AmplifySignOut } from '@aws-amplify/ui-react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Helmet } from 'react-helmet';


import { Storage, DataStore } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router,useParams, Switch, Route } from 'react-router-dom';
import { NavBar, CreateNote, UpdateNote, StoryCollection,Footer, ArticleUI,StoryUpdateCollection, StoryUpdate } from './ui-components';
import { Article } from './models'
import { FileUploader } from '@aws-amplify/ui-react'


async function getArticleCoverImageUrl(key) {
  const url = await Storage.get(key);
  return url;
}

function ArticleData({ articleTitle } ) {
  const [article, setArticle] = useState(null);
  const [coverImageUrl, setCoverImageUrl] = useState(null);
  const [modifiedText, setModifiedText] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const [fetchedArticle] = await DataStore.query(Article, c => c.title.eq(articleTitle));
        setArticle(fetchedArticle);
       
        const url = await getArticleCoverImageUrl(fetchedArticle.coverimage);
        setCoverImageUrl(url);
        setModifiedText(await modifyText(fetchedArticle.text));
      } catch (error) {
        console.log('Error fetching article', error);
      }
    };

    fetchArticle();
  }, [articleTitle]);

  async function modifyText(text) {
    const regex = /<img[^>]+src="([^"]+)"[^>]*>/g;
    const codeRegex = /<code\b[^>]*>(.*?)<\/code>/gs;
    let newText = text;
    let match = regex.exec(text);
    while (match !== null) {
      const url = match[1];
      const newUrl = await getArticleCoverImageUrl(url);
      const imgTag = match[0];
      const newImgTag = imgTag.replace(url, newUrl).replace(">", ` style="display:block;box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.4); border-radius:15px;width: unset; height: 28rem; margin: 0em auto;">`);
      newText = newText.replace(imgTag, newImgTag);
      match = regex.exec(text);
    }
    newText = newText.replace(codeRegex, '<code style="  border-radius:15px; background-color: #343541  ; color: #D1D5DB; padding: 0.5rem; display: inline-block;">$1</code>');
    return newText;
  }
  
  

  if (!article || !modifiedText) {
    return null;
  }

  const { title, createdAt, description,author } = article;

  return (
    <div  >
      <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
   <div style={{height: "550px", backgroundColor:"#0F141D", display: "flex", flexDirection: "grid", alignItems: "center", justifyContent: "center",marginBottom:"-2%"}}>
   <div style={{backgroundColor:"#0F141D", width:"40%", height:"100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
    <h1 style={{color:"white", fontSize:"3em", fontWeight:"700",padding:"30px", paddingLeft:"30px"}}>{title}</h1>
    {/* <h2 style={{position:"absolute",color:"white", fontSize:"1em", fontWeight:"300", bottom:"40%",left:"10%"}}>{author}</h2> */}
  </div>
  <div style={{backgroundImage:`url(${coverImageUrl})`, backgroundSize:"cover", width:"60%",height:"100%"}}>
  </div>
</div>




      
      

      
      <ArticleUI 
        overrides={{
          Title: { children: title,fontSize:"2.5rem",fontWeight:"500",lineHeight:"1.2" },
          Date: { children: "posted on "+ new Date(createdAt).toLocaleDateString(),fontSize:"0.8rem"},
          Description: { children: description,fontSize:"1rem",fontWeight:"400", },
          Content: { 
            children: null,
            dangerouslySetInnerHTML: { __html: modifiedText+ "- "+ author },
            fontSize: "1.2rem",
            padding:"5%",
            paddingTop:"1%",
            fontWeight: "200",
            lineHeight:"2",
            backgroundColor:"#f5f5f5",
            borderRadius:"15px",
            width:"70%",
            alignSelf:"center",
            fontFamily: "'Poppins', sans-serif",
            marginTop:"1%"
          },
          Coverimage:{src: coverImageUrl, height:" 22rem"},
          style:{backgroundColor:"#CED8E6"}
        }}
      />
    </div>
  );
}


function StoryCollectionData() {
  const [storyImages, setStoryImages] = useState({});

  useEffect(() => {
    const fetchStoryImages = async () => {
      const storyImages = {};

      // Loop through each story and get the URL of the cover image
      const stories = await DataStore.query(Article);
      for (const story of stories) {
        const imageUrl = await getArticleCoverImageUrl(story.coverimage);
        storyImages[story.title] = imageUrl;
      }

      // Update state with the story image URLs
      setStoryImages(storyImages);
    };

    fetchStoryImages();
  }, []);

  return (
    
    <StoryCollection
      overrideItems={({ item, idx }) => {
        return {
          overrides: {
            Banner: { src: storyImages[item.title]},
            Title:{style:{marginLeft:"5px"} },
            Description32683022:{children:[item.description.substring(0,150)+" . . ."],style:{marginLeft:"10px",marginRight:"10px"}},
            Description33693331:{children:new Date(item.createdAt).toLocaleDateString(),style:{paddingLeft:"10px",paddingRight:"5px"}}
          }
        }
      }}
    />
  
  );
}


function ProgressBar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScrollPosition = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollPosition(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition);
    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);

  return (
    <div className="progress-container" style={{ height: '5px', backgroundColor: '#ff9999', width:"100%", zIndex:999}}>
      <div className="progress-bar" style={{ height: '5px', backgroundColor: '#1bf7af', width: `${scrollPosition}%`,zIndex:999 }}></div>
      </div>
  );
};


async function updateArticle(id, newDesc, newText, newCoverImage,newTitle, newAuthor) {
  const original = await DataStore.query(Article, id);
  
  await DataStore.save(
    Article.copyOf(original, updated => {
      updated.description = newDesc;
      updated.text = newText;
      updated.coverimage = newCoverImage;
      updated.title = newTitle;
      updated.author = newAuthor;
    })
  );
}



function App({ signOut }) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateNote, setUpdateNote] = useState();
  
  // const articleDatas = ArticleData("Sunt.");
  // console.log(articleDatas && articleDatas.title);

  return (
    <Router>
      <div style={{position:"fixed",top:"0",width:"100%",height:"8px", zIndex:999}}>
      <NavBar
  height="70px"
  width="100%"
  backgroundColor="#272D2D"
  overrides={{
    Button31632483: {
      onClick: () => setShowCreateModal(true),
      className:"hover",
    },
    Button33703074: {
      className:"hover"
    },
    
    
    
    Button33693327:{style:{color:"#F86969"}},
    "GROW YOUR VENTURES":{style:{wordSpacing:"4px"}}
  }}
/>
      <ProgressBar/>
         
     </div>
      
        <Switch>
          <Route exact path="/">
          <Helmet>
          <title>Grow Your Ventures - Strategies to Improve Work Home and Living</title>
          <meta name="description" content="Strategies to Improve Work Home and Living" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

        </Helmet>

          <div className="" style={{marginTop:"7em",marginLeft:"7em",marginRight:"7em"}}>
          <h1 style={{ paddingLeft: "1%", fontFamily: "raleway", fontWeight: "600", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>FEATURED</h1>

          <div style={{width:"15%",borderBottom:"1px solid black", marginBottom:"2%",marginLeft:"1%"}}></div>
          <StoryCollectionData />
          </div>
          <Footer style={{minWidth:"100%", marginTop:"1rem"}}
          overrides={{
            "You\u2019ve reached the End . . .":{
              
              marginLeft:"300px"
            }
          }}/>
          </Route>
          {/* <Route path="/upload" component={withAuthenticationRequired(UploadPage)} /> */}
          <Route path="/upload">
          <div className='container'style={{marginTop:"10%"}} >
          <Authenticator hideSignUp={true}>
            
            <h2>Here you can design you content. Look at the comments:<a target="_blank" href=" https://jsfiddle.net/9q4fyL53/13/">Template</a></h2>
          <CreateNote style={{ position: 'absolute',background: "white",
  marginLeft: "auto",
  marginRight: 'auto',
  width: "100%",
  left: "0",
  right: "0",
  top: "0px",
  border: ".5px solid grey "}} />

          <FileUploader
      acceptedFileTypes={['image/*']}
      accessLevel="public"
    />
            <div className="container" style={{marginTop:"7em"}}>
            
           <StoryUpdateCollection
  overrideItems={({ item, idx }) => {
    return {
      overrides: {
        StoryUpdate: {
          as: 'button',
          onClick: () =>{
            setUpdateNote(item)
            setShowUpdateModal(true)
           
            
           }
        }
      
      }
    }
  }}
/>
</div>

         
           
           </Authenticator >
           </div>
           <Footer style={{minWidth:"100%", marginTop:"1rem", position:"absolute",bottom:"-10rem"}}
          overrides={{
            "You\u2019ve reached the End . . .":{
              
              marginLeft:"300px"
            }
          }}/>
          </Route>


          <Route path="/article/:articleTitle" render={({ match }) => (
          <>
          <ArticleData articleTitle={match.params.articleTitle}  
          />
          <div style={{marginTop:"-1em",marginLeft:"9em",marginRight:"9em"}}>
          <StoryCollectionData
  overrides={{
    SearchBarWrapper: {
      style: {
        display: 'none',
      },
    },
  }}
/> 
          </div>
          <Footer style={{minWidth:"100%", marginTop:"1rem", zIndex:"-999", position:"absolute",bottom:"0"}}
          overrides={{
            "You\u2019ve reached the End . . .":{
              
              marginLeft:"300px"
            }
          }}/>
          </>
)} />
     
        </Switch>
      
    
      <div className="modal" style={{ display: showCreateModal === false && 'none' }}>
        <CreateNote
          overrides={{
            MyIcon: {
              as: 'button',
              onClick: () => setShowCreateModal(false),
            },
          }}
        />
      </div>
      <div className="modalupdate" style={{ display: showUpdateModal === false && 'none' }}>
      <UpdateNote
  article={updateNote}
  overrides={{
    MyIcon: {
      as: 'button',
      onClick: () => {
        setShowUpdateModal(false);
      },
    },
    TextField33493065:{
  
      defaultValue: updateNote && updateNote.title ? updateNote.title : '',
      onChange: (event) => {
        setUpdateNote((prevNote) => ({
          ...prevNote,
          title: event.target.value,
        }));
      },
    },
    TextField33493066: {
      defaultValue: updateNote && updateNote.text ? updateNote.text : '',
      onChange: (event) => {
        setUpdateNote((prevNote) => ({
          ...prevNote,
          text: event.target.value,
        }));
      },
    },
    TextField33493067: {
      defaultValue: updateNote && updateNote.description ? updateNote.description : '',
      onChange: (event) => {
        setUpdateNote((prevNote) => ({
          ...prevNote,
          description: event.target.value,
        }));
      },
    },
    TextField33493068: {
      defaultValue: updateNote && updateNote.coverimage ? updateNote.coverimage : '',
      onChange: (event) => {
        setUpdateNote((prevNote) => ({
          ...prevNote,
          coverimage: event.target.value,
        }));
      },
    },
    TextField33853081:{
      defaultValue: updateNote && updateNote.author ? updateNote.author : '',
      onChange: (event) => {
        setUpdateNote((prevNote) => ({
          ...prevNote,
          author: event.target.value,
        }));
      },
    },
    Button: {
      onClick: async () => {
        try {
          await updateArticle(updateNote.id, updateNote.description, updateNote.text, updateNote.coverimage,updateNote.title,updateNote.author);
          setShowUpdateModal(false);
          window.location.reload();
        } catch (error) {
          console.log('Error updating article:', error);
        }
      },
    },
    
  }}
/>

</div>
    </Router>
  );
}

export default App;
