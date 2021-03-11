import { useState } from "react";

export default function ThoughtCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
  });
  const { name } = formData;
  const { handleCreate } = props;

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
      handleCreate(formData)
    }}>
      <label for="name">Thought:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <button>Create Thought</button>
    </form>
    </div>
  );
}
