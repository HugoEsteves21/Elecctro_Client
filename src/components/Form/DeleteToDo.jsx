import React from "react";
import axios from "axios";
import styles from "./DeleteToDo.module.css";

const DeleteToDo = ({ todoId }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/todo/${todoId}`
      );
      
      console.log(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteToDo;
