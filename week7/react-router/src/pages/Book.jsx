import { useParams,Link } from "react-router-dom"

function Book() {
    const { name } = useParams();

  return (
      <div>
          <h3>You are about to access the book:{name} </h3>
          <Link to="/">Back to Home</Link>
    </div>
  )
}

export default Book
