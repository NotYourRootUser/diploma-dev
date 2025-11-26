import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>This is the Home Page!</h1>
      <Link to="/about"> About </Link><br/>
      <Link to="/contact"> Contact </Link><br />
      <Link to="/login"> Login </Link><br />
      <Link to="/users/:id"> Users Profile </Link><br />
      <Link to="/book/:name"> Book Detail </Link>
    </div>
  )
}

export default Home
