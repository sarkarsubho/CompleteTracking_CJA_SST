import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ErrorComponent = () => {
  const [loading, setLoading] = useState(false);

  const handleNetworkCall = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.example.com/data");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      // Show error toast
      toast.error(`An error occurred: ${error.message}`);

      // Push to GTM dataLayer
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "error_message",
          type: "Network Error", // any type off error that occers in the page here is the network error
          page_url: window.location.href,
          section: "Home", 
          er_message: error.message, // or any kind of specfic message Which best suites for Your KPI
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-fit bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full text-cyan-400 text-xs font-medium mb-6">
      <button
        onClick={handleNetworkCall}
        disabled={loading}
        // className="bg-red-300  rounded p-1 mt-2"
      >
        {loading ? "Loading..." : "Perform Network Call"}
      </button>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default ErrorComponent;
