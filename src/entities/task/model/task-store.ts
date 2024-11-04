import { create } from "zustand";
import { getTodo, getTodoById, updateTodo } from "shared/api/todos";
import { QueryParams, Todo } from "shared/api/todos/model";
import { TaskState } from "./types";

export const useTaskStore = create<TaskState>((set) => ({
  taskList: [],
  task: undefined,
  isLoading: false,
  taskListError: "",
  taskError: "",
  isUpdateLoading: false,

  getTaskList: async (params: QueryParams) => {
    set({ isLoading: true, taskListError: "" });
    try {
      const data = await getTodo(params);
      set({ taskList: data, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        taskListError: error instanceof Error ? error.message : "Unknown error",
      });
    }
  },

  getTask: async (id: string) => {
    set({ isLoading: true, taskError: "" });
    try {
      const data = await getTodoById(id);
      set({ task: data, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        taskError: error instanceof Error ? error.message : "Unknown error",
      });
    }
  },

  updateTodo: async (todo: Todo) => {
    set({ isUpdateLoading: true });
    try {
      await updateTodo(todo);
      set({ isUpdateLoading: false });
    } catch (error) {
      set({ isUpdateLoading: false });
      throw error;
    }
  },
}));
