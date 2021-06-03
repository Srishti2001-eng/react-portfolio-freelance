import React from 'react';
import Typical from 'react-typical';
import "./Dynamictext.css"




const Dynamictext = ()=>{
    return(
        <>
        <div>
            <p className="dynamic-text">I'm a 
                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={
                        [
                            ' Writer🖋',
                            1000,
                            ' Social Media Influencer📷',
                            1000,
                            ' Youtuber🎥',
                            1000

                        ]
                    }
                />
            
            </p>
            
        </div>
        
        </>
    );
}

export default Dynamictext;