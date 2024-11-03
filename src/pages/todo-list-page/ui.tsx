import { Box, Stack, Typography, CircularProgress } from "@mui/material";
import { taskModel, TaskRow } from "entities/task";
import { useEffect } from "react";

export const TodoListPage = () => {
  const { getTaskList, isLoading, taskListError, taskList } =
    taskModel.useTaskStore((state) => ({
      getTaskList: state.getTaskList,
      isLoading: state.isLoading,
      taskListError: state.taskListError,
      taskList: state.taskList,
    }));

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
      <Typography>filter</Typography>
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
            // action={undefined}
          />
        ))
      )}
    </Stack>
  );
};
