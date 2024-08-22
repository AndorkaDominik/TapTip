import React, { useEffect, useState } from "react";
import "./CourseContent.css"
import { FiClipboard } from "react-icons/fi";
import { TiTick } from "react-icons/ti";

const CourseContent = ({courseData, module }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    // Function to update the localStorage
    const updateCompletedModules = () => {
      let completedModules;

      try {
        completedModules = JSON.parse(localStorage.getItem('completedModules'));
      } catch (error) {
        console.error("Error parsing completedModules from localStorage", error);
        completedProjects = null;
      }

      // If 'completedModules' doesn't exist, initialize it
      if (!completedModules) {
        completedModules = {
          "module1": false,
          "module2": false,
          "module3": false,
          "module4": false,
          "module5": false,
          "module6": false,
          "module7": false,
          "module8": false,
          "module9": false,
          "module10": false,
          "module11": false,
          "module12": false,
          "module13": false,
          "module14": false,
          "module15": false,
          "module16": false,
        };
      }

      // Set the current module to true
      completedModules[module] = true;
      // Update the completedModules in localStorage
      localStorage.setItem('completedModules', JSON.stringify(completedModules));

      try {
        localStorage.setItem('completedModules', JSON.stringify(completedModules));
      } catch (error) {
        console.error("Error setting completedModules in localStorage", error);
      }
    };

    const updateCompletedProjects = () => {
      let completedProjects;

      try {
        completedProjects = JSON.parse(localStorage.getItem('completedProjects'));
      } catch (error) {
        console.error("Error parsing completedProjects from localStorage", error);
        completedProjects = null;
      }

      // If 'completedProjects' doesn't exist, initialize it
      if (!completedProjects) {
        completedProjects = {
          "project1": false,
          "project2": false,
          "project3": false,
          "project4": false,
          "project5": false,
        };
      }

      // Set the current module to true
      completedProjects[module] = true;
      // Update the completedProjects in localStorage
      try {
        localStorage.setItem('completedProjects', JSON.stringify(completedProjects));
      } catch (error) {
        console.error("Error setting completedProjects in localStorage", error);
      }
    };

    // testing
    // Update immediately when component mounts
    // updateCompletedModules();
    // updateCompletedProjects();

    // Set up the interval to update every minute (60000 milliseconds)
    const intervalId = setInterval(() => {
      updateCompletedModules();
      updateCompletedProjects();

    }, 60000); // 60000 milliseconds = 1 minute
    
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
    }, []);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000); // Reset the icon after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="course-content ">
      {courseData.map((item, index) => {
        switch (item.type) {
          case "margin":
            return <div className="margin"></div>;
          case "header":
            switch (item.level) {
              case 1:
                return <h1 key={index}>{item.text}</h1>;
              case 2:
                return <h2 key={index}>{item.text}</h2>;
              case 3:
                return <h3 key={index}>{item.text}</h3>;
              default:
                return null;
            }
          case "point":
            return <p key={index}>{item.text}</p>;
          case "example":
            return (
              <div key={index} className="example-container">
              <pre key={index}>
                <code>{item.code}</code>
                <button
                  className="copy-button"
                  onClick={() => copyToClipboard(item.code, index)}
                >
                  {copiedIndex === index ? <TiTick /> : <FiClipboard />}
                    {copiedIndex === index ? " Copied!" : " Copy Code"}
                </button>
              </pre>
              
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default CourseContent;
