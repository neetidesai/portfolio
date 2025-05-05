import React, { useEffect } from "react";
import { ExpandedExperienceCard } from "../components/ExpandedExperienceCard";
import { useLocation } from "react-router-dom";

const Experience = () => {
  const styles = {
    container:
      "flex flex-col w-full items-center justify-center bg-components-background min-h-screen overflow-y-auto pt-20 pb-10 px-2",
    headers:
      "text-fontColor-primary text-smallSubheader md:text-largeSubheader text-center sm:text-left w-full md:w-3/4 mb-1 font-header",
    subContainer: "flex flex-col w-full items-center justify-center pb-10",
    linkContainer: "flex flex-col w-full items-center justify-center ",
  };

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const headerOffset = 60;

        window.scrollTo({
          top: (element as HTMLElement).offsetTop - headerOffset,
          behavior: "smooth",
        });
      }
    }
  }, [hash]);

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.headers}>Education</h1>
        <ExpandedExperienceCard
          title={
            "Bachelor's of Science in Computer Science and Behavioral Neuroscience"
          }
          logo={"/northeastern.png"}
          description={
            "GPA: 3.99/4.0\nRecipient of Sears B. Condit Award in Spring 2024. The Condit award is given annually to one junior or senior from each of Northeastern’s undergraduate colleges based on outstanding academic achievement.\nRevelant Coursework:\n\tFundamentals of Computer Science I & II\n\tDiscrete Structures\n\tObject-Oriented Design\n\tAlgorithms and Data\n\tDatabase Design\n\tSoftware Engineering\n\tMachine Learning\n\tArtificial Intelligence\n\tNatural Language Processing\n\tOrganic Chemistry I & II\n\tNeuroanatomy\n\tNeurobiology\n\tNeural Systems"
          }
          dates={"Sep. 2021 - May 2025"}
        />
      </div>

      <div className={styles.subContainer}>
        <h1 className={styles.headers}>Work Experience</h1>
        <div id="morse" className={styles.linkContainer}>
          <ExpandedExperienceCard
            title={"Software Engineer Co-op at Morse Corp."}
            logo={"/morse.jpeg"}
            description={
              "Designed, developed, and deployed 15+ user-driven features for computer vision testing Python software packages in the JATIC project, contributing to three MVPs for the Chief Digital and AI Office.\nUtilized PySpark to optimize ETL pipelines and execute complex data transformations.\nIntegrated packages within existing machine learning pipelines.\nDeveloped features to optimize model performance by identifying mislabeled data and classifying data difficulty within training sets.\nActively contributed in Agile ceremonies, including daily stand-ups, sprint retrospectives, and feature demos.\nEffectively leveraged software development best practices, achieving 100% test coverage of software capabilities with unit and integration tests and writing robust end user documentation utilizing the Diataxis framework."
            }
            dates={"Jan. 2024 - Aug. 2024"}
          />
        </div>
        <div id="e-ink" className={styles.linkContainer}>
          <ExpandedExperienceCard
            title={"Software Engineer Co-op at E Ink"}
            logo={"/e-ink.png"}
            description={
              "Independently designed and developed software to view color intensity and transitions on early-stage electronic ink panel prototypes, using Python and OpenCV in a Linux environment. Integrated onto panel drivers and oversaw release.\nLed experimental effort to display videos on panels, writing Python scripts to experiment with transition times.\nWorked with a cross-functional team of 5 to develop software to demo prototype capabilities for customers, incorporating low-level Bash scripting for automation and system-level tasks.\nIdentified an opportunity and completed transition of filesystem based code versioning process to SVN."
            }
            dates={"Jan. 2023 - Jul. 2023"}
          />
        </div>
        <div id="northeastern" className={styles.linkContainer}>
          <ExpandedExperienceCard
            title={"Discrete Structures Teaching Assistant"}
            logo={"/northeastern.png"}
            description={
              "Hosted weekly office hours and helped an average of 15 students per session. Graded assignments and exams."
            }
            dates={"Sep. 2022 - Dec. 2022"}
          />
        </div>
      </div>

      <div className={styles.subContainer}>
        <h1 className={styles.headers}>Campus Experience</h1>
        <ExpandedExperienceCard
          title={"Technical Lead at Code4Community"}
          logo={"/c4c.jpeg"}
          description={
            "Led a team of 4 developers to create an iOS app to help unhoused youth in Boston find shelters and other resources.\nPlanned weekly sprints and wrote tickets.\nOrganized and led weekly developer meetings to discuss progress and blockers.\nInterfaced with product manager and design team to ensure app aligned with client's vision."
          }
          dates={"Dec. 2024 - May 2025"}
        />

        <ExpandedExperienceCard
          title={"Husky Ambassador"}
          logo={"/northeastern.png"}
          description={
            "Led informative and engaging tours for pospective students and their families.\nContinuously learned and memorized new information to ensure tours were accurate and up-to-date.\nHelped staf front desk, checking students in for tours and answering student questions abou the university."
          }
          dates={"Mar. 2023 - May 2025"}
        />

        <ExpandedExperienceCard
          title={"Editorial Director and President at Spoon Magazine"}
          logo={"/spoon.jpeg"}
          description={
            "Guided the literary direction of Northeastern's chapter of Spoon Magazine, an online food-based publication.\nProvided feedback on article pitches, edited articles, and met with writers to discuss pieces for the magazine.\n Planned club and school-wide events to promote the magazine and engage with the community.\nCollaborated with marketing manager and photo and video editor to maintain a strong social media presence and relationships with local Boston restaurants."
          }
          dates={"Sep. 2022 - May 2025"}
        />

        <ExpandedExperienceCard
          title={"Software Engineer at Code4Community"}
          logo={"/c4c.jpeg"}
          description={
            "Collaborated on multiple teams to develop software solutions for Boston-based nonprofits.\nCompleted tickets weekly and helped mentor youn ger developers and new team members."
          }
          dates={"Sep. 2022 - Nov. 2024"}
        />
      </div>
    </div>
  );
};

export default Experience;
