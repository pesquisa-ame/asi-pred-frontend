export function handleWeightChange(
  event: React.ChangeEvent<HTMLSelectElement>,
  setter: React.Dispatch<React.SetStateAction<string>>
) {
  setter(event.target.value);
}
