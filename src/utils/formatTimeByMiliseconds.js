function formatTimeByMiliseconds(timeInMiliseconds = 0) {
  const timeInSeconds = Math.floor(timeInMiliseconds / 1000);

  const minutes = Math.floor((timeInSeconds / 60) % 60);
  const hours = Math.floor((timeInSeconds / 3600) % 24);

  let formatedMinutes = String(minutes).padStart(2, "0");
  let formatedHours = String(hours).padStart(2, "0");

  return `${formatedHours}:${formatedMinutes}`;
}

export default formatTimeByMiliseconds;
