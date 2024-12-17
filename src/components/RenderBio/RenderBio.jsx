/* eslint-disable react/prop-types */
import styles from "./renderBio.module.css";

function RenderBio({ text0, text1, text2, text3, text4, photo }) {
  const photoUrl =
    photo && photo instanceof File ? URL.createObjectURL(photo) : null;

  return (
    <div className={styles.bioContainer}>
      <div>{text0}</div>
      <div>{text1}</div>
      <div>{text2}</div>
      <div>{text3}</div>
      <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
        <path id="u-shape" d="M 50 200 Q 250 50 450 200" fill="transparent" />
        <text fill="white">
          <textPath href="#u-shape" startOffset="50%">
            {text4}
            {/* Inverted U Shape Text */}
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
  );
}

export default RenderBio;
