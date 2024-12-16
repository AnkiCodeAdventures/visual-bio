import { Select } from "@mantine/core";
import styles from "./question.module.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function MultipleChoiceQuestion({ options }) {
  const [selectOption, setSelectOption] = useState("");

  return (
    <div className={styles.multipleChoiceQuestion}>
      <Select
        classNames={{ input: styles.input, label: styles.label }}
        variant="filled"
        size="lg"
        radius="lg"
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
