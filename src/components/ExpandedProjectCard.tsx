import React from "react";
import { IoMdOpen } from "react-icons/io";
import { IconButton } from "./IconButton";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  onClick: () => void;
}
export function ProjectCard({
  title,
  description,
  tags,
  onClick,
}: ProjectCardProps) {
  const OpenIcon = IoMdOpen as unknown as React.FC;
  const styles = {
    container:
      "relative flex flex-row items-center justify-center border border-black rounded-lg p-4 m-2 w-[26rem] bg-white shadow-md",
    subContainer: "flex flex-col",
    title:
      "text-smallBody lg:text-smallSubheader text-fontColor-secondary mx-8 mb-2 font-header",
    description:
      "text-smallButton lg:text-smallBody text-fontColor-secondary font-body",
    tageContainer: "flex flex-wrap justify-center items-center gap-2 mt-6",
    tag: "text-smallButton lg:text-smallBody text-fontColor-darkAccent bg-components-secondary rounded-full px-2 py-1 font-body",
    openIcon: "absolute top-2 right-2",
  };
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.description}>{description}</p>

        <div className={styles.tageContainer}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.openIcon}>
          <IconButton icon={OpenIcon} onClick={onClick} color={"secondary"} />
        </div>
      </div>
    </div>
  );
}
