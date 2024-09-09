


/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"
// import { response } from "express";
  
  const apiKey = "AIzaSyAQ8GTMUjLEzkfAUNgfFduO_LWsH6_jmRw";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
  
    // const result = await chatSession.sendMessage(prompt);
    // console.log(result.response.text());
    // return result.text();
    const result = await chatSession.sendMessage(prompt);

// Assuming 'result' has a property 'response' and 'response.text()' is a promise
const responseText = await result.response.text();
console.log(responseText);

return responseText; // Or return await result.text() if that's needed instead

  }
  
  export default run;