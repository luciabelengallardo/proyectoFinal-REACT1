import React from "react";
import error404 from "../img/error404.png";

const Error404 = () => {
  return (
    <>
      <div className="d-flex  align-items-center justify-content-center min-vh-100">
        <div className="text-center w-100 mx-4">
          <img
            src={error404}
            alt="Error 404 background"
            className="w-50 mb-4"
          />
          <div>
            <div className=" px-4 py-3  ">
              <h1 className=" font-weight-bold text-white mb-2">¡Oops!</h1>
              <p className=" text-white">Parece que ocurrió un error</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
