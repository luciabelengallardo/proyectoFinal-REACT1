import React from "react";

const Error404 = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="relative w-full max-w-2xl mx-4">
        <img
          src="../img/error404.png"
          alt="Error 404 background"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 px-8 py-6 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white text-center mb-2">
              ¡Ups!
            </h1>
            <p className="text-2xl text-white text-center">Ocurrió un error</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
