import { month, days } from '../constants'

export const getDateTodayName = () => {
  const today = new Date()
  return `${days[today.getDay()]} ${today.getDate()} de ${month[today.getMonth()]} del ${today.getFullYear()}`
}

export const formatCurrency = (e) => {
  try {
    return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  } catch (error) {
    return e
  }
}