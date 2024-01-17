import { useState } from "react";
import axios from "axios";
import styles from "./TodoCreationForm.module.css";

const TodoCreationForm = () => {
  const [description, setDescription] = useState("");

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/todos", {
        description,
      });

      console.log(response.data[0]);
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.sectionContainer}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input
          type="text"
          name="description"
          placeholder="Write new task here..."
          onChange={handleDescription}
          className={styles.createInput}
        />
        <button type="submit" className={styles.createButton}>
          Create
        </button>
      </form>
    </section>
  );
};

export default TodoCreationForm;
