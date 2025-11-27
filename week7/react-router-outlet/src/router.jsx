import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home.jsx"
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard.jsx";
import LearningObjectives from "./pages/StudentDashboard/components/LearningObjectives.jsx";
import Instructions from "./pages/StudentDashboard/components/Instructions.jsx"
import VideoTutorial from "./pages/StudentDashboard/components/VideoTutorial.jsx"
const router = createBrowserRouter([
    {
        path:"/",
        Component:Home
    },
    {
        path: "/student-dashboard",
        Component: StudentDashboard,
        children: [
            {
                index: true,
                Component: LearningObjectives
        },
            {
                path: "learning-objectives",
                Component: LearningObjectives
            },
            {
                path: "instructions",
                Component: Instructions
            },
            {
                path: "video-tutorial",
                Component: VideoTutorial
            }
        ]
    }
])

export default router;
