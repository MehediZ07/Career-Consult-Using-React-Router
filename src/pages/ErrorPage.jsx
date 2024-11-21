// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="flex gap-4 flex-col justify-center items-center w-screen h-screen">
      <h2 className="text-5xl">Page not found</h2>
      <p>Status: 404</p>
      <button onClick={goToHome} className="btn">
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;
