/* eslint-disable react/prop-types */
import styles from "./renderBio.module.css";

function RenderBio({ text0, text1, text2, text3, text4 }) {
  return (
    <div className={styles.bioContainer}>
      <div>{text0}</div>
      <div>{text1}</div>
      <div>{text2}</div>
      <div>{text3}</div>
      <div>{text4}</div>
    </div>
  );
}

export default RenderBio;
