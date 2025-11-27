import { Outlet, Link, NavLink } from "react-router";
import styles from "./StudentDashboard.module.css"

function StudentDashboard() {
  return (
    <div>
      <h2>This is student dashboard page!🥑</h2>
      <Link to="/">Back to Home</Link>
      <br></br>
      {/* <Link to="/student-dashboard/learning-objectives">Learning Objectives</Link> */}
      <NavLink className={({ isActive }) => {return  isActive ? styles.navLinkActive: ""}} to="learning-objectives">Learning Objectives</NavLink>
      <NavLink className={({ isActive }) =>  isActive ? styles.navLinkActive: ""} to="learning-objectives">Learning Objectives</NavLink>
      <br></br>
      <Link to="instructions">Instructions</Link>
      <br></br>
      <Link to="video-tutorial">VideoTutorial</Link>
      {/* Display the child components/nested routes here */}
      <Outlet />
    </div>
  );
}

export default StudentDashboard;
