/* eslint-disable react/prop-types */
import styles from "./question.module.css";
import { TextInput } from "@mantine/core";

function Question({ question, text, setText }) {
  return (
    <div className={styles.textQuestion}>
      <TextInput
        classNames={{ input: styles.input, label: styles.label }}
        variant="filled"
        size="lg"
        radius="lg"
        label={question}
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
    </div>
  );
}

export default Question;
