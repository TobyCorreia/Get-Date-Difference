const CalculateDateDifference = async ({ start, end }) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  let days = endDate.getDate() - startDate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    let remainingDaysInMonth =
      daysInMonth(startDate.getFullYear(), startDate.getMonth()) -
      startDate.getDate();
    days = remainingDaysInMonth + endDate.getDate();
    months--;
  }

  if (months < 0) {
    months += 12;
  }
  return { result: { years: years, months: months, days: days } };
};

export default CalculateDateDifference;
