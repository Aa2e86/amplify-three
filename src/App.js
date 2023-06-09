import {withAuthenticator, Authenticator, SignIn, AmplifySignOut } from '@aws-amplify/ui-react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Helmet } from 'react-helmet';


import { Storage, DataStore } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router,useParams, Switch, Route,Link } from 'react-router-dom';
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
        const [fetchedArticle] = await DataStore.query(Article, c => c.urltitle.eq(articleTitle));
        setArticle(fetchedArticle);
       
        const url = await getArticleCoverImageUrl(fetchedArticle.coverimage);
        setCoverImageUrl(url);
        const modifiedText = await modifyText(fetchedArticle.text); 
        setModifiedText(modifiedText);
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
      const newImgTag = imgTag.replace(url, newUrl).replace(">", ` style="display:block;box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3); border-radius:8px;width: 46vw; height: unset; margin: 0em auto;">`);
      newText = newText.replace(imgTag, newImgTag);
      match = regex.exec(text);
    }
    newText = newText.replace(codeRegex, '<code style="  border-radius:15px; background-color: #343541  ; color: #D1D5DB; padding: 0.5rem; display: inline-block;">$1</code>');
  
    // Add id attribute to each h2 element
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const headings = Array.from(doc.querySelectorAll('h2'));
    headings.forEach((heading) => {
      const id = heading.textContent.replace(/\s+/g, '-').toLowerCase();
 
      heading.setAttribute('id', id);
      newText = newText.replace(`<h2>${heading.textContent}</h2>`, `<h2 id="${id}">${heading.textContent}</h2>`);
    });
    
    
  
    // Create table of contents
    const toc = headings.map((heading) => {
      const id = heading.getAttribute('id');
      const text = heading.textContent;
      return `<li><a href="#${id}">${text}</a></li>`;
    }).join('');
  
    newText = `<h3 style="margin-bottom:10px !important">Table of Contents</h3><ul style="margin-top:0rem !important;margin-bottom:0px !important">${toc}</ul>` + newText;
  // Get all links in the table of contents
  
  const tocDoc = parser.parseFromString(newText, 'text/html');
  const tocLinks = Array.from(tocDoc.querySelectorAll('li a'));
 
  
    return newText;
  }
  
  
  
  

  if (!article || !modifiedText) {
    return null;
  }

  const { title, createdAt, description,author } = article;
  const date = new Date(createdAt);
  const options = { year: 'numeric', month: 'long', day:"numeric" };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return (
    <div  >
      <Helmet>
          <title>{title}</title>
          <meta name="robots" content="index, follow"/>


          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href={window.location.href} />
        </Helmet>
   <div style={{height: "550px", backgroundColor:"#0F141D", display: "flex", flexDirection: "grid", alignItems: "center", justifyContent: "center",marginBottom:"-2%"}}>
   <div style={{position:"relative",backgroundColor:"#0F141D", width:"40%", height:"100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
    <h1 style={{color:"white", fontSize:"3.1vw", fontWeight:"700",padding:"30px", paddingLeft:"30px"}}>{title}</h1>
    <h3 style={{ borderTop: "1px solid rgba(255, 255, 255, 0.5)",position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", color: "rgba(245, 245, 245, 0.9)",width:"60%", fontSize: "1rem", fontWeight: 500,padding:'2%', paddingBottom: "3%", textAlign: "center" }}>
  {author} at {formattedDate}   
  </h3>
    {/* <h2 style={{position:"absolute",color:"white", fontSize:"1em", fontWeight:"300", bottom:"40%",left:"10%"}}>{author}</h2> */}
  </div>
  <div style={{backgroundImage:`url(${coverImageUrl})`, backgroundSize:"cover", width:"60%",height:"100%"}}>
  </div>
</div>




      
      

      
      <ArticleUI 
        overrides={{
          Title: { children: title,fontSize:"1.5vw",fontWeight:"500",lineHeight:"1.2" },
          Date: { children: "posted on "+ new Date(createdAt).toLocaleDateString(),fontSize:"0.8rem"},
          Description: { children: description,fontSize:"1rem",fontWeight:"400", },
          Content: { 
            className:"articleContent",
            children: null,
            dangerouslySetInnerHTML: { __html: modifiedText },
            fontSize: "1.2rem",
            padding:"5%",
            paddingTop:"2%",
            fontWeight: "200",
            lineHeight:"1.8rem",
            backgroundColor:"#ffffff",
            borderRadius:"15px",
            width:"70%",
            alignSelf:"center",
            fontFamily: "'Poppins', sans-serif",
            marginTop:"2%"
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
    className='story-collection'
    templateColumns="repeat(auto-fit, minmax(400px, 1fr))"
      overrideItems={({ item, idx }) => {
        return {
          overrides: {
            Banner: {
              src: storyImages[item.title],
              alt:item.coverimage.slice(0, item.coverimage.indexOf(".")).replace(/-/g, " "),
              style: {cursor: "pointer"}
            },
            Title:{children: <Link style={{color:"rgb(66, 66, 66)"}} to={`/story/${item.id}`}>{item.title}
            </Link>,
            style: { marginLeft: "5px" } },
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

function CustomFooter(){
  return(
    <div
  style={{
    width: "100%",
    height: "86px",
    display: "flex",
    marginTop:"2%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    backgroundColor: "rgba(39,45,45,1)",
    padding: "0px",
    paddingBottom:"120px"
  }}
>
  <div
    style={{
      fontFamily: "Inter",
      fontSize: "1vw",
      fontWeight: "400",
      color: "rgba(239,240,240,1)",
      lineHeight: "24px",
      textAlign: "left",
      justifyContent:"right",
      alignItems:"right",
      width: "381px",
      height: "72px",
      position: "absolute",
      top: "22.09%",
      left: "20vw",
      padding: "0px",
      whiteSpace: "pre-wrap",
      marginBottom:"10px"
    }}
  >
    {" "}
    Copyright© text 2023 by growyourventures.com{" "}
    <br />
    Contact: loyalderpp@gmail.com
  </div>

  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "unset",
      height: "45px",
      position: "absolute",
      top: "18.6%",
      left: "50%",
      transform: "translateX(-50%)",
      padding: "0px",
    }}
  >
    {/* The content of the Logo component goes here */}
  </div>
  <div
    style={{
      fontFamily: "Raleway",
      fontSize: "32px",
      fontWeight: "800",
      color: "rgba(235,250,237,1)",
      textTransform: "capitalize",
      lineHeight: "37.56800079345703px",
      textAlign: "left",
      position: "absolute",
      top: "28px",
      left: "7vw",
      padding: "0px",
      whiteSpace: "pre-wrap",
    }}
  >
    GYV
  </div>
</div>

  )
}


async function updateArticle(id, newDesc, newText, newCoverImage,newTitle, newAuthor,newUrlTitle) {
  const original = await DataStore.query(Article, id);
  
  await DataStore.save(
    Article.copyOf(original, updated => {
      updated.description = newDesc;
      updated.text = newText;
      updated.coverimage = newCoverImage;
      updated.title = newTitle;
      updated.author = newAuthor;
      updated.urltitle=newUrlTitle;
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
  width="auto"
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
            
          <title>Grow Your Ventures - Solutions to Every Need</title>
          <meta name="robots" content="index, follow"/>

          <meta name="description" content="Strategies to Improve Work Home and Living" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
         

        </Helmet>

          <div className="" style={{marginTop:"7em",marginLeft:"7em",marginRight:"7em"}}>
          <h1 style={{ paddingLeft: "1%", fontFamily: "raleway", fontWeight: "600", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>FEATURED</h1>

          <div style={{width:"15%",borderBottom:"1px solid black", marginBottom:"2%"}}></div>
          <StoryCollectionData />
          </div>
         <CustomFooter/>
          </Route>
          {/* <Route path="/upload" component={withAuthenticationRequired(UploadPage)} /> */}
          <Route path="/upload"><Helmet>
          <title>Upload - For Editors Only</title>
          <meta name="description" content="Editors Ui so that they can upload and edit content" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="noindex"/>
        </Helmet>
          
          <div className='container'style={{marginTop:"10%"}} >
          <Authenticator hideSignUp={true}>
            
            <h2>Here you can design you content. Look at the comments:<a target="_blank" href=" https://jsfiddle.net/98oa5rm3/">Template</a> and here is a tutorial <a target="_blank" href=" https://docs.google.com/document/d/1HJZx-1tNGx2ssP_wf5z3hpUG1PfdUlap3aCoL3quPAw/edit#">Doc</a></h2>
           <h2> <u>Create New Article Below (Scroll down to edit)</u></h2>
            <CreateNote style={{ position: 'absolute',background: "white",
  marginLeft: "auto",
  marginRight: 'auto',
  width: "100%",
  left: "0",
  right: "0",
  top: "0px",
  border: ".5px solid grey "}} 
  
  overrides={{
    Button: {
      className:"Reload"
    },
  }}
  
/>

  

          <FileUploader
      acceptedFileTypes={['image/*']}
      accessLevel="public"
    />
            <div className="container" style={{marginTop:"7em"}}>
            <h2> <u>Update Existing Article Below </u></h2>
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
           <CustomFooter/>
          </Route>


          <Route path="/article/:articleTitle" render={({ match }) => (
          <>
          <ArticleData articleTitle={match.params.articleTitle}  
          />
          <div style={{marginTop:"-1em",marginLeft:"8em",marginRight:"9em"}}>
          {/* <StoryCollectionData
  overrides={{
    SearchBarWrapper: {
      style: {
        display: 'none',
      },
    },
  }}
/>  */}
          </div>
          <CustomFooter/>
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
    TextField33903077:{
      defaultValue: updateNote && updateNote.urltitle ? updateNote.urltitle : '',
      onChange: (event) => {
        setUpdateNote((prevNote) => ({
          ...prevNote,
          urltitle: event.target.value,
        }));
      },
    },
    Button: {
      onClick: async () => {
        try {
          await updateArticle(updateNote.id, updateNote.description, updateNote.text, updateNote.coverimage,updateNote.title,updateNote.author,updateNote.urltitle);
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
