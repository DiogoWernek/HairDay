import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carregar a data atual e define a data mínima.
selectedDate.min = inputToday
selectedDate.value = inputToday

form.onsubmit = (event) => {
  event.preventDefault()
}