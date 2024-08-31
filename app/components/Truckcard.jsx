"use client";
import Image from "next/image";
import { useState } from "react";

export default function TruckCard({
  image,
  title,
  description = "Breve descripción del Medio de Transporte y sus servicios",
  province,
  municipio,
  chofer,
  solicitudes = 0,
}) {
  const [solCantidad, setSolCantidad] = useState(solicitudes);
  const addSol = () => {
    setSolCantidad(solCantidad + 1);
  };

  return (
    <>
      <div className="max-w-sm mx-auto items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          className="rounded-t-lg"
          src={image}
          alt=""
          width={400}
          height={350}
          quality={75}
        />
        <div className="p-5">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
            {province + " / " + municipio}
          </span>
          <h1 className="mb-3 mt-3 text-medium text-gray-700 dark:text-gray-400">
            {description}
          </h1>
          <button
            type="button"
            onClick={addSol}
            className="relative lg:w-full inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 hover:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
            Contactar
            <div className="w-16">&nbsp;</div>
            {solCantidad > 0 && (
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                {solCantidad}
              </div>
            )}
            <div className="relative">
              <Image
                className="w-10 h-10 rounded-full border-2 border-white"
                src={chofer}
                alt="profile image"
                width={50}
                height={50}
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
