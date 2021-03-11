import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { destroyThought, getAllThoughts, postThought } from "../services/thoughts";
import Timeline from "../screen/Timeline/Timeline.jsx";
import ThoughtCreate from "../screen/ThoughtCreate/ThoughtCreate";

export default function MainContainer() {
  const [thoughts, setThoughts] = useState([]);
  const history = useHistory();

    useEffect(() => {
      const fetchThoughts = async () => {
        const allThoughts = await getAllThoughts();
        setThoughts(allThoughts);
      }
      fetchThoughts();
    }, []) 

    const handleCreate = async (formData) => {
      const newThought = await postThought(formData);
      setThoughts(prevState => [...prevState, newThought]);
      history.push("/timeline")
    }

    const handleDelete = async (id) => {
      await destroyThought(id);
      setThoughts(prevState => prevState.filter((thought) => thought.id !== id))
    }
  return (
    <Switch>
      <Route path="/thoughts/new">
        <ThoughtCreate handleCreate={handleCreate}/>
      </Route>

      <Route path="/timeline">
        <Timeline thoughts={thoughts} handleDelete={handleDelete}/>
      </Route>
    </Switch>
  )
}
