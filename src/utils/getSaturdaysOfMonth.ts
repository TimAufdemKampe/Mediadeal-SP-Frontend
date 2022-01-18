export const getSaturdaysOfMonth = (month: number, year: number): Saturday[] => {
  const saturdays: Saturday[] = []
  const date = new Date(year, month, 0)
  for (let i = 1; i <= date.getDate(); i++) {
    const newDate = new Date(date.getFullYear(), date.getMonth(), i)
    if (newDate.getDay() === 6)
      saturdays.push({
        day: newDate.getDate(),
        month: newDate.getMonth() + 1,
        year: newDate.getFullYear(),
      })
  }
  return saturdays
}

export type Saturday = {
  day: number
  month: number
  year: number
}
