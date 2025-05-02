import React from "react";
import { KnowledgeCard } from "../components/KnowledgeCard";
import { TechnicalKnowledgeTabs } from "../components/TechnicalKnowledgeTabs";
import { Link } from "react-router-dom";

const About = () => {
  const styles = {
    container:
      "flex flex-col w-full items-start justify-left bg-components-background min-h-screen overflow-y-auto pt-28 pb-20 px-10",
    row: "flex flex-col lg:flex-row gap-5",
    col: "flex flex-col items-center justify-center",
    technicalKnowledge: "flex flex-col w-full items-center",
    categoryAndCardContainer: "flex flex-col sm:w-2/3",
    title:
      "text-smallSubheader font-header text-center text-fontColor-primary py-3",
    description: "text-body text-fontSize-largeBody text-fontColor-primary",
    link: "mt-6 text-fontColor-lightAccent hover:underline",
    bookContainer: "flex flex-col w-1/2 items-center pt-10",
    foodContainer: "flex flex-row gap-3 items-center justify-center mt-8 mx-5",
    travelContainer: "flex flex-col items-center justify-center pt-12",
    photo: "w-60 h-60 md:w-96 md:h-96 object-contain p-3",
    caption: "text-body text-[1.25rem] text-fontColor-primary text-center",
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.description}>
            Currently, I work as a full-stack software engineer at Morse Corp.
            To read more about my current and previous work, check out my{" "}
            <Link to="/experience" className={styles.link}>
              experience page
            </Link>
            . To find out more about my personal projects, head to my{" "}
            <Link to="/projects" className={styles.link}>
              projects page
            </Link>
            . I am always looking for new opportunities to learn and grow as an
            engineer, so feel free to reach out if you have any questions or
            would like to connect!
            <br />
            <br />
            Beyond my work, I'm also an avid reader, gym-goer, and food
            enthusiast (I love rating restaurants on Beli and was the editorial
            director of my college food magazine!). I enjoy baking, and this
            year I'm trying to become a better cook. I also love to travel and
            pursue creative hobbies - I'm an amateur photographer and also
            design and sew my own clothes!
          </p>
        </div>
        <div className={styles.col}>
          <h1 className={styles.title}>Technical Knowledge</h1>
          <div className={styles.technicalKnowledge}>
            <TechnicalKnowledgeTabs />
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.bookContainer}>
            <img src="/current-book.jpeg" className={"pb-3"} />
            <h1 className={styles.caption}>Currently Reading</h1>
          </div>

          <div className={styles.col}>
            <div className={styles.foodContainer}>
              <img src="/food1.jpeg" className={styles.photo} />
              <img src="/food2.jpeg" className={styles.photo} />
            </div>
            <h1 className={`${styles.caption} text-center`}>
              Some recent food favorites
            </h1>
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.travelContainer}>
            <div className={styles.col}>
              <div className={styles.row}>
                <img src="/travel1.jpeg" className={styles.photo} />
                <img src="/travel2.jpeg" className={styles.photo} />
              </div>
              <img src="/travel3.jpeg" className={styles.photo} />
            </div>
            <h1 className={styles.caption}>Photos from my trip to Hawaii!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
