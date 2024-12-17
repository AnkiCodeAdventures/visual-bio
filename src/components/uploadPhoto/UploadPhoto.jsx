import { FileInput } from "@mantine/core";
import styles from "./uploadPhoto.module.css";

// eslint-disable-next-line react/prop-types
function UploadPhoto({ photo, setPhoto }) {
  return (
    <div>
      <FileInput
        accept="image/png,image/jpeg"
        label="Upload files"
        placeholder="Upload files"
        description="Input description"
        value={photo}
        onChange={setPhoto}
      />
    </div>
  );
}

export default UploadPhoto;
