import { useState } from 'react';

export default function ThoughtCreate() {
  const[formData, setFormData] = useState({
    comment: ""
  });
  const { comment } = formData;

  const handleChange = (e) => {
    const { comment, value } = e.target;
    setFormaData((prevState) => ({
      ...prevState,
      [comment]: value,
    }));
  };

  return (
    <div>
      
    </div>
  )
}
