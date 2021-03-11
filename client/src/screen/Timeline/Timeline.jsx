import { Link } from "react-router-dom";

export default function Timeline(props) {
  const { thoughts } = props;

  return (
    <div>
      <Link to="/thoughts/new"><button>Create Thoughts!</button></Link>
      {thoughts.map((thought) => (
        <div key={thought.id}>
          <div>{thought.user.username}</div>
          <div>{thought.comment}</div>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}
