import { FileInput } from "@mantine/core";
import styles from "./uploadPhoto.module.css";

// eslint-disable-next-line react/prop-types
function UploadPhoto({ photo, setPhoto }) {
  return (
    <div>
      <FileInput
        accept="image/png,image/jpeg"
        label="Upload your photo"
        placeholder="Click here to upload photo"
        description="Upload your display photo"
        value={photo}
        onChange={setPhoto}
        size="lg"
        radius="lg"
        classNames={{ input: styles.input, label: styles.label }}
      />
    </div>
  );
}

export default UploadPhoto;
