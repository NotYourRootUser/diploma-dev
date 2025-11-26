import LearningObjectives from "./components/LearningObjectives";
import VideoTutorial from "./components/VideoTutorial";
import Instructions from "./components/Instructions";
import { useState } from "react";

import styles from "./StudentDashboard.module.css";

function StudentDashboard() {
  const [displayContent, setDisplayContent] = useState({
    component: <LearningObjectives />,
  });

  function handleContentClick(e) {
    const id = e.target.id;

    switch (id) {
      case "instructions":
        setDisplayContent({
          component: <Instructions />,
        });
        break;

      case "videoTutorial":
        setDisplayContent({
          component: <VideoTutorial />,
        });
        break;

      default:
        setDisplayContent({
          component: <LearningObjectives />,
        });
        break;
    }
  }

  return (
    <div>
      <h1>StudentDashboard Page</h1>

      <button
        id="learning-objectives"
        onClick={handleContentClick}
        className={styles.btn}
      >
        Learning Objectives
      </button>

      <button
        id="instructions"
        onClick={handleContentClick}
        className={styles.btn}
      >
        Instructions
      </button>

      <button
        id="videoTutorial"
        onClick={handleContentClick}
        className={styles.btn}
      >
        Video Tutorial
      </button>

      <br />

      {displayContent.component}
    </div>
  );
}

export default StudentDashboard;
