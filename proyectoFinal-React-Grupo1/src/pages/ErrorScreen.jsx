import React from "react";
import error404 from "../img/error404.png";

const Error404 = () => {
  return (
    <div className="d-flex text-center align-items-center justify-content-center">
      <div className=" w-100 mx-4">
        <img src={error404} alt="Error 404 background" className="w-50 " />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className=" px-8 py-6  ">
            <h1 className=" font-bold text-white text-center mb-2">¡Oops!</h1>
            <p className=" text-white text-center">
              Parece que ocurrió un error
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
