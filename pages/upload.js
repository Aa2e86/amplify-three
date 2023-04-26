import { useRouter } from 'next/router';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { serializeModel } from "@aws-amplify/datastore/ssr";
import {withAuthenticator, Authenticator, SignIn, AmplifySignOut } from '@aws-amplify/ui-react';
import Head from 'next/head';
import Link from 'next/link';

import { Storage, DataStore } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { Article } from '../src/models'
import { FileUploader } from '@aws-amplify/ui-react'
import Layout from '../src/components/Layout';
import { NavBar, CreateNote, UpdateNote, StoryCollection,Footer, ArticleUI,StoryUpdateCollection, StoryUpdate } from '../src/ui-components';
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

export default function UploadPage() {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [updateNote, setUpdateNote] = useState();
    
    return (
      <>
      <Layout>
    
  
        <div style={{ marginTop: "-1em", marginLeft: "8em", marginRight: "9em" }}>
        <Head>
          <title>Upload - For Editors Only</title>
          <meta name="description" content="Editors Ui so that they can upload and edit content" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="noindex"/>
        </Head>
          
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
  style={{marginTop:"10vh"}}
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
         
           
           </Authenticator >
           </div>
          
        </div>
    
        </Layout>
      </>
    );
  }