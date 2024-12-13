import { Select } from "@mantine/core";
import styles from "./question.module.css";
import { useState } from "react";

function MultipleChoiceQuestion({ options }) {
  const [selectOption, setSelectOption] = useState("");

  return (
    <div className={styles.multipleChoiceQuestion}>
      <Select
        variant="filled"
        size="lg"
        radius="xl"
        label="Your favorite library"
        placeholder="Pick value"
        data={options}
        value={selectOption}
        onChange={(value) => {
          setSelectOption(value);
        }}
      />
    </div>
  );
}

export default MultipleChoiceQuestion;
