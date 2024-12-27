/* eslint-disable react/prop-types */
import styles from "./renderBio.module.css";

function RenderBio({
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
  photo,
}) {
  const photoUrl =
    photo && photo instanceof File ? URL.createObjectURL(photo) : null;

  return (
    <div className={styles.bioContainer}>
      <div className={styles.namePhoto}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.name}
        >
          <path
            id="curve"
            d="M 50 160 Q 300 -20 550 160"
            fill="transparent"
            stroke="none"
          />
          <text>
            <textPath
              href="#curve"
              startOffset="50%"
              textAnchor="middle"
              fill="black"
            >
              {text0}
            </textPath>
          </text>
        </svg>
        <div className={styles.photo}>
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={photo ? photo.name : "No photo"}
              onError={(e) => {
                console.error("Image failed to load", e);
                e.target.style.display = "none";
              }}
            />
          ) : null}
        </div>
      </div>

      <div className={styles.quote}>{text1}</div>
      <div className={styles.text}>{text2}</div>
      <div className={styles.text}>{text3}</div>
      <div className={styles.text}>{text4}</div>
      <div className={styles.text}>{text5}</div>
      <div className={styles.text}>{text6}</div>
      <div className={styles.text}>{text7}</div>
      <div className={styles.text}>{text8}</div>
      <div className={styles.text}>{text9}</div>
      <div className={styles.text}>{text10}</div>
      <div className={styles.text}>{text11}</div>
      <div className={styles.text}>{text12}</div>
      <div className={styles.text}>{text13}</div>
      <div className={styles.text}>{text14}</div>
      <div className={styles.text}>{text15}</div>
      <div className={styles.text}>{text16}</div>
      <div className={styles.text}>{text17}</div>
      <div className={styles.text}>{text18}</div>
      <div className={styles.text}>{text19}</div>
      <div className={styles.text}>{text20}</div>
      <div className={styles.text}>{text21}</div>
      <div className={styles.text}>{text22}</div>
      <div className={styles.text}>{text23}</div>
      <div className={styles.text}>{text24}</div>
      <div className={styles.text}>{text25}</div>
    </div>
  );
}

export default RenderBio;
