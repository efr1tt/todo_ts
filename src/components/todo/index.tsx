import React, { ChangeEvent, useState } from "react"
import { FilterValuesType } from "../../App"

export interface TasksType {
  id: number
  title: string
  isDone: boolean
}

export interface PropsType {
  tasks: Array<TasksType>
  removeTask: Function
  changeFilter: (value: FilterValuesType) => void
  addTask: (title: string) => void
  onChangeChecked: (id: number, isDone: boolean) => void
}

export const Todo = (props: PropsType) => {
  let [inputValue, setInputValue] = useState("")

  const onNewTitleHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value)
  }

  const addTask = () => {
    props.addTask(inputValue)
    setInputValue("")
  }

  const onAllClickHandler = () => {
    props.changeFilter("all")
  }
  const onActiveClickHandler = () => {
    props.changeFilter("active")
  }
  const onCompletedClickHandler = () => {
    props.changeFilter("completed")
  }

  return (
    <div>
      <h3>Todo TypeScript</h3>
      <input type="text" value={inputValue} onChange={onNewTitleHandler} />
      <button onClick={addTask}>Добавить</button>
      <ul>
        {props.tasks.map((item, index) => {
          const onRemoveHandler = () => {
            props.removeTask(item.id)
          }

          const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.onChangeChecked(item.id, e.currentTarget.checked)
          }

          return (
            <li key={index}>
              <input
                type="checkbox"
                checked={item.isDone}
                onChange={onChangeHandler}
              />
              {item.title}
              <button onClick={onRemoveHandler}>x</button>
            </li>
          )
        })}
      </ul>
      <button onClick={onAllClickHandler}>All</button>
      <button onClick={onActiveClickHandler}>Active</button>
      <button onClick={onCompletedClickHandler}>Completed</button>
    </div>
  )
}
