import { useState, useContext, useEffect } from "react";
import axios from "axios";
import styles from "./Card.module.css";
import EditDescriptionForm from "../../Form/EditDescriptionForm";
import DeleteToDo from "../../Form/DeleteToDo";
import { TodoContext } from "../../../context/TodoContext";

const Card = ({ todo }) => {
  const { id, description } = todo;

  const [isChecked, setIsChecked] = useState(true);
  const [complete, setComplete] = useState(false);

  const { completed, handleCompleted } = useContext(TodoContext);

  const checkCompleted = () => {
    completed.map((todo) => {
      if (todo.id === id) {
        setComplete(true);
        handleCompleted();
        console.log(complete);
        return complete;
      }
      setComplete(false);
    });
  };

  const handleCompletion = async () => {
    const state = isChecked ? "COMPLETE" : "INCOMPLETE";

    try {
      const response = await axios.patch(`http://localhost:5000/todo/${id}`, {
        state,
      });

      console.log(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = async () => {
    setIsChecked((prevState) => !prevState);

    console.log(isChecked);
    handleCompletion();
  };

  useEffect(() => {
    checkCompleted();
  }, []);

  return (
    <article className={styles.cardContainer}>
      <div className={styles.leftPanel}>
        <input
          type="checkbox"
          name="complete"
          className={styles.checkboxInput}
          onChange={toggleHandler}
          defaultChecked={complete}
        />
        <span className={styles.descriptionSpan}>{description}</span>
      </div>
      <div className={styles.buttonsPanel}>
        <EditDescriptionForm todoId={id} />
        <span className={styles.middleBar}>/</span>
        <DeleteToDo todoId={id} />
      </div>
    </article>
  );
};

export default Card;
