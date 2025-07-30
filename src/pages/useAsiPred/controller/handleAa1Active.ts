interface handleAa1ActiveProps {
  aa: string;
  setAa1: (aa: string) => void;
  setAa1Active: (active: boolean) => void;
}

export function handleAa1Active({
  aa,
  setAa1,
  setAa1Active,
}: handleAa1ActiveProps) {
  setAa1(aa);
  setAa1Active(true);
}
