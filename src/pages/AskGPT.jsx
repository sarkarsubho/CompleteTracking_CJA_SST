import axios from "axios";
import { SendHorizontal } from "lucide-react";
import React, { useEffect, useState } from "react";

const AskGPT = () => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);


const askToGPT = async () => {

  axios.post(
    "https://api-pp.se.axa-go.applications.services.axa-tech.intraxa/ago-m365-securegpt-hub-v1-vrs/providers/openai/deployments/gpt-4o-mini-2024-07-18/chat/completions?api-version=2025-01-01-preview",
  );

};

  const handleSubmit = () => {
    let messageObj = {
      userType: "user",
      value: input,
    };
    console.log("hh", input);
    setInput("");
    setChat((prev) => [...prev, messageObj]);
    askToGPT(messageObj.value);
  };

  

  // useEffect(()=>{

  // },[chat])

  return (
    <div className="flex flex-col h-[91vh] justify-between ">
      <div>
        <h2 className="text-center text-2xl pt-4">Welcome to Secure GPT</h2>
      </div>
      <div
        id="chatBox "
        className="flex flex-col gap-2 grow w-[95%] md:w-[80%] m-auto p-4"
      >
        {" "}
        {chat.map((e) => {
          return e.userType !== "user" ? (
            <div className="flex gap-2 ">
              <div className="dark:bg-gray-800 bg-gray-500 w-fit h-fit px-2 py-1 rounded-full mt-2 ">
                SG
              </div>
              <div className="dark:bg-gray-800 bg-gray-500 px-2 rounded-t-2xl rounded-ee-2xl rounded-es-xs h-fit pb-1 max-w-[70%]">
                {e.value}{" "}
              </div>
            </div>
          ) : (
            <div className="flex gap-2 flex-row-reverse self-end">
              <div className="dark:bg-gray-800 bg-gray-500 w-fit h-fit px-2 py-1 rounded-full mt-2">
                SS
              </div>
              <div className="dark:bg-gray-800 bg-gray-500 px-2 pb-2 pt-1 rounded-t-2xl rounded-es-2xl rounded-ee-xs h-fit pb-1 max-w-[70%]">
                {e.value}
              </div>
            </div>
          );
        })}
      </div>
      <div className="">
        <div
          id="input "
          className="flex gap-2 justify-between p-2 shadow-xl rounded-2xl border border-gray-200 w-[95%] md:w-[80%] m-auto mb-2"
        >
          <input
            type="text"
            placeholder="Ask your quarry..."
            className="grow ml-4 focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSubmit} className="-rotate-15 cursor-pointer">
            {" "}
            <SendHorizontal />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskGPT;
