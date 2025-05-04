import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IconButton } from "../components/IconButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const navigation = [
  { name: "home", href: "/", current: true },
  { name: "about", href: "/about", current: false },
  { name: "experience", href: "/experience", current: false },
  { name: "projects", href: "/projects", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const styles = {
  container: "bg-components-primary bottom-0 w-full z-10 px-5",
  text: "text-fontColor-primary text-smallBody font-body",
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
      <div className="flex flex-row items-center justify-between">
        <h1 className={styles.text}>
          © 2025 by Neeti Desai | Built by Neeti Desai using React
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
