import React, { useState } from "react"
import { Todo, TasksType } from "./components/todo"
import "./App.css"

export type FilterValuesType = "all" | "active" | "completed"

function App() {
  let initialTask = [
    {
      id: 0,
      title: "JavaScript",
      isDone: true,
    },
    {
      id: 1,
      title: "TypeScript",
      isDone: false,
    },
    {
      id: 2,
      title: "React",
      isDone: true,
    },
    {
      id: 3,
      title: "Next",
      isDone: false,
    },
  ]

  let [tasks, setTasks] = useState<Array<TasksType>>(initialTask)

  const removeTask = (id: number) => {
    let tasksFiltered = tasks.filter((item) => item.id !== id)
    setTasks(tasksFiltered)
  }

  let [filter, setFilter] = useState<FilterValuesType>("all")

  let tasksForTodo = tasks

  if (filter === "completed") {
    tasksForTodo = tasks.filter((item) => item.isDone === true)
  }

  if (filter === "active") {
    tasksForTodo = tasks.filter((item) => item.isDone === false)
  }

  const changeFilter = (value: FilterValuesType) => {
    setFilter(value)
  }

  const addTask = (title: string) => {
    let newTask = {
      id: Math.random(),
      title: title,
      isDone: false,
    }
    let newTasks = [newTask, ...tasks]
    setTasks(newTasks)
  }

  const onChangeCheck = (id: number, isDone: boolean) => {
    let task = tasks.find((t) => t.id === id)
    if (task) {
      task.isDone = isDone
    }
    setTasks([...tasks])
  }

  return (
    <div className="App">
      <Todo
        tasks={tasksForTodo}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        onChangeChecked={onChangeCheck}
      />
    </div>
  )
}

export default App
