import React from "react";

const Projects = () => {
  const styles = {
    container: "flex flex-col items-center justify-center h-screen bg-gray-100",
    title: "text-4xl font-bold text-gray-800",
    description: "mt-4 text-lg text-gray-600",
    link: "mt-6 text-blue-500 hover:underline",
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My App</h1>
      <p className={styles.description}>
        This is a simple React app with Tailwind CSS.
      </p>
      <a href="/about" className={styles.link}>
        Learn more about us
      </a>
    </div>
  );
};

export default Projects;
