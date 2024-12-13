/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./question.module.css";
import { TextInput } from "@mantine/core";

function TextQuestion({ question }) {
  const [text, setText] = useState("");
  return (
    <div className={styles.textQuestion}>
      <TextInput
        variant="filled"
        size="lg"
        radius="xl"
        label={question}
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
    </div>
  );
}

export default TextQuestion;
