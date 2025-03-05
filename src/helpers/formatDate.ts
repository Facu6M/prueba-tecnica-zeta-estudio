export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);

  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const datePart = date.toLocaleDateString("es-ES", dateOptions);

  const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
  const timePart = date.toLocaleTimeString("es-ES", timeOptions);

  return { datePart, timePart };
};
