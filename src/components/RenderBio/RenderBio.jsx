/* eslint-disable react/prop-types */
import styles from "./renderBio.module.css";

function RenderBio({ answers, photo }) {
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
              {answers.name}
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

      <div className={styles.quote}>{answers.motto}</div>
      <div className={styles.textContainer}>
        <div className={styles.text}>{answers.leap}</div>
        <div className={styles.text}>{answers.unexpected}</div>
        <div className={styles.text}>{answers.achievement}</div>
        <div className={styles.text}>{answers.supporter}</div>
        <div className={styles.text}>{answers.collaborations}</div>
        <div className={styles.text}>{answers.distruption}</div>
        <div className={styles.text}>{answers.goals}</div>
        <div className={styles.text}>{answers.contribution}</div>
        <div className={styles.text}>{answers.complex}</div>
        <div className={styles.text}>{answers.beverage}</div>
        <div className={styles.text}>{answers.food}</div>
        <div className={styles.text}>{answers.furry}</div>
        <div className={styles.text}>{answers.word}</div>
        <div className={styles.text}>{answers.book}</div>
        <div className={styles.text}>{answers.color}</div>
        <div className={styles.text}>{answers.beach}</div>
        <div className={styles.text}>{answers.perspective}</div>
        <div className={styles.text}>{answers.change}</div>
        <div className={styles.text}>{answers.secret}</div>
        <div className={styles.text}>{answers.success}</div>
        <div className={styles.text}>{answers.spark}</div>
        <div className={styles.text}>{answers.inclusive}</div>
        <div className={styles.text}>{answers.community}</div>
      </div>
    </div>
  );
}

export default RenderBio;
