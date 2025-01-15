/* eslint-disable react/prop-types */
import styles from "./renderBio.module.css";

function RenderBio({ answers, photo }) {
  const photoUrl =
    photo && photo instanceof File ? URL.createObjectURL(photo) : null;

  return (
    <div className={styles.bioContainer}>
      {/* row1 */}
      <div className={styles.firstRow}>
        {/* column1 */}
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

        {/* column2 */}
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

        {/* column3 */}
        <div className={styles.support}>
          <div className={styles.supportText1}>
            {/* {`${answers.supporter}, my biggest cheerleader`} */}
            my brother, my biggest cheerleader
          </div>

          <div className={styles.supportText2}>
            {/* {`${answers.collaborations}, turning ideas into reality`} */}
            collaborations with friends, turning ideas into reality
          </div>
        </div>
        <img
          className={styles.supportImage1}
          src="/src/assets/color_hands.png"
          alt=""
        />
        <img
          className={styles.supportImage2}
          src="/src/assets/friends background.png"
          alt=""
        />
      </div>

      <div className={styles.quote}>
        {/* {answers.motto} */}
        &lsquo;This above all: to thine own self be true, And it must follow, as
        the night the day, Thou canst not then be false to any man. &lsquo;
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

      {/* images extra */}
      <img
        className={styles.image5}
        src="/src/assets/2hands_heart.png"
        alt=""
      />
      <img className={styles.image6} src="/src/assets/4 friends.png" alt="" />
      <img
        className={styles.image3}
        src="/src/assets/4friends_sitting.png"
        alt=""
      />

      <img
        className={styles.image7}
        src="/src/assets/friends dancing.png"
        alt=""
      />
      <img className={styles.image8} src="/src/assets/friends.png" alt="" />
      <img
        className={styles.image9}
        src="/src/assets/friends_heads.png"
        alt=""
      />
      <img
        className={styles.image10}
        src="/src/assets/friends_line_color.png"
        alt=""
      />
      <img
        className={styles.image11}
        src="/src/assets/friends_professional.png"
        alt=""
      />
      <img
        className={styles.image12}
        src="/src/assets/1flowers_color.png"
        alt=""
      />
      <img className={styles.image13} src="/src/assets/atom.png.png" alt="" />
      <img
        className={styles.image14}
        src="/src/assets/bags_book_coming_out.png"
        alt=""
      />
      <img className={styles.image15} src="/src/assets/book.png" alt="" />
      <img className={styles.image16} src="/src/assets/cup.jpg" alt="" />
      <img className={styles.image17} src="/src/assets/earth tree.png" alt="" />
      <img className={styles.image18} src="/src/assets/flowers.png" alt="" />
      <img className={styles.image19} src="/src/assets/hand_earth.png" alt="" />
      <img
        className={styles.image20}
        src="/src/assets/hand_laptop.png"
        alt=""
      />
      <img className={styles.image21} src="/src/assets/hand_stars.png" alt="" />
      <img
        className={styles.image22}
        src="/src/assets/hand_writing_journal.png"
        alt=""
      />
      <img
        className={styles.image23}
        src="/src/assets/heart_leaves.png"
        alt=""
      />
      <img
        className={styles.image24}
        src="/src/assets/heart_world.png"
        alt=""
      />
      <img className={styles.image25} src="/src/assets/leaflet.png" alt="" />

      <img className={styles.image27} src="/src/assets/lotus hand.png" alt="" />
      <img className={styles.image28} src="/src/assets/man_arrow.png" alt="" />
      <img className={styles.image29} src="/src/assets/man_bulb.png" alt="" />
      <img
        className={styles.image30}
        src="/src/assets/multiple_cats.png"
        alt=""
      />
      <img
        className={styles.image31}
        src="/src/assets/potted plant.png"
        alt=""
      />
      <img className={styles.image32} src="/src/assets/puzzle.png" alt="" />
      <img className={styles.image33} src="/src/assets/raccoon.png" alt="" />
      <img
        className={styles.image34}
        src="/src/assets/stars_christmas_decoration.png"
        alt=""
      />
      <img
        className={styles.image35}
        src="/src/assets/steps happily climbing.png"
        alt=""
      />

      <img
        className={styles.image38}
        src="/src/assets/wine_spices.png"
        alt=""
      />
      <img
        className={styles.image39}
        src="/src/assets/yellow_bulb.png"
        alt=""
      />
    </div>
  );
}

export default RenderBio;
