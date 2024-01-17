import { useState, useEffect, createContext } from "react";
import axios from "axios";

const TodoContext = createContext();

const TodoProviderWrapper = (props) => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [orderedTodos, setOrderedTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/todos`);

      setTodos(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFilteredTodos = async (filter) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/todos?filter=${filter}`
      );

      setFilteredTodos(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrderedTodos = async (orderBy) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/todos?orderBy=${orderBy}`
      );

      setOrderedTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        filteredTodos,
        orderedTodos,
        getTodos,
        getFilteredTodos,
        getOrderedTodos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProviderWrapper };
