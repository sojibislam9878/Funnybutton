import { useState, useEffect, useRef } from "react";

const App = () => {
  const [title, setTitle] = useState("Are you gay?");
  const [position, setPosition] = useState({ top: 0, right: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    setPosition({ top: 0, right: 0 });
  }, []);

  const updateRandomPosition = () => {
    const container = containerRef.current;

    if (container) {
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const buttonWidth = 128;
      const buttonHeight = 128;

      const randomTop = Math.random() * (containerHeight - buttonHeight);
      const randomRight = Math.random() * (containerWidth - buttonWidth);

      setPosition({ top: randomTop, right: randomRight });
    }
  };

  const handleButtonMove = () => {
    updateRandomPosition();
  };

  const handleYesButton = () => {
    setTitle("I knew it!!! 😒");
  };

const  handleNOButton = ()=>{
  handleButtonMove()
}

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        ref={containerRef}
        className="relative w-5/6 h-4/6 lg:w-4/6 bg-white rounded-lg shadow-lg"
      >
        {/* Title */}
        <h1 className="text-center mt-14 text-2xl font-bold text-gray-700">
          {title}
        </h1>

        {/* Buttons Container */}
        <div className="mt-36 w-1/2 mx-auto relative">
          <div
          >
            <button
              onClick={handleYesButton}
              className="bg-green-400 hover:bg-green-500 px-4 py-3 text-lg font-semibold rounded-md capitalize text-white"
            >
              Yes
            </button>
          </div>
          <div
            style={{
              position: "absolute",
              top: `${position.top}px`,
              right: `${position.right}px`,
            }}
          >
            <button
             onMouseEnter={handleButtonMove} 
            onClick={handleNOButton} className="bg-red-400 hover:bg-red-500 px-4 py-3 text-lg font-semibold rounded-md capitalize text-white">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
