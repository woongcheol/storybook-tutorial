import React from "react";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskState } from "../lib/store";

export default function TaskList() {
  // Redux 스토어의 상태를 조회합니다.
  const tasks = useSelector((state) => {
    // 할 일을 상태에 따라 정렬하여 필터링합니다.
    const tasksInOrder = [
      ...state.taskbox.tasks.filter((t) => t.state === "TASK_PINNED"),
      ...state.taskbox.tasks.filter((t) => t.state !== "TASK_PINNED"),
    ];
    const filteredTasks = tasksInOrder.filter(
      (t) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"
    );
    return filteredTasks;
  });

  const { status } = useSelector((state) => state.taskbox); // 상태 정보를 가져옵니다.

  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다.

  const pinTask = (value) => {
    // 'TASK_PINNED' 상태로 할 일을 업데이트하는 액션을 디스패치합니다.
    dispatch(updateTaskState({ id: value, newTaskState: "TASK_PINNED" }));
  };
  const archiveTask = (value) => {
    // 'TASK_ARCHIVED' 상태로 할 일을 업데이트하는 액션을 디스패치합니다.
    dispatch(updateTaskState({ id: value, newTaskState: "TASK_ARCHIVED" }));
  };

  // 로딩 중 상태일 때의 요소를 정의합니다.
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  // 로딩 상태일 때 로딩 요소를 렌더링합니다.
  if (status === "loading") {
    return (
      <div className="list-items" data-testid="loading" key={"loading"}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  // 할 일이 없을 때 메시지를 렌더링합니다.
  if (tasks.length === 0) {
    return (
      <div className="list-items" key={"empty"} data-testid="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <p className="title-message">You have no tasks</p>
          <p className="subtitle-message">Sit back and relax</p>
        </div>
      </div>
    );
  }

  // 할 일 목록을 렌더링합니다.
  return (
    <div className="list-items" data-testid="success" key={"success"}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onPinTask={(task) => pinTask(task)} // 핀 이벤트를 전달합니다.
          onArchiveTask={(task) => archiveTask(task)} // 아카이브 이벤트를 전달합니다.
        />
      ))}
    </div>
  );
}
