import { Link } from "react-router";

function Home() {
  return (
    <div>
      <h1>This is Home Page😉</h1>
      <Link to="/student-dashboard">Student Dashboard</Link>
    </div>
  )
}

export default Home
