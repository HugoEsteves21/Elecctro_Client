import { useEffect, useContext } from "react";
import Card from "../Card/Card";
import styles from "./ListTodos.module.css";
import { TodoContext } from "../../../context/TodoContext";

const ListTodos = () => {
  const { todos } = useContext(TodoContext);

  return (
    <section>
      {todos?.map((todo) => (
        <Card key={todo.id} todo={todo} />
      ))}
    </section>
  );
};

export default ListTodos;
