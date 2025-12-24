import React from "react";

const FailedTask = () => {
  return (
    <div className="shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl ">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
        <h4 className="text-sm">05 Dec 2025</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">Make a Video</h2>
      <p className="text-sm mt-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
        ad. Quae omnis quis natus dolores?
      </p>
      <div className="mt-2">
        <button className="w-full">Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;
