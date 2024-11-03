import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CircularProgress,
  Typography,
  Button,
} from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  loading: boolean;
  title: string;
  text: string;
  actions?: ReactNode[];
};

export const TaskCard = ({ text, title, actions, loading }: Props) => {
  return (
    <Card sx={{ width: 500 }}>
      {loading ? (
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 150,
          }}
        >
          <CircularProgress />
        </CardContent>
      ) : (
        <>
          <CardHeader
            title={title}
            action={
              <Button component={Link} to="/" size="small">
                Back
              </Button>
            }
          />
          <CardContent>
            <Typography variant="body2">{text}</Typography>
          </CardContent>
          {actions && (
            <CardActions>
              {actions.map((action, index) => (
                <div key={index}>{action}</div>
              ))}
            </CardActions>
          )}
        </>
      )}
    </Card>
  );
};
