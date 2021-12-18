import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const baseUrl = "http://localhost:5000/tasks";
  const [showAddTask, setShowAddTask] = useState(false);
  //create read update delete
  //Fetch Task
  // const fetchTask = async () => {
  //   const res = await fetch(baseUrl);
  //   const data = await res.json();
  //   console.log(data);
  // };
  const fetchTask = async () => {
    const { data } = await axios.get(baseUrl);
    console.log(data);
    setTasks(data);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  // ADD TASK
  const addTask = async (newTask) => {
    const res = await axios.post(baseUrl, newTask);
    console.log(res);
    fetchTask();
  };

  //fetch
  // const addTask = async (newTask) => {
  //   const res = await fetch(baseUrl, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(newTask),
  //   });
  //   fetchTask();
  // };

  // const addTask = (newTask) => {
  //   // console.log("Add Task From App.js");
  //   const id = Math.floor(Math.random() * 100) + 1;
  //   const addNewTask = { id, ...newTask };
  //   setTasks([...tasks, addNewTask]);
  // };

  // DELETE TASK
  const deleteTask = async (deletedTaskId) => {
    await axios.delete(`${baseUrl}/${deletedTaskId}`);
    fetchTask();
  };

  //fetch
  // const deleteTask = async (deletedTaskId) => {
  //   await fetch(`${baseUrl}/${deletedTaskId}`, {
  //     method: 'DELETE',
  //   });
  //   fetchTasks();

  // const deleteTask = (deletedTaskId) => {
  //   // console.log("delete", deletedTaskId);
  //   setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  // };

  //TOGGLE DONE
  const toggleDone = async (toggleDoneId) => {
    const { data } = await axios.get(`${baseUrl}/${toggleDoneId}`);
    const updatedTask = { ...data, isDone: !data.isDone };
    await axios.put(`${baseUrl}/${toggleDoneId}`, updatedTask);
    fetchTask();
  };

  //fetch
  // const toggleDone = async (toggleDoneId) => {
  //   const res = await fetch(`${baseUrl}/${toggleDoneId}`);
  //   const data = await res.json();
  //   const updatedTask = { ...data, isDone: !data.isDone };
  //   console.log(updatedTask);

  //   await fetch(`${baseUrl}/${toggleDoneId}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(updatedTask),
  //   });
  // };
  // fetchTask();

  // const toggleDone = (toggleDoneId) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
  //     )
  //   );
  // };

  // SHOW ADD TASK
  const toggleShow = () => setShowAddTask(!showAddTask);

  // DELETE ALL TASKS
  // TO DO FOR YOU

  return (
    <div className="container">
      <Header
        title="TASK TRACKER"
        showAddTask={showAddTask}
        toggleShow={toggleShow}
      />

      {showAddTask && <AddTask addTask={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} />
      ) : (
        <p style={{ textAlign: "center" }}>NO TASK TO SHOW</p>
      )}
    </div>
  );
}

export default App;
