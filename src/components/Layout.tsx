import { ReactNode, useState, useEffect } from 'react';
import NavBar from '../ui-components/NavBar';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {  Poppins } from 'next/font/google';
//sgasgsagsagas
import { Raleway } from 'next/font/google';
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
      paddingBottom:"120px",
      zIndex:-1
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


type LayoutProps = {
  children: ReactNode;
};
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



export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const canonicalUrl = `https://www.growyourventures.com${router.asPath}`;
  return (
    <>
    <Head>
       {/* Add your Google Tag Manager code here */}
       <script async src="https://www.googletagmanager.com/gtag/js?id=G-BBEKYRL9C2"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-BBEKYRL9C2');
              `,
            }}
          />
    <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Poppins:wght@300;400;500;600;700;800&family=Major+Mono+Display&family=Ubuntu:wght@400&display=swap&family=Sparten:wght@500&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Raleway:wght@500&display=swap" rel="stylesheet" />
    <link rel="canonical" href={canonicalUrl} />
</Head>
      <div style={{ position: 'fixed', top: '0', width: '100%', height: '8px', zIndex: 999 }}>
      <NavBar
  height="70px"
  width="auto"
  backgroundColor="#272D2D"
  overrides={{
   
    Button31632483: {
     display:"none",
      className:"hover",
      width:"10vw",
      fontSize:"1.5vw"
    },
    
    Button33703074: {
      className:"hover",
      width:"12vw",
      fontSize:"1.2vw",
      height:"6vh"
    },
    
    
    
    Button33693327:{style:{color:"#F86969",
    fontSize:"1.2vw"},width:"7vw ",height:"6vh"}
    ,
    "GROW YOUR VENTURES":{style:{wordSpacing:"5px", fontFamily: "'Raleway', sans-serif !important",fontSize:"2vw !important"}}
  }}
/>
        <ProgressBar />
      </div>
      <div >{children}</div>
      <CustomFooter/>
    </>
  );
}
