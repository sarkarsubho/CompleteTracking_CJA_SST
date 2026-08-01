import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { BotMessageSquare } from "lucide-react";

const GPTButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  if (location.pathname === "/askGPT") {
    return null;
  } else {
    return (
      <div
        className="fixed bottom-8 right-8 bg-slate-200 hover:bg-slate-300 p-3 rounded-t-2xl rounded-ee-2xl rounded-es-xs cursor-pointer "
        onClick={() => navigate("/askGPT")}
      >
        <BotMessageSquare size={36} color="#4c00ff" />
      </div>
    );
  }
};

export default GPTButton;
