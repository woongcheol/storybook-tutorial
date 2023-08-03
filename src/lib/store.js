// Redux Toolkit에서 제공하는 함수들을 import 합니다.
import { configureStore, createSlice } from "@reduxjs/toolkit";

// 앱이 로드될 때 스토어의 초기 상태를 정의합니다.
// 보통 실제 앱에서는 서버에서 데이터를 가져오겠지만, 현재는 그 부분을 고려하지 않습니다.
const defaultTasks = [
  { id: "1", title: "Something", state: "TASK_INBOX" },
  { id: "2", title: "Something more", state: "TASK_INBOX" },
  { id: "3", title: "Something else", state: "TASK_INBOX" },
  { id: "4", title: "Something again", state: "TASK_INBOX" },
];
const TaskBoxData = {
  tasks: defaultTasks,
  status: "idle",
  error: null,
};

/*

Redux Toolkit의 createSlice 함수를 사용하여 슬라이스를 정의합니다.
슬라이스는 상태와 해당 상태를 업데이트하는 리듀서를 가집니다.
더 자세한 내용은 Redux Toolkit의 문서를 참조하시면 됩니다.
https://redux-toolkit.js.org/api/createSlice
*/
const TasksSlice = createSlice({
  name: "taskbox", // 슬라이스의 이름을 지정합니다.
  initialState: TaskBoxData, // 초기 상태를 설정합니다.
  reducers: {
    // 'updateTaskState' 액션을 처리하는 리듀서를 정의합니다.
    // 액션의 payload에는 'id'와 'newTaskState'라는 두 가지 정보가 필요합니다.
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      // 액션에서 받은 'id'를 가진 task를 찾습니다.
      const task = state.tasks.findIndex((task) => task.id === id);
      // 찾았다면 해당 task의 상태를 업데이트합니다.
      if (task >= 0) {
        state.tasks[task].state = newTaskState;
      }
    },
  },
});
// 슬라이스에 정의한 액션들을 다른 컴포넌트에서 사용할 수 있도록 export 합니다.
export const { updateTaskState } = TasksSlice.actions;

/*

앱의 스토어 구성 정보를 설정합니다.
Redux의 configureStore 함수를 사용하여 스토어를 생성합니다.
더 자세한 내용은 Redux Toolkit의 문서를 참조하시면 됩니다.
https://redux-toolkit.js.org/api/configureStore
*/
const store = configureStore({
  reducer: {
    taskbox: TasksSlice.reducer, // 슬라이스에서 정의한 리듀서를 등록합니다.
  },
});
export default store;
