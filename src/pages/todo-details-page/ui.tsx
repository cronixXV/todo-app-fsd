import { Container, Box, Alert, CircularProgress } from "@mui/material";
import { TaskCard, taskModel } from "entities/task";
import { ToggleTask } from "features/toggle-task";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const TodoDetailsPage = () => {
  const getTask = taskModel.useTaskStore((state) => state.getTask);
  const isLoading = taskModel.useTaskStore((state) => state.isLoading);
  const taskError = taskModel.useTaskStore((state) => state.taskError);
  const task = taskModel.useTaskStore((state) => state.task);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      getTask(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        {taskError ? (
          <Alert severity="error">{taskError}</Alert>
        ) : (
          <TaskCard
            title={`Task#${task?.id}`}
            text={task?.title || ""}
            loading={isLoading}
            actions={task ? [<ToggleTask todo={task} />] : undefined}
          />
        )}
        {isLoading && <CircularProgress />}
      </Box>
    </Container>
  );
};
