import Image from 'next/image'
import { Inter } from 'next/font/google'

import { Authenticator} from '@aws-amplify/ui-react';

import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

import { Storage, DataStore } from 'aws-amplify';
import { useState, useEffect } from 'react';

import { NavBar, CreateNote, UpdateNote, StoryCollection,Footer, ArticleUI,StoryUpdateCollection, StoryUpdate } from '../src/ui-components';
import { Article } from '../src/models'
import { FileUploader } from '@aws-amplify/ui-react'
import Layout from '../src/components/Layout';
import { image } from '@aws-amplify/ui/dist/types/theme/tokens/components/image';
const inter = Inter({ subsets: ['latin'] })
type StoryImages = { [key: string]: string };

async function getArticleCoverImageUrl(key: string): Promise<string> {
  const url = await Storage.get(key);
  return url;
}

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


function StoryCollectionData() {
  const [storyImages, setStoryImages] = useState<StoryImages>({});

  useEffect(() => {
    const fetchStoryImages = async () => {
      const storyImages: StoryImages = {};
      console.log(DataStore)
      // Loop through each story and get the URL of the cover image
      const stories = await DataStore.query(Article);
      for (const story of stories) {
        if (story.coverimage) {
          const imageUrl = await getArticleCoverImageUrl(story.coverimage);
          storyImages[story.title] = imageUrl;
        }
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
      overrideItems={({ item }) => {
        return {
          overrides: {
            Banner: {
              src: storyImages[item.title],
              alt:item.coverimage?.slice(0, item.coverimage.indexOf(".")).replace(/-/g, " "),
              style: {cursor: "pointer"}
            },
            Title:{children: <Link href={`/article/${item.urltitle}`} passHref>{item.title}</Link>,
            style: { marginLeft: "5px" },
            Description32683022:{children:[item.description.substring(0,150)+" . . ."],style:{marginLeft:"10px",marginRight:"10px"}},
            Description33693331:{children:new Date(item.createdAt).toLocaleDateString(),style:{paddingLeft:"10px",paddingRight:"5px"}}
          }
        }
      }}
      }/>
  );
}



export default function Home() {
  
  return (
    <Layout >
      <div style={{ marginTop: '7em', marginLeft: '7em', marginRight: '7em' }}>
      <Head>
        <title>Grow Your Ventures - Solutions to Every Need</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Strategies to Improve Work Home and Living" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Link href="/">
      <h1 style={{ paddingLeft: '1%', fontSize:"3.2vw", fontFamily: 'raleway', fontWeight: '600', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        FEATURED
      </h1>
      <div style={{ width: '22%', borderBottom: '1px solid black', marginBottom: '2%' }}></div>
      
      <StoryCollectionData />
      </Link>

  </div>
    </Layout>
  );
}
