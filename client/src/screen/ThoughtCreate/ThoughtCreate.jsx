import { useState } from "react";

export default function ThoughtCreate(props) {
  const [formData, setFormData] = useState({
    thought: "",
  });
  const { thought } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { thought, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [thought]: value
    }));
  };

  return (
    <div>
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData)
    }}>
      <label for="thought">Thought:</label>
      <input
        type="text"
        name="thought"
        value={thought}
        onChange={handleChange}
      />
      <button>Create Thought</button>
    </form>
    </div>
  );
}
