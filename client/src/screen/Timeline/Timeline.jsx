import { Link } from "react-router-dom";
import addIcon from "../../assets/icons/add-icon.svg";
import editIcon from "../../assets/icons/edit-icon.svg";
import deleteIcon from "../../assets/icons/delete-icon.svg";

import "./Timeline.css";

export default function Timeline(props) {
  const { thoughts, handleDelete, handleFavorite, currentUser } = props;

  return (
    <div className="waterfall">
      <div>
        <Link to="/thoughts/new">
          <img src={addIcon} alt="add"/>
        </Link>
      </div>
      {thoughts?.map((thought) => (
        <div className="timeline-thought" key={thought.id}>
          <div className="thought-container">
            <div className="username">{thought?.user?.username}</div>
            <div className="comment">{thought?.comment}</div>
            <div>Favorite Count: {thought.favorites.length}</div>
            <button
              onClick={() => {
                handleFavorite({ thought_id: thought.id });
              }}
              disabled={thought.favorites
                .map((f) => f.user_id)
                .includes(currentUser?.id)}
            >
              Favorite it!
            </button>
            {/* {thought.favorites.map(f => f.user_id).includes(currentUser?.id ? <p>is favorited</p> : <p>is not</p>)} */}
            {currentUser?.id === thought.user_id && (
              <div>
                <div>
                  <Link to={`/thoughts/${thought.id}/edit`}>
                    <img src={editIcon} alt="edit"/>
                  </Link>
                </div>
                <div>
                  <img
                    className="delete"
                    src={deleteIcon}
                    onClick={() => handleDelete(thought.id)}
                    alt="delete"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
