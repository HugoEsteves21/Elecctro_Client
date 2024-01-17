import { useContext } from "react";
import styles from "./FilterTodo.module.css";
import { TodoContext } from "../../../context/TodoContext";

const FilterToDo = () => {
  const { toggleFilter } = useContext(TodoContext);

  return (
    <section className={styles.filterCheckbox}>
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
