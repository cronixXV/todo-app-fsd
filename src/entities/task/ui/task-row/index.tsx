import { Card, CardContent, Stack, Button, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  id: number;
  action: ReactNode;
};

export const TaskRow = ({ title, id, action }: Props) => {
  return (
    <Card sx={{ width: 600 }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          {action}
          <Button component={Link} to={`/${id}`} color="primary">
            <Typography variant="body1">{title}</Typography>
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
