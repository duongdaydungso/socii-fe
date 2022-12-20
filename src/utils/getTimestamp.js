export const getTimestamp = (postTime) => {
  // Miliseconds
  const one_sec = 1000;
  const one_min = one_sec * 60;
  const one_hour = one_min * 60;
  const one_day = one_hour * 24;
  const one_week = one_day * 7;

  const today = new Date();
  const postDay = new Date(postTime);
  const gapTime = today - postDay;

  if (gapTime >= one_week) return postDay.toLocaleString();

  if (gapTime >= one_day)
    return (
      Math.floor(gapTime / one_day).toString() +
      " day" +
      (gapTime >= one_day * 2 ? "s" : "") +
      " ago"
    );

  if (gapTime >= one_hour)
    return (
      Math.floor(gapTime / one_hour).toString() +
      " hour" +
      (gapTime >= one_hour * 2 ? "s" : "") +
      " ago"
    );

  if (gapTime >= one_min)
    return (
      Math.floor(gapTime / one_min).toString() +
      " minute" +
      (gapTime >= one_min * 2 ? "s" : "") +
      " ago"
    );

  return (
    Math.floor(gapTime / one_sec).toString() +
    " second" +
    (gapTime >= one_sec * 2 ? "s" : "") +
    " ago"
  );
};
