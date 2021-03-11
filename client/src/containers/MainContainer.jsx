import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  destroyThought,
  getAllThoughts,
  postThought,
  putThought,
} from "../services/thoughts";
import Timeline from "../screen/Timeline/Timeline.jsx";
import ThoughtCreate from "../screen/ThoughtCreate/ThoughtCreate";
import ThoughtEdit from "../screen/ThoughtEdit/ThoughtEdit";

import { postFavorite } from "../services/favorites";

export default function MainContainer(props) {
  const [thoughts, setThoughts] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchThoughts = async () => {
      const allThoughts = await getAllThoughts();
      setThoughts(allThoughts);
    };
    fetchThoughts();
  }, []);

  const handleFavorite = async (favoriteData) => {
    const newThought = await postFavorite(favoriteData);
    setThoughts((prevState) =>
      prevState.map((thought) => {
        return thought.id === newThought.id ? newThought : thought;
      })
    );
  };
  const handleCreate = async (formData) => {
    const newThought = await postThought(formData);
    setThoughts((prevState) => [...prevState, newThought]);
    history.push("/timeline");
  };

  const handleDelete = async (id) => {
    await destroyThought(id);
    setThoughts((prevState) =>
      prevState.filter((thought) => thought.id !== id)
    );
  };

  const handleUpdate = async (id, formData) => {
    const updatedThought = await putThought(id, formData);
    setThoughts((prevState) =>
      prevState.map((thought) => {
        return thought.id === Number(id) ? updatedThought : thought;
      })
    );
    history.push("/timeline");
  };
  return (
    <Switch>
      <Route path="/thoughts/new">
        <ThoughtCreate handleCreate={handleCreate} />
      </Route>
      <Route path="/thoughts/:id/edit">
        <ThoughtEdit thoughts={thoughts} handleUpdate={handleUpdate} />
      </Route>
      <Route path="/timeline">
        <Timeline thoughts={thoughts} handleDelete={handleDelete} handleFavorite={handleFavorite} currentUser={currentUser}/>
      </Route>
    </Switch>
  );
}
