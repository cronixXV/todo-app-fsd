import { Checkbox, CircularProgress } from "@mui/material";
import { taskModel } from "entities/task";
import { Todo } from "shared/api/todos/model";

type Props = {
  todo: Todo;
};

export const ToggleTask = ({ todo }: Props) => {
  const updateTodo = taskModel.useTaskStore((state) => state.updateTodo);
  const isUpdateLoading = taskModel.useTaskStore(
    (state) => state.isUpdateLoading
  );

  return isUpdateLoading ? (
    <CircularProgress />
  ) : (
    <Checkbox
      onChange={(value) =>
        updateTodo({ ...todo, completed: value.target.checked })
      }
    />
  );
};
