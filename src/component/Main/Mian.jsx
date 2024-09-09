import React, { useContext } from "react";
import './Main.css'
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";


function Main(){

    //states are import //

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

    return(
        <div className="main">
          <div className="nav">
            <p>Spy Ai 2.O</p>
            <img  id="myImge" src={assets.sachin_icon } alt="" />
          </div>
          <div className="main-container">
            {!showResult ?
            <>
             <div className="greet">
                <p><span>Hey buddy!</span></p>
                <p>How can i help you ?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>suggest me most beautiful places in worldwide?</p>
                    <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card">
                    <p>Clarify the Concept Behind the Questions:</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card">
                    <p>Will you use my conversations for training?  </p>
                    <img src={assets.message_icon} alt="" />
                </div>

                <div className="card">
                    <p>Please provide the code you'd like me to review, and I'll help you find the error! </p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
           : <div className="result ">
            <div className="result-title">
                <img  src={assets.sachin_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading
                ? <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div> 
                :
                <p dangerouslySetInnerHTML={{ __html:resultData}}></p>
                 }
            </div>
           </div> 
        }
           

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input } type="text" placeholder="Enter a prompt here..." />
                    <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Spy-Ai 2.O help to people to provide information about worldwide , Double click to more about Spy
                </p>
            </div>
          </div>
        </div>
    )
}
export default Main