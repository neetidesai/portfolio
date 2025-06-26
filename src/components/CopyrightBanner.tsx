import React from "react";
import { IconButton } from "../components/IconButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const styles = {
  container: "bg-components-primary bottom-0 w-full px-5",
  text: "text-fontColor-darkAccent text-smallBody font-body",
};

export default function CopyrightBanner() {
  const GithubIcon = FaGithub as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  const LinkedInIcon = FaLinkedin as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  const EmailIcon = MdEmail as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  return (
    <div className={styles.container}>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h1 className={styles.text}>
          © 2025 by Neeti Desai | Built by Neeti Desai
        </h1>
        <div className="flex flex-row items-center gap-2">
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
  );
}
