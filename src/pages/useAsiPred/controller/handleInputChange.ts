import React from "react";

export function handleInputChange(
  setId: React.Dispatch<React.SetStateAction<string>>
) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };
}
