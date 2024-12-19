/* eslint-disable react/prop-types */
import styles from "./renderBio.module.css";

function RenderBio({ text0, text1, text2, text3, text4, text5, photo }) {
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
              fill="white"
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

      <div>{text1}</div>

      <div>{text2}</div>
      <div>{text3}</div>
      <div>{text4}</div>
      <div>{text5}</div>
    </div>
  );
}

export default RenderBio;
