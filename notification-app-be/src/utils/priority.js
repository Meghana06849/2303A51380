export const getWeight = (type) => {
  switch (type) {
    case "Placement":
      return 3;
    case "Result":
      return 2;
    case "Event":
      return 1;
    default:
      return 0;
  }
};

export const computeScore = (n) => {
  const weight = getWeight(n.Type);

  const time = new Date(n.Timestamp).getTime();
  const now = Date.now();

  const recency = 1 / ((now - time) / 1000000 + 1);

  return weight * 10 + recency;
};