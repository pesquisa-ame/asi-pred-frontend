interface handleAa2ActiveProps {
  aa: string;
  setAa2: (aa: string) => void;
  setAa2Active: (active: boolean) => void;
}

export function handleAa2Active({
  aa,
  setAa2,
  setAa2Active,
}: handleAa2ActiveProps) {
  setAa2(aa);
  setAa2Active(true);
}
