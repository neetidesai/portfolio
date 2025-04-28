import React from "react";
import { IoMdOpen } from "react-icons/io";
import { IconButton } from "./IconButton";
import { text } from "stream/consumers";

interface ExperienceCardProps {
  title: string;
  company: string;
  logo: string;
  onClick: () => void;
}
export function ExperienceCard({
  title,
  company,
  logo,
  onClick,
}: ExperienceCardProps) {
  const OpenIcon = IoMdOpen as unknown as React.FC;
  const styles = {
    container:
      "relative flex flex-row items-center justify-center border border-black rounded-lg p-4 m-2 w-96 bg-white shadow-md",
    image: "w-20 h-20 object-contain flex-shrink-0 mx-4",
    textContainer: "flex flex-col pr-10",
    textOne:
      "text-smallBody lg:text-smallSubheader text-fontColor-secondary p-0 font-header",
    textTwo:
      "text-smallBody lg:text-smallSubheader text-bold text-fontColor-darkAccent p-0 font-header bg-components-secondary",
    openIcon: "absolute top-2 right-2",
  };

  const wrapHyphenatedWords = (text: string) =>
    text.split(" ").map((word, i) =>
      word.includes("-") ? (
        <span key={i} className="whitespace-nowrap">
          {`${word} `}
        </span>
      ) : (
        <React.Fragment key={i}>{word} </React.Fragment>
      )
    );

  return (
    <div className={styles.container}>
      {logo && <img src={logo} className={styles.image} />}
      <div className={styles.textContainer}>
        <h1 className={styles.textOne}>
          {wrapHyphenatedWords(`${title} at `)}
        </h1>

        <h1 className={styles.textTwo}>{wrapHyphenatedWords(company)}</h1>
      </div>

      <div className={styles.openIcon}>
        <IconButton icon={OpenIcon} onClick={onClick} color={"secondary"} />
      </div>
    </div>
  );
}
