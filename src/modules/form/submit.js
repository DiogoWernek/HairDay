import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carregar a data atual e define a data mínima.
selectedDate.min = inputToday
selectedDate.value = inputToday

form.onsubmit = (event) => {
  event.preventDefault()

  try {
    // Recuperando o nome do cliente
    const name = clientName.value.trim()

    if (!name) { 
      return alert("Informe o nome do cliente.")
    }

    // Recupera o horário selecionado.
    const hourSelected = document.querySelector(".hour-selected")

    if (!hourSelected) {
      return alert("Selecione o horário do atendimento.")
    }

    // Recuperar somente a hora
    const [hour] = hourSelected.innerText.split(":")

    // Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    // Gera um ID
    const ID = new Date().getTime()

  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
}