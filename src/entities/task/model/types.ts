import { QueryParams, Todo } from "shared/api/todos/model";

export interface TaskState {
  taskList: Todo[];
  task?: Todo;
  isLoading: boolean;
  taskListError: string;
  taskError: string;
  isUpdateLoading: boolean;
  getTaskList: (params: QueryParams) => Promise<void>;
  getTask: (id: string) => Promise<void>;
  updateTodo: (todo: Todo) => Promise<void>;
}
