import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ThoughtEdit(props) {
  const [formData, setFormData] = useState({
    comment: "",
  });
  const { comment } = formData;
  const { thoughts, handleUpdate } = props;
  const { id } = useParams();
  

  useEffect(() => {
    const prefillFormData = () => {
      const thoughtItem = thoughts.find((thought) => thought.id === Number(id));
      setFormData({
        comment: thoughtItem.comment
      })
    }
    if (thoughts.length){
      prefillFormData();
    }
  }, [thoughts])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
      <label for="comment">Edit Thought:</label>
      <input
        type="text"
        name="comment"
        value={comment}
        onChange={handleChange}
      />
      <button>Create Thought</button>
    </form>
    </div>
  );
}
