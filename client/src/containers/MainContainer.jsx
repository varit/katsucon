import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { getAllThoughts } from "../services/thoughts";
import Timeline from "../screen/Timeline/Timeline.jsx";

export default function MainContainer() {
  const [thoughts, setThoughts] = useState([]);

    useEffect(() => {
      const fetchThoughts = async () => {
        const allThoughts = await getAllThoughts();
        setThoughts(allThoughts);
      }
      fetchThoughts();
    }, []) 

  return (
    <Switch>
      <Route path="/timeline">
        <Timeline
          thoughts={thoughts}
        />
      </Route>
    </Switch>
  )
}
