import { useState } from "react";
import axios from "axios";
import styles from "./FilterTodo.module.css";

const FilterToDo = () => {
  const [hideCompleted, setHideCompleted] = useState(false);

  const toggleFilter = () => {
    setHideCompleted((prevState) => !prevState);
  };

  /* Add filter and order funtions to the context.
And instead of having 3 getList calls we will have a method
that makes one of the calls depending on a specific variable that will say
if we want the whole list or just the filtered one  */

  return (
    <section>
      <span>
        <b>Hide Completed</b>
      </span>
      <input
        type="checkbox"
        name="hideCompleted"
        className={styles.checkboxInput}
        onChange={toggleFilter}
      />
    </section>
  );
};

export default FilterToDo;
