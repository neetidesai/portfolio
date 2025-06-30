import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { KnowledgeCard } from "./KnowledgeCard";

const categories = [
  {
    name: "Languages",
    items: [
      <KnowledgeCard title="Python" logo="/python.jpeg" />,
      <KnowledgeCard title="Java" logo="/java.png" />,
      <KnowledgeCard title="Javascript" logo="/javascript.png" />,
      <KnowledgeCard title="Typescript" logo="/typescript.png" />,
      <KnowledgeCard title="SQL" logo="/sql.png" />,
      <KnowledgeCard title="HTML" logo="/html.png" />,
      <KnowledgeCard title="CSS" logo="/css.png" />,
    ],
  },
  {
    name: "DBMS",
    items: [
      <KnowledgeCard title="MySQL" logo="/mysql.png" />,
      <KnowledgeCard title="PostgreSQL" logo="/postgresql.png" />,
      <KnowledgeCard title="DynamoDB" logo="/dynamodb.jpeg" />,
      <KnowledgeCard title="MongoDB" logo="/mongodb.png" />,
    ],
  },
  {
    name: "Frameworks & Libraries",
    items: [
      <KnowledgeCard title="React.js" logo="/react.png" />,
      <KnowledgeCard title="React Native" logo="/react.png" />,
      <KnowledgeCard title="Node.js" logo="/nodejs.png" />,
      <KnowledgeCard title="Express.js" logo="/expressjs.png" />,
      <KnowledgeCard title="FastAPI" logo="/fastapi.png" />,
      <KnowledgeCard title="Django" logo="/django.png" />,
      <KnowledgeCard title="OpenCV" logo="/opencv.jpeg" />,
      <KnowledgeCard title="PySpark" logo="/pyspark.jpeg" />,
      <KnowledgeCard title="Tensorflow" logo="/tensorflow.png" />,
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      <KnowledgeCard title="AWS Cognito" logo="/cognito.png" />,
      <KnowledgeCard title="AWS SES" logo="/ses.png" />,
      <KnowledgeCard title="AWS Lambda" logo="/lambda.png" />,
      <KnowledgeCard title="AWS Amplify" logo="/amplify.png" />,
      <KnowledgeCard title="Google Firebase" logo="/firebase.png" />,
      <KnowledgeCard title="Docker" logo="/docker.png" />,
      <KnowledgeCard title="Github Actions" logo="/github-actions.png" />,
    ],
  },
  {
    name: "Tools",
    items: [
      <KnowledgeCard title="Github" logo="/github.png" />,
      <KnowledgeCard title="Gitlab" logo="/gitlab.png" />,
      <KnowledgeCard title="SVN" logo="/svn.png" />,
      <KnowledgeCard title="Postman" logo="/postman.png" />,
      <KnowledgeCard title="Swagger" logo="/swagger.png" />,
    ],
  },
];

export function TechnicalKnowledgeTabs() {
  return (
    <div className="flex w-full items-center justify-center px-4 pt-3">
      <div className="w-full md:w-[640px]">
        <TabGroup>
          <TabList className="flex flex-wrap justify-center">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className={({ selected }) =>
                  `rounded-full px-4 text-fontSize-smallButton sm:text-fontSize-largeButton font-semibold 
                  ${selected ? "bg-components-secondary text-black shadow-md" : "text-white hover:bg-components-primary/15"} 
                  focus:outline-none transition`
                }
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, items }) => (
              <TabPanel key={name} className="rounded-xl bg-white/5 p-4">
                <div className="flex flex-wrap justify-center gap-4">
                  {items}
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
