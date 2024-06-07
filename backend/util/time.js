function getTimeStamp(date) {
  if (typeof date === "string" || date instanceof Date) {
    const d = new Date(date);
    return d.getTime();
  }
  return new Date().getTime();
}

module.exports = {
  getTimeStamp,
};
