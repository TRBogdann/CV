
import React,{useState} from "react";

function Portofolio()
{
  const stop="slideshow stopAnimation";
  const start="slideshow startAnimation";
  const [animationState,setState]= useState(start);




    return (
   
        <div className="smt">
        <div className="curtain"> </div>
      
            <div className={animationState} onMouseEnter={()=>
            {
               setState(stop);
            }} 
                                            onMouseLeave={()=>
                                                {
                                                   setState(start);
                                                }} 
            >
                                            
                </div>
                <div className={animationState} onMouseEnter={()=>
            {
               setState(stop);
            }} 
                                            onMouseLeave={()=>
                                                {
                                                   setState(start);
                                                }} 
            >
                                            
                </div>
                <div className={animationState} onMouseEnter={()=>
            {
               setState(stop);
            }} 
                                            onMouseLeave={()=>
                                                {
                                                   setState(start);
                                                }} 
            >
                                            
                </div>            <div className={animationState} onMouseEnter={()=>
            {
               setState(stop);
            }} 
                                            onMouseLeave={()=>
                                                {
                                                   setState(start);
                                                }} 
            >
                                            
                </div>            <div className={animationState} onMouseEnter={()=>
            {
               setState(stop);
            }} 
                                            onMouseLeave={()=>
                                                {
                                                   setState(start);
                                                }} 
            >
                                            
                </div>            <div className={animationState} onMouseEnter={()=>
            {
               setState(stop);
            }} 
                                            onMouseLeave={()=>
                                                {
                                                   setState(start);
                                                }} 
            >
                                            
                </div>            <div className={animationState} onMouseEnter={()=>
            {
               setState(stop);
            }} 
                                            onMouseLeave={()=>
                                                {
                                                   setState(start);
                                                }} 
            >
                                            
                </div>            <div className={animationState} onMouseEnter={()=>
            {
               setState(stop);
            }} 
                                            onMouseLeave={()=>
                                                {
                                                   setState(start);
                                                }} 
            >
                                            
                </div>            <div className={animationState} onMouseEnter={()=>
            {
               setState(stop);
            }} 
                                            onMouseLeave={()=>
                                                {
                                                   setState(start);
                                                }} 
            >
                                            
                </div>            <div className={animationState} onMouseEnter={()=>
            {
               setState(stop);
            }} 
                                            onMouseLeave={()=>
                                                {
                                                   setState(start);
                                                }} 
            >
                                            
                </div>            <div className={animationState} onMouseEnter={()=>
            {
               setState(stop);
            }} 
                                            onMouseLeave={()=>
                                                {
                                                   setState(start);
                                                }} 
            >
                                            
                </div>            <div className={animationState} onMouseEnter={()=>
            {
               setState(stop);
            }} 
                                            onMouseLeave={()=>
                                                {
                                                   setState(start);
                                                }} 
            >
                                            
                </div>
                <div className={animationState} onMouseEnter={()=>
            {
               setState(stop);
            }} 
                                            onMouseLeave={()=>
                                                {
                                                   setState(start);
                                                }} 
            >
                                            
                </div>
                <div className="curtain"> </div>
        </div>
    );
}
 export default Portofolio;