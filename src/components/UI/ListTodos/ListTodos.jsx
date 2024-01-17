import { useContext } from "react";
import Card from "../Card/Card";
import styles from "./ListTodos.module.css";
import { TodoContext } from "../../../context/TodoContext";
import FilterToDo from "../FilterTodo/FilterTodo";
import SortTodos from "../SortTodos/SortTodos";

const ListTodos = () => {
  const { todoList } = useContext(TodoContext);

  return (
    <section>
      <div className={styles.filterSortContainer}>
        <SortTodos />
        <FilterToDo />
      </div>
      <div className={styles.cardsContainer}>
        {todoList?.map((todo) => (
          <Card key={todo.id} todo={todo} />
        ))}
      </div>
    </section>
  );
};

export default ListTodos;
