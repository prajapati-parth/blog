export const getExperience = () => {
  const currentDate = new Date(),
    currentFormattedDate = new Date(
      `${currentDate.getMonth() +
        1}/${currentDate.getDate()}/${currentDate.getFullYear()}`
    ),
    startDate = new Date('12/08/2014'),
    timeDiff = Math.abs(currentFormattedDate.getTime() - startDate.getTime()),
    diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)),
    yearPeriod = (diffDays / 365).toFixed(1)

  return yearPeriod
}
