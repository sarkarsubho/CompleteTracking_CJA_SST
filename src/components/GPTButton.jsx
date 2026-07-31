import React from "react";
import { useNavigate } from "react-router-dom";
import { BotMessageSquare } from "lucide-react";

const GPTButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="fixed bottom-8 right-8 bg-slate-200 p-3 rounded-t-2xl rounded-ee-2xl rounded-es-xs cursor-pointer "
      onClick={() => navigate("/askGPT")}
    >
      <BotMessageSquare size={36} color="#4c00ff" />
    </div>
  );
};

export default GPTButton;
