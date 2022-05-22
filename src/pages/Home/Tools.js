import React, { useEffect, useState } from "react";
import SingleTool from "./SingleTool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div className=" bg-secondary py-20">
      <div className="container">
        <h1 className="text-4xl text-center text-accent mb-5 uppercase font-bold">
          Recenlty Menufectured
        </h1>
        <div className="flex justify-center items-center gap-2 mb-10">
          {/* <span className=" h-1 bg-accent rounded-full w-20"></span> */}
          <span className=" h-1 bg-primary rounded-full w-28"></span>
          {/* <span className="h-1 bg-accent rounded-full w-20"></span> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center py-10">
          {tools.slice(0, 3).map((tool, index) => (
            <SingleTool key={index} tool={tool}></SingleTool>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;