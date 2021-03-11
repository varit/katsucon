import { Link } from "react-router-dom";

export default function Timeline(props) {
  const { thoughts } = props;

  return (
    <div>
      <Link to="/thoughts/new"><button>Create Thoughts!</button></Link>
      {thoughts.map((thought) => (
        <div>
          <div>{thought.user.username}</div>
          <div>{thought.comment}</div>
        </div>
      ))}
    </div>
  );
}
