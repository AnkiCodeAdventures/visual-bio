/* eslint-disable react/prop-types */
import styles from "./renderBio.module.css";

function RenderBio({ answers, photo }) {
  const photoUrl =
    photo && photo instanceof File ? URL.createObjectURL(photo) : null;

  return (
    <div className={styles.bioContainer}>
      <div className={styles.firstRow}>
        <div className={styles.achievements}>
          <div className={styles.achievementsText1}>
            {/* {answers.leap} */}
            Changing careers from chemistry to coding
          </div>
          <img
            className={styles.achievementsImage1}
            src="/src/assets/vecteezy_a-trendy-design-icon-of-paper-plane_51059692-Photoroom.png"
            alt="airplane"
          />
          <div className={styles.achievementsText2}>
            {answers.achievement}
            Getting selected in BARC
          </div>
          <img
            className={styles.achievementsImage2}
            src="/src/assets/achievement.png"
            alt="atom"
          />
        </div>

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
                {/* {answers.name} */}
                Ankita Agarwal
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

        <div className={styles.support}>
          <div className={styles.text}>
            {/* {`${answers.supporter}, my biggest cheerleader`} */}
            my brother, my biggest cheerleader
          </div>
          <img
            className={styles.supportImage}
            src="/src/assets/vecteezy_single-continuous-line-drawing-eight-hands-with-their_53012903-Photoroom.png"
            alt="airplane"
          />
          <div className={styles.text}>
            {/* {`${answers.collaborations}, turning ideas into reality`} */}
            collaborations with friends, turning ideas into reality
          </div>
        </div>
      </div>

      <div className={styles.quote}>
        {/* {answers.motto} */}
        be true to yourself
      </div>

      <div className={styles.secondRow}>
        {/* professional */}
        <div className={styles.professional}>
          <div className={styles.text}>
            women as tech leaders
            {/* {answers.distruption} */}
          </div>
          <div className={styles.text}>
            frontend development
            {/* {answers.goals} */}
          </div>
          <div className={styles.text}>
            {/* {answers.contribution} */}
            deep work practice
          </div>
        </div>

        {/* complex task */}
        <div className={styles.complexTask}>
          <div className={styles.text}>
            {/* {answers.complex} */}
            breaking it into smaller tasks, focusing on one thing
          </div>
        </div>

        {/* personal facts */}
        <div className={styles.personalFacts}>
          <div className={styles.text}>
            {answers.furry}
            my pug Titu
          </div>
          <div className={styles.text}>
            {/* {answers.beverage} */}
            coffee
          </div>
          <div className={styles.text}>
            {/* {answers.book} */}
            Wonder by R J Palacio
          </div>

          <div className={styles.text}>
            {answers.beach}
            mountain person
          </div>
        </div>
      </div>

      <div className={styles.thirdRow}>
        {/* wisdom */}
        <div className={styles.wisdom}>
          <div className={styles.text}>
            {/* {answers.perspective} */}
            growth mindset
          </div>
          <div className={styles.text}>
            {/* {answers.change} */}
            more kindness towards each other
          </div>
          <div className={styles.text}>
            {/* {answers.secret} */}
            Life&apos;s a journey
          </div>
          <img
            className={styles.plant}
            src="/src/assets/vecteezy_hand-holding-lotus-water-lily-in-continuous-line-drawing_22274413-Photoroom.png"
            alt="flower"
          />
          <div className={styles.text}>
            {answers.success}
            fulfilling, enriching, meaningful
          </div>
        </div>

        {/* community */}
        <div className={styles.community}>
          <div className={styles.text}>
            {/* {answers.inclusive} */}
            Being kind to one another
          </div>
          <div className={styles.text}>
            {answers.community}
            sharing of knowledge and resources
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderBio;
