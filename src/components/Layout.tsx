import { ReactNode, useState, useEffect } from 'react';
import NavBar from '../ui-components/NavBar';
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
  return (
    <>
      <div style={{ position: 'fixed', top: '0', width: '100%', height: '8px', zIndex: 999 }}>
      <NavBar
  height="70px"
  width="auto"
  backgroundColor="#272D2D"
  overrides={{
   
    Button31632483: {
     display:"none",
      className:"hover",
    },
    Button33703074: {
      className:"hover",
      width:"10vw"
    },
    
    
    
    Button33693327:{style:{color:"#F86969"}},
    "GROW YOUR VENTURES":{style:{wordSpacing:"4px"}}
  }}
/>
        <ProgressBar />
      </div>
      <div >{children}</div>
      <CustomFooter/>
    </>
  );
}