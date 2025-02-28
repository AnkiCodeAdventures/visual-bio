/* eslint-disable react/prop-types */
import { Button } from "@mantine/core";
import styles from "./renderBio.module.css";
import html2canvas from "html2canvas";

function RenderBio({ answers, photo }) {
  const photoUrl =
    photo && photo instanceof File ? URL.createObjectURL(photo) : null;

  const handleDownloadImage = () => {
    const div = document.getElementById("capture-div");
    if (div) {
      document.fonts.ready.then(() => {
        html2canvas(div, {
          scale: Math.min(2, window.devicePixelRatio), // Keeps quality high but prevents extreme scaling
          useCORS: true, // Ensures images load correctly
          allowTaint: true,
        }).then((canvas) => {
          const link = document.createElement("a");
          link.href = canvas.toDataURL("image/png", 1.0); // Maximum quality
          link.download = "div-image.png";
          link.click();
        });
      });
    }
  };

  return (
    <>
      <div className={styles.bioContainer} id="capture-div">
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
        </div>

        <div className={styles.quote}>
          {/* {answers.motto} */}
          &lsquo;This above all: to thine own self be true, And it must follow,
          as the night the day, Thou canst not then be false to any man. &lsquo;
        </div>

        <div className={styles.secondRow}>
          {/* professional */}
          <div className={styles.professional}>
            <div>
              women as tech leaders
              {/* {answers.distruption} */}
            </div>
            <div>
              frontend development
              {/* {answers.goals} */}
            </div>
            <div>
              {/* {answers.contribution} */}
              deep work practice
            </div>
          </div>

          {/* complex task */}
          <div className={styles.complexTask}>
            <div>
              {/* {answers.complex} */}
              breaking it into smaller tasks, focusing on one thing
            </div>
          </div>

          {/* personal facts */}
          <div className={styles.personalFacts}>
            <div>
              {answers.furry}
              my pug Titu
            </div>
            <div>
              {/* {answers.beverage} */}
              coffee
            </div>
            <div>
              {/* {answers.book} */}
              Wonder by R J Palacio
            </div>
          </div>
        </div>

        <div className={styles.thirdRow}>
          {/* wisdom */}
          <div className={styles.wisdom}>
            <div>
              {/* {answers.perspective} */}
              growth mindset
            </div>
            <div>
              {/* {answers.change} */}
              more kindness towards each other
            </div>
            <div>
              {/* {answers.secret} */}
              Life&apos;s a journey
            </div>

            <div>
              {answers.success}
              fulfilling, enriching, meaningful
            </div>
          </div>

          {/* community */}
          <div className={styles.community}>
            <div className={styles.communityText1}>
              {/* {answers.inclusive} */}
              Being kind to one another
            </div>
            <div>
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
          className={styles.image12}
          src="/src/assets/1flowers_color.png"
          alt=""
        />
        <img className={styles.image13} src="/src/assets/atom.png.png" alt="" />

        <img className={styles.image15} src="/src/assets/book.png" alt="" />
        <img className={styles.image18} src="/src/assets/flowers.png" alt="" />

        <img
          className={styles.image21}
          src="/src/assets/hand_stars.png"
          alt=""
        />

        <img
          className={styles.image23}
          src="/src/assets/heart_leaves.png"
          alt=""
        />

        <img className={styles.image25} src="/src/assets/leaflet.png" alt="" />

        <img
          className={styles.image27}
          src="/src/assets/lotus hand.png"
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
      <Button size="lg" className={styles.button} onClick={handleDownloadImage}>
        Download as Image
      </Button>
    </>
  );
}

export default RenderBio;
