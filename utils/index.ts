export const getExperience = (): string => {
  const currentDate = new Date();
  const currentFormattedDate = new Date(
    `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`
  );
  const startDate = new Date('12/08/2014');
  const timeDiff = Math.abs(currentFormattedDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const yearPeriod = (diffDays / 365).toFixed(1);

  return yearPeriod
}