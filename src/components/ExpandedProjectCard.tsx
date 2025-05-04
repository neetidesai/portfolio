import React from "react";

interface ExpandedProjectCardProps {
  title: string;
  description: string;
  github_link: string;
  tags: string[];
  alignment: "left" | "right";
  imageSrc: string[];
}

export function ExpandedProjectCard({
  title,
  description,
  github_link,
  tags,
  alignment,
  imageSrc,
}: ExpandedProjectCardProps) {
  const isLeftAligned = alignment === "left";

  const styles = {
    container: `relative flex flex-col ${
      isLeftAligned ? "lg:flex-row" : "lg:flex-row-reverse"
    } items-center border border-black rounded-lg p-4 m-2 gap-3 w-full bg-white shadow-md`,
    image:
      "w-full sm:w-auto md:max-w-xl max-h-80 object-contain rounded-lg mb-4 sm:mb-0 sm:mx-4",
    subContainer: "flex flex-col text-center sm:text-left",
    title:
      "text-smallBody lg:text-smallSubheader text-fontColor-secondary mb-2 font-header",
    description:
      "text-smallButton lg:text-smallBody text-fontColor-secondary font-body",
    tagContainer:
      "flex flex-wrap justify-center sm:justify-start items-center gap-2 mt-6 mb-4",
    tag: "text-smallButton lg:text-smallBody text-fontColor-darkAccent bg-components-secondary rounded-full px-2 py-1 font-body",
    button:
      "text-smallButton lg:text-smallBody text-fontColor-primary bg-components-background hover:bg-components-primary px-2 py-1 rounded font-body max-w-32 mx-auto sm:mx-0",
  };

  return (
    <div className={styles.container}>
      {imageSrc.map((src, index) => (
        <img
          key={index}
          src={src}
          className={styles.image}
          alt={"project image"}
        />
      ))}
      <div className={styles.subContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.tagContainer}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => window.open(github_link, "_blank")}
          className={styles.button}
        >
          view on github
        </button>
      </div>
    </div>
  );
}
