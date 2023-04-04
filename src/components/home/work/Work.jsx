 import { Fullscreen } from '@mui/icons-material'
 import React from 'react'
 import Data from './Data'
 import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
 import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
 const Work = () => {
   return (
     <>
       <section className="work">
        <div className="heading">
            <h3>My works</h3>
            <h1>Some of My Completed Projects</h1>
        </div>
        <div className="content">
            {Data.map((val)=> {
                return (
                    <>
                    <div className="box">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="overlay">
                            <div className="text">
                                <h2>{val.title}</h2>
                                <p>{val.desc}</p>
                            </div>
                            <div className="icon">
                                <FullscreenOutlinedIcon className="iconWork" />
                                <IosShareOutlinedIcon className="iconShare" />
                                
                            </div>
                        </div>
                    </div>
                    </>
                )
            }
            )}
        </div>
        
        </section>
     </>
   )
 }
 
 export default Work