import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ExpandedProjectCard } from "../components/ExpandedProjectCard";

const Projects = () => {
  const styles = {
    container:
      "flex flex-col w-full items-center justify-center bg-components-background min-h-screen overflow-y-auto pt-20 pb-10 px-10",
    headers:
      "text-fontColor-primary text-smallSubheader md:text-largeSubheader text-left w-3/4 mb-1 font-header",
    subContainer: "flex flex-col w-full items-center justify-center pb-10",
    linkContainer: "flex flex-col w-full items-center justify-center ",
    title: "text-fontColor-primary text-xl font-bold mb-2",
    description: "text-fontColor-secondary text-base mb-4",
    link: "text-fontColor-link underline hover:text-fontColor-hover",
  };

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const headerOffset = 40;

        window.scrollTo({
          top: (element as HTMLElement).offsetTop - headerOffset,
          behavior: "smooth",
        });
      }
    }
  }, [hash]);

  return (
    <div className={styles.container}>
      <div id="stack-overgram">
        <ExpandedProjectCard
          title="Stack Overgram"
          description="I co-developed StackOvergram, a play on StackOverflow and Instagram that 
        allows users to ask and answer questions, as well as customize their unique profile and 
        follow other users, with user activity consolidated in a feed. This project leveraged 
        MongoDB, Typescript, and Express to build a RESTful API and React.js and Typescript for 
        frontend development. Some features I was responsible for were handling user creation and authentication
        using Google Firebase, utilizing websockets for real-time notification updates, and implementing
        both the frontend and backend logic for a customizable profile page."
          github_link="https://github.com/neu-cs4530/fall24-team-project-group-112"
          tags={[
            "React",
            "Typescript",
            "Google Firebase",
            "Express.js",
            "MongoDB",
          ]}
          alignment="left"
          imageSrc={["/stack-overgram1.png"]}
        />
      </div>

      <div id="shelterlink">
        <ExpandedProjectCard
          title="Shelterlink"
          description="Shelterlink is a project developed by Northeastern's Code4Community, a student 
        organization dedicated to building software solutions for nonprofits in the Boston area. 
        Shelterlink is an iOS app built using React native, Typescript, and DynamoDB that connects 
        unhoused youth to shelters and other resources in and around Boston. I was the technical lead on 
        this team, planning sprints and writing tickets for four developers, and running weekly developer
        meetings to discuss the direction of the project and troubleshoot bugs and other blockers.
        I also interfaced with the design team and product manager to ensure the app met the client's specfications. Additionally, I 
        completed development work on this project, notably handing user authentication using AWS 
        Cognito, as well as designing all backend specifications and some frontend screens, including 
        the detailed shelter screen shown in the two rightmost images."
          tags={[
            "React",
            "JavaScript",
            "DynamoDB",
            "AWS Cognito",
            "AWS Amplify",
          ]}
          github_link="https://github.com/Code-4-Community/shelter-link"
          alignment="right"
          imageSrc={[
            "/shelterlink1.PNG",
            "/shelterlink2.PNG",
            "/shelterlink3.jpeg",
          ]}
        />
      </div>

      <div id="gi-boston">
        <ExpandedProjectCard
          title="Green Infrastructure Boston"
          description="Green Infrastructure Boston is a project developed by Northeastern's Code4Community, a student 
        organization dedicated to building software solutions for nonprofits in the Boston area. 
        This project is a webapp that allows users to find where green infrastructure is located in Boston, including 
        trees, shrubs, and other greenery, through an interactive map. Users can apply to adopt infrastructure 
        and log their caretaking activities in the app."
          github_link="https://github.com/Code-4-Community/green-infrastructure"
          tags={["React", "Typescript", "DynamoDB", "AWS Lambda", "AWS SES"]}
          alignment="left"
          imageSrc={["/giboston.png"]}
        />
      </div>
      <div>
        <ExpandedProjectCard
          title="Taylor Swiftalyzer"
          description="The Taylor Swiftalyzer was a project completed for my Natural Language 
        Processing class. It explored various NLP and ML techniques using Swift's discography.
        Specifically, we used linear and logistic regression to predict the popularity of Swift's songs.
        In addition, we used the NLTK sentiment analysis library to analyze the sentiment of her songs, 
        classifying them as positive or negative. We also used topic modeling to identify major themes
        across her work."
          github_link="https://github.com/neetidesai/taylorswiftalyzer"
          tags={["Python"]}
          alignment="right"
          imageSrc={["/taylorswiftalyzer.png"]}
        />
      </div>
      <div>
        <ExpandedProjectCard
          title="Image Processor"
          description="An image editing application with the ability to load, filter, edit, and 
        save an image, as well as visualize the color distributions of the image. Utilizes several 
        OOD design principles including Model, View, Controller, 
        and the command design pattern."
          github_link="https://github.com/neetidesai/Image-Processor"
          tags={["Java"]}
          alignment="left"
          imageSrc={["/imageprocessor.png"]}
        />
      </div>
    </div>
  );
};

export default Projects;
