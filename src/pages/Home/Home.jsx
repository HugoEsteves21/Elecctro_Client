import React from "react";
import TodoCreationForm from "../../components/Form/TodoCreationForm";
import ListTodos from "../../components/UI/ListTodos/ListTodos";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <section className={styles.backImage}>
        <TodoCreationForm />
      </section>
      <ListTodos />
    </div>
  );
};

export default Home;
