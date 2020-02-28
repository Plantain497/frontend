import React, { FunctionComponent, ReactElement } from 'react';

const App: FunctionComponent = (): ReactElement => {
  return (
    <div className="h-screen bg-gray-500">
      <div className="p-16">
        <h1 className="text-xl text-white">Tailwind Setup</h1>
        <div className="py-4">
          <button className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
            Success
          </button>
          <button className="inline-flex px-2 ml-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
            Error
          </button>
          <button className="inline-flex px-2 ml-2 text-xs font-semibold leading-5 text-yellow-800 bg-yellow-100 rounded-full">
            Warning
          </button>
        </div>
      </div>
    </div>
  );
};

export { App };
