import axios from "axios";
import React, { useState } from "react";
import Heading from "./Components/Heading";
import Marque from "./Components/Marque";

function App() {
  const [question, setquestion] = useState('');
  const [ans, setans] = useState('');

  const resetanswer = () => {
    setquestion(''); // Clear the question
    setans(''); // Clear the answer
  };

  const generateans = async () => {
    console.log("loading.....");
    setans(''); // Clear previous answer before generating a new one

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCmJP1SuNDuZMCHAFHKPf7qYVlocPNLiVI",
        method: "post",
        data: {
          "contents": [
            {
              "parts": [{ "text": question }]
            }
          ],
        },
      });

      setans(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error generating answer:", error);
      setans("Sorry, there was an error generating your answer. Please try again.");
    }
  };

  const style = {
    background: `linear-gradient(rgb(255 255 255 / 50%), rgb(255 255 255 / 40%)), url('./girlboy.png')`,
    backgroundSize: 'contain',
    backgroundPosition: 'center right',
  };

  return (
    <>
      <Heading />
      <Marque />
      <div style={style} className="flex flex-col justify-center items-center h-screen w-full">
        <div className="flex items-center gap-3 p-3">
          <h1 className="text-2xl font-bold mb-4">Tell Me Your Problem</h1>
          <img src="./relationship.png" className="w-12" alt="Relationship Icon" />
        </div>

        <textarea
          className="w-96 h-24 border-2 rounded-md p-2 mb-4"
          placeholder="Type your problem here..."
          onChange={(e) => setquestion(e.target.value)}
          value={question}
        ></textarea>

        <div>
          <button
            className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 mb-4"
            onClick={generateans}
          >
            Solve problem
          </button>

          <button
            className="ml-5 px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 mb-4"
            onClick={resetanswer}
          >
            Another problem
          </button>
        </div>

        <p className="text-lg font-medium border-2 p-2">{ans}</p>
      </div>
    </>
  );
}

export default App;
