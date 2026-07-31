import { SendHorizontal } from "lucide-react";
import React, { useState } from "react";

const AskGPT = () => {
  const [input, setInput] = useState("");
  const [chat, setchat] = useState([]);

  const askToGPT = async () => {};

  return (
    <div>
      <div>
        <h2>WElcome to Secure GPT</h2>
      </div>
      <div>
        <div id="chatBox"></div>
        <div id="input">
          <input type="text" placeholder="Ask your quarry..." />
          <button>
            {" "}
            <SendHorizontal />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskGPT;
