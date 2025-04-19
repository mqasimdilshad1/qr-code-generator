import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleGenerate = () => {
    if (url.trim()) {
      navigate("/result", { state: { url } });
    }
  };

  return (
    <div className="min-h-screen bg-qa-bg flex flex-col items-center justify-center p-6 text-white">
      <img src="/resources/Logo.svg" className="w-32 mb-10" alt="Logo" />
      <div className="relative">
        <input
          type="text"
          className="w-[450px] p-3 rounded-xl border border-primary bg-dark text-white placeholder-white focus:outline-none focus:border-primary"
          placeholder="Enter a URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          onClick={handleGenerate}
          className="absolute top-[10%] right-[0.3rem] bg-primary text-white px-6 py-2 text-sm rounded-xl"
        >
          QR Code
        </button>
      </div>
    </div>
  );
};

export default App;
