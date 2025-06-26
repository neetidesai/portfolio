import React from "react";
import { ExperienceCard } from "../components/ExperienceCard";
import { IconButton } from "../components/IconButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TextButton } from "../components/TextButton";
import { ProjectCard } from "../components/ProjectCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const styles = {
    container:
      "flex flex-col items-center justify-center bg-components-background w-full min-h-screen overflow-y-auto pt-20",
    headshotAboutContainer:
      "flex w-full flex-row items-center bg-components-background md:gap-10 lg:gap-20 px-5 md:px-10 mb-20",
    quickInfoContainer: "justify-center items-center w-full p-5 md:p-10",
    title:
      "p-5 text-smallHeader md:text-largeHeader text-components-secondary font-header",
    headshot:
      "w-full h-auto max-w-full object-contain object-left rounded-full",
    imageContainer: "w-1/2 md items-left justify-left pl-5 lg:pl-10",
    summaryText:
      "text-fontColor-primary text-smallBody md:text-largeBody font-body",
    cardContainer:
      "items-left justify-left w-full flex flex-col mb-10 pl-1 pr-5",
    headers:
      "text-fontColor-primary text-smallSubheader md:text-largeSubheader text-left mb-1 font-header",
    subHeader: "flex flex-row justify-between px-3 md:px-24",
    experienceCardContainer:
      "sm:px-20 justify-between w-full flex flex-col lg:flex-row gap-3",
    iconContainer: "flex flex-row sm:gap-2 justify-center items-center mt-5",
  };
  const GithubIcon = FaGithub as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  const LinkedInIcon = FaLinkedin as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  const EmailIcon = MdEmail as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.headshotAboutContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.headshot}
            src="/headshot.jpeg"
            alt="Neeti Desai's headshot"
          />
        </div>
        <div className={styles.quickInfoContainer}>
          <h1 className={styles.title}>Hi, I'm Neeti</h1>
          <p className={styles.summaryText}>
            I recently graduated from Northeastern University's honors program
            with a bachelor's degree in computer science and behavioral
            neuroscience. Currently, I am a full-stack software engineer at
            Morse Corp. in Cambridge, MA. I also have experience in machine
            learning and data science, and am excited to grow and develop my
            skills as an engineer! I would love to connect - my github,
            linkedin, and email are linked below.
          </p>

          <div className={styles.iconContainer}>
            <TextButton
              text="View Resume"
              onClick={() => {
                window.open("/resume.pdf");
              }}
              background
            />
          </div>

          <div className={styles.iconContainer}>
            <IconButton
              icon={GithubIcon}
              onClick={() => {
                window.open("https://github.com/neetidesai");
              }}
            />

            <IconButton
              icon={LinkedInIcon}
              onClick={() => {
                window.open("https://www.linkedin.com/in/neeti-desai");
              }}
            />

            <IconButton
              icon={EmailIcon}
              onClick={() => {
                window.open("mailto:desaineeti4@gmail.com");
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.subHeader}>
          <h1 className={styles.headers}>Experience</h1>
          <TextButton
            text="See all experience"
            onClick={() => navigate("/experience")}
          />
        </div>
        <div className={styles.experienceCardContainer}>
          <ExperienceCard
            title="Software Engineer"
            company="Morse Corp."
            logo="/morse.jpeg"
            onClick={() => window.open("/experience#morse_fulltime", "_blank")}
          />
          <ExperienceCard
            title="Python Software Engineer Co-op"
            company="Morse Corp."
            logo="/morse.jpeg"
            onClick={() => window.open("/experience#morse", "_blank")}
          />
          <ExperienceCard
            title="Software Engineer Co-op"
            company="E Ink"
            logo="/e-ink.png"
            onClick={() => window.open("/experience#e-ink", "_blank")}
          />
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.subHeader}>
          <h1 className={styles.headers}>Projects</h1>
          <TextButton
            text="See all projects"
            onClick={() => navigate("/projects")}
          />
        </div>
        <div className={styles.experienceCardContainer}>
          <ProjectCard
            title="Stack Overgram"
            description="A play on StackOverflow and Instagram that allows users to ask and answer questions, 
            as well as customize their unique profile and follow other users, with user activity consolidated 
            in a chronological feed."
            tags={["React.js", "Typescript", "MongoDB", "Firebase"]}
            onClick={() => window.open("/projects#stack-overgram", "_blank")}
          />
          <ProjectCard
            title="Shelterlink"
            description="An iOS app that connects unhoused youth in the Boston area to shelters and other resources near them."
            tags={["React Native", "Typescript", "DynamoDB", "AWS Amplify"]}
            onClick={() => window.open("/projects#shelterlink", "_blank")}
          />
          <ProjectCard
            title="Green Infrastructure Boston"
            description="Promotes collective ownership of Boston's green infrastructure by allowing users to adopt greenery in the city (trees, shrubs, and more), and log their caretaking activities."
            tags={["React.js", "Typescript", "DynamoDB"]}
            onClick={() => window.open("/projects#gi-boston", "_blank")}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
