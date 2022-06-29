export const userQuary = (userId) => {
  const quary = `*[_type == "user" && _id == '${userId}']`;
  return quary;
};
