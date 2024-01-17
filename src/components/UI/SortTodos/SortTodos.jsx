import { useContext } from "react";
import styles from "./SortTodos.module.css";
import { TodoContext } from "../../../context/TodoContext";

const SortTodos = () => {
  const { toggleSorter } = useContext(TodoContext);

  return (
    <section className={styles.sortButton} >
      <input
        type="submit"
        name="sortTodo"
        value="Tasks"
        onClick={toggleSorter}
        className={styles.sortInput}
      />
    </section>
  );
};

export default SortTodos;
