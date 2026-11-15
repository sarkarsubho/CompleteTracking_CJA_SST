import React from "react";

const DialogBox = ({
  content,
  heading,
  actionTrue,
  actionFalse,
  actionTrueText,
  actionFalseText,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full  bg-opacity-10 flex items-center justify-center z-50">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg m-w-md w-full max-w-md">
        <h2
          className="text-xl font-semibold text-gray-900 mb-4"
          style={{ fontFamily: "cursive" }}
        >
          {heading}
        </h2>
        <p
          className="mb-4 text-gray-900 text-lg "
          style={{ fontFamily: "cursive" }}
        >
          {content}
        </p>
        <div className="flex justify-around space-x-4 w-full">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-[8em] cursor-pointer"
            onClick={actionTrue}
          >
            {actionTrueText}
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 w-[8em] cursor-pointer"
            onClick={actionFalse}
          >
            {actionFalseText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
