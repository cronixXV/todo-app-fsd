import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { QueryParams } from "shared/api/todos/model";
import { buttons } from "./config";

type Props = {
  onChange: (params: QueryParams) => void;
};

export const TaskFilter = ({ onChange }: Props) => {
  const [selected, setSelected] = React.useState<string | null>("3");

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newSelected: string | null
  ) => {
    if (newSelected !== null) {
      setSelected(newSelected);
      const button = buttons.find((btn) => btn.id === newSelected);
      if (button) {
        onChange(button.params);
      }
    }
  };

  return (
    <ToggleButtonGroup
      value={selected}
      exclusive
      onChange={handleChange}
      aria-label="task filter"
    >
      {buttons.map(({ id, title }) => (
        <ToggleButton key={id} value={id} aria-label={title}>
          {title}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
