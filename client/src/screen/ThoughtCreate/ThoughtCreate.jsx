import { useState } from "react";

export default function ThoughtCreate() {
  const [formData, setFormData] = useState({
    thought: "",
  });
  const { thought } = formData;

  const handleChange = (e) => {
    const { thought, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [thought]: value
    }));
  };

  return (
    <form>
      <label for="thought">Thought</label>
      <input
        type="text"
        name="thought"
        value={thought}
        onChange={handleChange}
      />
      <button>Create Thought</button>
    </form>
  );
}
