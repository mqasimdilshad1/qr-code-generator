import React from "react";
import { useLocation, Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

const QrResult = () => {
  const { state } = useLocation();
  const url = state?.url || "";

  if (!url) return null;

  return (
    <div className="min-h-screen bg-qa-bg text-white flex flex-col items-center pt-10 p-6">
      {/* Clickable Logo */}
      <Link to="/">
        <img
          src="/resources/Logo.svg"
          alt="Logo"
          className="w-[8rem] mb-[5rem] cursor-pointer"
        />
      </Link>

      <div className="bg-white/10 rounded-full p-6 mb-6">
        <div className="bg-white p-4 rounded-lg">
          <QRCodeCanvas value={url} size={200} />
        </div>
      </div>

      <div className="flex gap-6">
        <button className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-lg font-semibold">
          Download
          <img
            src="/resources/Load_circle_duotone.svg"
            alt="Download"
            className="w-5 h-5"
          />
        </button>
        <button className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-lg font-semibold">
          Share
          <img
            src="/resources/link_alt.svg"
            alt="Share"
            className="w-5 h-5"
          />
        </button>
      </div>
    </div>
  );
};

export default QrResult;
