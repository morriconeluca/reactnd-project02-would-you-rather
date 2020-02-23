export function getPoints(user) {
  return user.questions.length + Object.keys(user.answers).length;
}

export function hasPoints(user) {
  return (
    user.questions.length > 0
    || Object.keys(user.answers).length > 0
  );
}