import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Card.module.css";
import EditDescriptionForm from "../../Form/EditDescriptionForm";
import DeleteToDo from "../../Form/DeleteToDo";

const Card = ({ todo }) => {
  const { id, description } = todo;

  const [isChecked, setIsChecked] = useState(false);
  //const [state, setState] = useState("");

  // add logic to check items that are completed
  // ex: if(completed) ? checked="checked" : checked=''

  /*   const handleCompletion = async () => {
    toggleHandler();

    const state = isChecked ? "COMPLETE" : "INCOMPLETE";

    try {
      const response = await axios.patch(`http://localhost:5000/todo/${id}`, {
        state,
      });

      console.log(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  }; */

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
    setIsChecked((prevState) => {
      return !prevState;
    });

    console.log(isChecked);
    handleCompletion();
  };

  /*     useEffect(() => {
    console.log(isChecked);
    handleCompletion();
  }, [isChecked]); */

  return (
    <article className={styles.cardContainer}>
      <div className={styles.leftPanel}>
        <input
          type="checkbox"
          name="complete"
          className={styles.checkboxInput}
          onChange={toggleHandler}
        />
        <span className={styles.descriptionSpan}>{description}</span>
      </div>
      <div className={styles.buttonsPanel}>
        {/* <button>Edit</button> */}
        <EditDescriptionForm todoId={id} />
        <span>/</span>
        <DeleteToDo todoId={id} />
      </div>
    </article>
  );
};

export default Card;
