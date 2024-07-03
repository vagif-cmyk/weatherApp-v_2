function getTimeByTimezone(
  timezoneInMilliseconds = 10800000,
  targetDate = new Date()
) {
  const utcTime = targetDate.getTime() + targetDate.getTimezoneOffset() * 60000;

  return new Date(utcTime + timezoneInMilliseconds);
}

export default getTimeByTimezone;
