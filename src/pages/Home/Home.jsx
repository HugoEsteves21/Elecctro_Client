import React from "react";
import TodoCreationForm from "../../components/Form/TodoCreationForm";
import ListTodos from "../../components/UI/ListTodos/ListTodos";

const Home = () => {
  return (
    <div>
      <h1>Hello user</h1>
      <TodoCreationForm />
      <ListTodos />
    </div>
  );
};

export default Home;
