import React, { useState } from "react";
import "flowbite";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleToggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <>
      <div className="fixed bottom-0 right-0">
        <button
          onClick={handleToggleSidebar}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          data-drawer-target="drawer-navigation"
          data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation"
          data-drawer-backdrop="false"
        >
          {showSidebar ? "Close Sidebar" : "Open Sidebar"}
        </button>
      </div>
      {showSidebar && (
        <div>
          <div className="fixed bottom-0 right-0">
            <button
              onClick={handleToggleSidebar}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              type="button"
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
              data-drawer-backdrop="false"
            >
              {showSidebar ? "Close Sidebar" : "Open Sidebar"}
            </button>
          </div>

          <div
            id="drawer-navigation"
            className="fixed top-0 left-0 z-40 w-96 h-screen p-4 overflow-y-auto bg-slate-50 dark:bg-gray-800"
            tabIndex="-1"
            aria-labelledby="drawer-navigation-label"
          >
            <h5
              id="drawer-navigation-label"
              className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
            >
              Winterhold 3D Model
            </h5>
            <button
              onClick={handleToggleSidebar}
              type="button"
              data-drawer-hide="drawer-navigation"
              aria-controls="drawer-navigation"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <div className="py-4 overflow-y-auto">
              <h1 className="font-bold text-3xl">About</h1>
              <p className="py-2">
                This 3D model was created using Blender for a System Design and
                Implementation class.{" "}
                <a
                  href="https://github.com/KevinThomasNY/Winterhold-University"
                  target="_blank"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  Github Link <br />
                </a>{" "}
                The model includes a fan animation that can be controlled in the
                upper right corner. Below is a link where you can download the
                model in .glb format. The model is 100% free and you can use it
                without restrictions.
              </p>
            </div>
            <div className=" overflow-y-auto">
              <ul className="space-y-2">
                <li>
                  <a
                    href="./Winterhold3DModel.glb"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>

                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Download Model
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/KevinThomasNY/Winterhold-3D-Model"
                    target="_blank"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>

                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Github Repository
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://kevin-thomas-portfolio.vercel.app/"
                    target="_blank"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>

                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Portfolio Website
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <button onClick={handleToggleSidebar}>Toggle Sidebar</button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
