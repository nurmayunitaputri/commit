export const isCurrentUser = (userId) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));

  return currentUser.id === userId;
};
