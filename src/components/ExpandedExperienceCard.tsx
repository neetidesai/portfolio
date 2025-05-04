import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

interface ExpandedExperienceCardProps {
  title: string;
  logo: string;
  description: string;
  dates: string;
}
export function ExpandedExperienceCard({
  title,
  logo,
  description,
  dates,
}: ExpandedExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const styles = {
    container: `flex flex-row ${isExpanded ? "items-start" : "items-center"} justify-start border border-black rounded-lg p-4 m-2 bg-white shadow-md w-3/4 relative`,
    image: "h-20 w-20 md:w-28 md:h-28 object-contain flex-shrink-0 mr-4",
    contentContainer: "flex flex-col flex-1",
    headerRow: "flex flex-row items-center justify-between w-full gap-2 pr-4",
    title:
      "text-smallBody md:text-smallSubheader text-fontColor-secondary font-header md:break-words md:flex-1",
    date: "text-smallButton md:text-[1.25rem] text-fontColor-secondary font-header md:whitespace-nowrap md:flex-shrink-0 ml-4",
    description:
      "text-smallButton md:text-smallBody text-left text-fontColor-secondary mt-2",
    bullet: "list-disc list-outside pl-5",
    arrow: "cursor-pointer text-fontColor-secondary absolute top-2 right-2",
    headerAndArrow: "flex flex-row w-full justify-between",
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

  const formatDescription = (text: string) => {
    const lines = text.split("\n");
    return (
      <ul className={styles.bullet}>
        {lines.map((line, index) => {
          const isIndented = line.startsWith("\t");
          return (
            <li key={index} style={{ marginLeft: isIndented ? "1.5rem" : "0" }}>
              {isIndented ? line.trimStart() : line}
            </li>
          );
        })}
      </ul>
    );
  };
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const UpArrowIcon = TiArrowSortedDown as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;

  const DownArrowIcon = TiArrowSortedUp as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.image} alt={"company logo"} />
      <div className={styles.contentContainer}>
        <div className={styles.headerAndArrow}>
          <div className={styles.headerRow}>
            <h1 className={styles.title}>{wrapHyphenatedWords(title)}</h1>
            <h1 className={styles.date}>{dates}</h1>
          </div>
          {!isExpanded && (
            <div className={styles.arrow} onClick={toggleExpand}>
              {React.createElement(UpArrowIcon, {
                className: `md:w-6 md:h-6`,
              })}
            </div>
          )}
          {isExpanded && (
            <div className={styles.arrow} onClick={toggleExpand}>
              {React.createElement(DownArrowIcon, {
                className: `md:w-6 md:h-6`,
              })}
            </div>
          )}
        </div>
        {isExpanded && (
          <div className={styles.description}>
            {formatDescription(description)}
          </div>
        )}
      </div>
    </div>
  );
}
