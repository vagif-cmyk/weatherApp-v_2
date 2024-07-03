export default function formatTemp(temp) {
  return typeof temp === "number" ? Math.round(temp) : temp;
}
