import { useState } from "react";
import "./App.css";
import MultipleChoiceQuestion from "./components/question/MultipleChoiceQuestion";
import TextQuestion from "./components/question/TextQuestion";
import RenderBio from "./components/RenderBio/RenderBio";
import Hero from "./sections/Hero/Hero";
import UploadPhoto from "./components/uploadPhoto/UploadPhoto";

function App() {
  const questions = [
    "What is your name?",
    "Describe yourself in one word...",
    "Name one achievement of yours which you are proud of",
    "What are your core values?",
    "What is the food for your soul?",
    "What is your most favorite beverage?",
    "What words do you live by?",
  ];

  const [text0, setText0] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");

  const [photo, setPhoto] = useState(null);

  return (
    <>
      <Hero />
      <TextQuestion question={questions[0]} text={text0} setText={setText0} />
      <TextQuestion question={questions[1]} text={text1} setText={setText1} />
      <TextQuestion question={questions[2]} text={text2} setText={setText2} />
      <TextQuestion question={questions[3]} text={text3} setText={setText3} />
      <TextQuestion question={questions[4]} text={text4} setText={setText4} />
      <TextQuestion question={questions[5]} text={text5} setText={setText5} />
      <MultipleChoiceQuestion options={["react", "vue"]} />
      <UploadPhoto photo={photo} setPhoto={setPhoto} />
      <RenderBio
        text1={text1}
        text0={text0}
        text2={text2}
        text3={text3}
        text4={text4}
        photo={photo}
      />
    </>
  );
}

export default App;
