
import { useNavigate } from "react-router-dom";

export function useHandleClick() {
  const navigate = useNavigate();

  return (path: string) => {
    navigate(path);
  };
}
