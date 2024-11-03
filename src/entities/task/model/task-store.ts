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
    set((state) => ({ ...state, isLoading: true }));
    try {
      const data = await getTodo(params);
      set((state) => ({ ...state, isLoading: false, taskList: data }));
    } catch (error) {
      if (error instanceof Error) {
        set((state) => ({
          ...state,
          isLoading: false,
          taskListError: error.message,
        }));
      }
    }
  },

  getTask: async (id: string) => {
    set((state) => ({ ...state, isLoading: true }));
    try {
      const data = await getTodoById(id);
      set((state) => ({ ...state, isLoading: false, task: data }));
    } catch (error) {
      if (error instanceof Error) {
        set({ isLoading: false, taskError: error.message });
      }
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
