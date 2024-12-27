import { useState } from "react";
import "./App.css";
import RenderBio from "./components/RenderBio/RenderBio";
import Hero from "./sections/Hero/Hero";
import UploadPhoto from "./components/uploadPhoto/UploadPhoto";
import Question from "./components/question/Question";

function App() {
  const questions = [
    "What is your name?",
    "What is your motto for life?",
    // achievements
    "What is your biggest leap of faith moment?",
    "What unexpected turn led to your growth?",
    "What is one achievement you are proud of?",
    //support
    "Who are your main supporters?",
    "What collaboarations are you most proud of?",
    // professional
    "How do you view distruption in your feild?",
    "What goals are you working towards?",
    "What has been your biggest contribution in your feild of work?",
    "How do you do a complex task?",
    // personal facts
    "What is your most favorite beverage?",
    "What is the food for your soul?",
    "Who's your furry friend?",
    "Write you most favorite word",
    "What is your favorite book?",
    "What is your favorite color?",
    "Are you a beach or a mountain person?",
    // wisdom
    "What unique perspective do you bring?",
    "What one change do you wish to bring about in the world",
    "What do you think is the secret of life?",
    "What is success to you?(3 words)",
    "How do you spark change in others?",
    // community
    "How can you make the world more inclusive?",
    "How do you give back to your community?",
  ];

  const [text0, setText0] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");
  const [text8, setText8] = useState("");
  const [text9, setText9] = useState("");
  const [text10, setText10] = useState("");
  const [text11, setText11] = useState("");
  const [text12, setText12] = useState("");
  const [text13, setText13] = useState("");
  const [text14, setText14] = useState("");
  const [text15, setText15] = useState("");
  const [text16, setText16] = useState("");
  const [text17, setText17] = useState("");
  const [text18, setText18] = useState("");
  const [text19, setText19] = useState("");
  const [text20, setText20] = useState("");
  const [text21, setText21] = useState("");
  const [text22, setText22] = useState("");
  const [text23, setText23] = useState("");
  const [text24, setText24] = useState("");
  const [text25, setText25] = useState("");

  const texts = [
    text0,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    text9,
    text10,
    text11,
    text12,
    text13,
    text14,
    text15,
    text16,
    text17,
    text18,
    text19,
    text20,
    text21,
    text22,
    text23,
    text24,
    text25,
  ];

  const setTexts = [
    setText0,
    setText1,
    setText2,
    setText3,
    setText4,
    setText5,
    setText6,
    setText7,
    setText8,
    setText9,
    setText10,
    setText11,
    setText12,
    setText13,
    setText14,
    setText15,
    setText16,
    setText17,
    setText18,
    setText19,
    setText20,
    setText21,
    setText22,
    setText23,
    setText24,
    setText25,
  ];

  const [photo, setPhoto] = useState(null);

  return (
    <>
      <Hero />
      <UploadPhoto photo={photo} setPhoto={setPhoto} />
      {questions.map((question, index) => {
        return (
          <Question
            key={index}
            question={question}
            text={texts[index]}
            setText={setTexts[index]}
          />
        );
      })}

      <RenderBio
        text0={text0}
        text1={text1}
        text2={text2}
        text3={text3}
        text4={text4}
        text5={text5}
        text6={text6}
        text7={text7}
        text8={text8}
        text9={text9}
        text10={text10}
        text11={text11}
        text12={text12}
        text13={text13}
        text14={text14}
        text15={text15}
        text16={text16}
        text17={text17}
        text18={text18}
        text19={text19}
        text20={text20}
        text21={text21}
        text22={text22}
        text23={text23}
        text24={text24}
        text25={text25}
        photo={photo}
      />
    </>
  );
}

export default App;
