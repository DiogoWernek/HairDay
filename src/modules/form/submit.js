import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carregar a data atual e define a data mínima.
selectedDate.min = inputToday
selectedDate.value = inputToday

form.onsubmit = async (event) => {
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
    const id = new Date().getTime().toString()

    // Faz o agendamento.
    await scheduleNew({
      id,
      name,
      when,
    })

    // Recarrega os agendamentos.
    await schedulesDay()

    // Limpa o input de nome do cliente.
    clientName.value = ""

  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
}