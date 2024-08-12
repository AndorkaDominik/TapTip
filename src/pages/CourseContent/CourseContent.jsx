import React, { useEffect, useState } from "react";
import "./CourseContent.css"
import { FiClipboard } from "react-icons/fi";
import { TiTick } from "react-icons/ti";

const CourseContent = ({courseData, module }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    // Function to update the localStorage
    const updateCompletedModules = () => {
      let completedModules = JSON.parse(localStorage.getItem('completedModules'));

      // If 'completedModules' doesn't exist, initialize it
      if (!completedModules) {
        completedModules = {
          "module1": false,
          "module2": false,
          "module3": false,
          "module4": false,
          "module5": false,
        };
      }

      // Set the current module to true
      completedModules[module] = true;
      // Update the completedModules in localStorage
      localStorage.setItem('completedModules', JSON.stringify(completedModules));

      let completedModules1 = JSON.parse(localStorage.getItem('completedModules'));
      console.log(completedModules1);
    };

    // Update immediately when component mounts
    updateCompletedModules();

    // Set up the interval to update every minute (60000 milliseconds)
    const intervalId = setInterval(() => {
      updateCompletedModules();
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
