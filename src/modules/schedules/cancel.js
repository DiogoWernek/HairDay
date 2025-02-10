import { scheduleCancel } from "../../services/schedule-cancel"
import { schedulesDay } from "./load"

const periods = document.querySelectorAll(".period")

// Gera evento click para cada lista.
periods.forEach((periods) => {
  // Capturar o evento de click na lista.
  period.addEventListener("click", async (event) => {
    if(event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li")

      // Pega o ID do agendamento para remover.
      const { id } = item.dataset

      // Confirma se o ID foi selecionado.
      if (id) {
        const isConfirm = confirm("Tem certeza que deseja excluir o agendamento?")
      }

      if(isConfirm) {
        // Faz a resquisição na API para cancelar.
        await scheduleCancel({ id })

        // Recarrega os agendamentos.
        schedulesDay()
      }
    }
  })
})