import { useState, useEffect, createContext } from "react";
import axios from "axios";

const TodoContext = createContext();

const TodoProviderWrapper = (props) => {
  const [todoList, setTodoList] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [hideCompleted, setHideCompleted] = useState(true);
  const [index, setIndex] = useState(0);

  const handleCompleted = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/todos?filter=COMPLETE`
      );

      setCompleted(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleFilter = () => {
    setHideCompleted((prevState) => !prevState);
    if (hideCompleted) getFilteredTodos();
    else getTodos();
  };

  const sortArray = [
    { orderBy: "description", direction: "asc" },
    { orderBy: "description", direction: "desc" },
    { orderBy: "created_at", direction: "asc" },
  ];

  const toggleSorter = () => {
    getOrderedTodos(sortArray[index].orderBy, sortArray[index].direction);
    setIndex((prevState) => (prevState + 1) % 3);
  };

  const getTodos = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/todos`);

      setTodoList(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFilteredTodos = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/todos?filter=INCOMPLETE`
      );

      setTodoList(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrderedTodos = async (orderBy, direction) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/todos?orderBy=${orderBy}&direction=${direction}`
      );

      setTodoList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
    handleCompleted();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todoList,
        completed,
        toggleFilter,
        toggleSorter,
        handleCompleted,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProviderWrapper };
