import { useState } from "react";
import "./App.css";
import RenderBio from "./components/RenderBio/RenderBio";
import Hero from "./sections/Hero/Hero";
import UploadPhoto from "./components/uploadPhoto/UploadPhoto";
import Question from "./components/question/Question";

function App() {
  const questions = [
    { question: "What is your name?", key: "name" },
    { question: "What is your motto for life?", key: "motto" },
    //achievements
    { question: "What is your biggest leap of faith moment?", key: "leap" },
    { question: "What unexpected turn led to your growth?", key: "unexpected" },
    {
      question: "What is one achievement you are proud of?",
      key: "achievement",
    },
    //support

    { question: "Who are your main supporters?", key: "supporter" },
    {
      question: "What collaborations are you most proud of?",
      key: "collaborations",
    },

    // professional
    {
      question: "How do you view distruption in your feild?",
      key: "distruption",
    },
    { question: "What goals are you working towards?", key: "goals" },
    {
      question:
        "What has been your biggest contribution in your feild of work?",
      key: "contribution",
    },
    { question: "How do you do a complex task?", key: "complex" },
    // personal facts
    { question: "What is your most favorite beverage?", key: "beverage" },
    { question: "What is the food for your soul?", key: "food" },
    { question: "Who's your furry friend?", key: "furry" },
    { question: "Write you most favorite word", key: "word" },
    { question: "What is your favorite book?", key: "book" },
    { question: "What is your favorite color?", key: "color" },
    { question: "Are you a beach or a mountain person?", key: "beach" },
    // wisdom
    { question: "What unique perspective do you bring?", key: "perspective" },
    {
      question: "What one change do you wish to bring about in the world",
      key: "change",
    },
    { question: "What do you think is the secret of life?", key: "secret" },
    { question: "What is success to you?(3 words)", key: "success" },
    { question: "How do you spark change in others?", key: "spark" },
    // community
    {
      question: "How can you make the world more inclusive?",
      key: "inclusive",
    },
    { question: "How do you give back to your community?", key: "community" },
  ];

  const [answers, setAnswers] = useState({
    name: "",
    motto: "",
    leap: "",
    unexpected: "",
    achievement: "",
    supporter: "",
    collaborations: "",
    distruption: "",
    goals: "",
    contribution: "",
    complex: "",
    beverage: "",
    food: "",
    furry: "",
    word: "",
    book: "",
    color: "",
    beach: "",
    perspective: "",
    change: "",
    secret: "",
    success: "",
    spark: "",
    inclusive: "",
    community: "",
  });

  const [photo, setPhoto] = useState(null);

  return (
    <>
      <Hero />
      <UploadPhoto photo={photo} setPhoto={setPhoto} />
      {questions.map((item) => {
        return (
          <Question
            key={item.key}
            question={item.question}
            text={answers[item.key]}
            setText={(text) => {
              setAnswers((prev) => {
                const values = { ...prev };
                values[item.key] = text;
                return values;
              });
            }}
          />
        );
      })}
      <RenderBio answers={answers} photo={photo} />
    </>
  );
}

export default App;
