import { useEffect } from "react";
import { taskModel, TaskRow } from "entities/task";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { ToggleTask } from "features/toggle-task";
import { TaskFilter } from "features/task-filter";

export const TodoListPage = () => {
  const taskList = taskModel.useTaskStore((state) => state.taskList);
  const getTaskList = taskModel.useTaskStore((state) => state.getTaskList);
  const isLoading = taskModel.useTaskStore((state) => state.isLoading);
  const taskListError = taskModel.useTaskStore((state) => state.taskListError);

  useEffect(() => {
    getTaskList({});
  }, [getTaskList]);

  if (taskListError) {
    return (
      <Box textAlign="center" py={4}>
        <Typography variant="h5" color="error">
          {taskListError}
        </Typography>
      </Box>
    );
  }

  return (
    <Stack spacing={2} direction="column">
      <TaskFilter onChange={getTaskList} />
      {isLoading ? (
        <Box display="flex" justifyContent="center" py={2}>
          <CircularProgress />
        </Box>
      ) : (
        taskList.map((task) => (
          <TaskRow
            key={task.id}
            title={task.title}
            id={task.id}
            action={<ToggleTask todo={task} />}
          />
        ))
      )}
    </Stack>
  );
};
