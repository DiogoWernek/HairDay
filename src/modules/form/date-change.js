import { schedulesDay } from "../schedules/load.js"

// Selecionar o input de data
const selectedDate = document.getElementById("date")

// Recarregar a lista de horários depois que o input de data mudar
selectedDate.onchange = () => schedulesDay()