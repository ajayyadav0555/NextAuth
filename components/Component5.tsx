import React from 'react';

const Component5 = () => {
  return (
    <div className="flex w-screen min-h-screen">
      <div
        className="flex-1"
        style={{
          backgroundImage: "url('/image5.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain", 
          backgroundPosition: "center",
        }}
      ></div>

      <div
        className="flex-1"
        style={{
          backgroundImage: "url('/image6.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain", 
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Component5;
