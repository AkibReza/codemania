import React, { useState } from "react";

function App() {
  const [text, updateText] = useState("");
  const [author, updateAuthor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  const colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
    "#1F77B4",
    "#FF66CC",
    "#A0D468",
    "#ED5565",
    "#FC6E51",
    "#48CFAD",
    "#5D9CEC",
    "#AC92EC",
    "#EC87C0",
    "#FFD777",
  ];

  const quoteData = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    const newData = data[Math.floor(Math.random() * data.length)];

    return newData;
  };

  const quoteGenerator = async () => {
    const data = await quoteData();
    setBackgroundColor(colors[Math.floor(Math.random() * colors.length)]);
    updateText('"' + data.text + '"');
    if (data.author == null) {
      updateAuthor("-Unknown");
    } else {
      updateAuthor("-" + data.author);
    }
  };

  return (
    <div className="App font-mono" style={{ backgroundColor }}>
      <h1 className="text-4xl text-center">Famous Quotes Generator</h1>
      <div className="w-max my-8 mx-auto">
        <button
          className="p-2 text-center bg-red-700 hover:bg-red-600"
          onClick={quoteGenerator}
        >
          Click Me!
        </button>
      </div>
      <div className="text-center px-48">
        <p className="text-2xl">{text}</p>
        <p className="text-xl text-gray-200">{author}</p>
      </div>
    </div>
  );
}

export default App;
