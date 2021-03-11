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

export default function MainContainer() {
  const [thoughts, setThoughts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchThoughts = async () => {
      const allThoughts = await getAllThoughts();
      setThoughts(allThoughts);
    };
    fetchThoughts();
  }, []);

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
    setThoughts(prevState => prevState.map((thought) => {
      return thought.id === Number(id) ? updatedThought : thought
    }))
    history.push("/timeline");
  }
  return (
    <Switch>
      <Route path="/thoughts/new">
        <ThoughtCreate handleCreate={handleCreate} />
      </Route>
      <Route path="/thoughts/:id/edit">
        <ThoughtEdit thoughts={thoughts} handleUpdate={handleUpdate}/>
      </Route>
      <Route path="/timeline">
        <Timeline thoughts={thoughts} handleDelete={handleDelete} />
      </Route>
    </Switch>
  );
}
