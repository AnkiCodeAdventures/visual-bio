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
    "What is your motto for life?",
    "What is your most favorite beverage?",
    "Describe yourself in one word...",
    "What are your core values?",
    "What is the food for your soul?",
    "What words do you live by?",
    "What is your profession?",
    "What is one achievement you are proud of?",
    "What are your goals?",
    "What are your personal goals?",
    "What one change do you wish to bring about in the world",
    "Where are you a distruptor for change?",
    "Write you most favorite word",
  ];

  const multipleChoice = [
    {
      label: "What is your favorite hobby",
      options: [
        "reading",
        "gardening",
        "playing games",
        "writing",
        "cooking",
        "travelling",
      ],
    },
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
      <MultipleChoiceQuestion
        options={multipleChoice[0].options}
        label={multipleChoice[0].label}
      />
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
