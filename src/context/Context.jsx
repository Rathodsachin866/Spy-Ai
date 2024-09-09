
import { createContext, useState } from "react";
import run from "../config/spy";


export const Context = createContext();

const ContextProvider = (props) =>{


 

   const [input, setInput] = useState("");
   const [ recentPrompt, setRecemtPrompt] = useState("");
   const [prevPrompt, setPrevprompt] = useState([])
   const [showResult , setShowResult] = useState(false);
   const[loading, setLoading] = useState(false)
   const [ resultData, setResultData] = useState("")

   const delayPara = (index,nextWord) =>{
   setTimeout(function (){
     setResultData(prev=>prev+nextWord)
   },75*index)
   }
   // below funtion is for sending the question anything that user want
   const onSent = async (prompt) => {
    setResultData("")
    setLoading(true)
    setShowResult(true)

    //recent generate 
    let response;
    if(prompt !==undefined){
      response = await run(prompt);
      setRecemtPrompt(prompt)
    }
    else{
        setPrevprompt(prev => [...prev,input])
        setRecemtPrompt(input);
        response=await run(input)
    }
    // setRecemtPrompt(input)
    // setPrevprompt(prev=>[...prev,input])
    // const response = await run(input)
    //remove the star ** for result data 

    let responseArray = response.split("**")
    let newResponse;
    for(let i=0; i < responseArray.length; i++){
     if(i===0 || i%2 !==1){
        newResponse += responseArray[i];
     }
     else{
        newResponse += "<b>"+responseArray[i]+"</b>"
     }
    }

    //new lineess
    let newResponse2 = newResponse.split("*").join("<br>")
    let newResponseArray = newResponse2.split(" ");

    //itrate earch strig if there is space the it starrt with new line
    for(let i=0; i<newResponseArray.length; i++ ){
        const nextWord = newResponseArray[i];

        //delay typeing funtion call
        delayPara(i,nextWord+" ");
    }

    //loading animatioin out
    setLoading(false)
    //input flied get empty
    setInput("")
}

    const ContextValue = {
     prevPrompt,
     setPrevprompt,
     onSent,
     setRecemtPrompt,
     recentPrompt,
     showResult,
     loading,
     resultData,
     input,
     setInput

    }

    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider