
// Módulo: manejo de tabs
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".detailed-services__container")
  const tabs = container.querySelectorAll("[role='tab']");
  const panels = container.querySelectorAll("[role='tabpanel']");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Resetear todos
      tabs.forEach(t => {
        t.setAttribute("aria-selected", "false");
        t.classList.remove("active");

      });
      panels.forEach(p => {
        p.classList.add("hidden")
        p.setAttribute("aria-hidden", "true");
      });

      // Activar el actual
      tab.setAttribute("aria-selected", "true");
      tab.classList.add("active");
     
      const targetId = tab.getAttribute("aria-controls");
      const panel = document.getElementById(targetId);
      panel.classList.remove("hidden");
      panel.setAttribute("aria-hidden", "false");
      
 
    });
  });
});


// Módulo: manejo de input file

const input = document.getElementById('file');
const fileNameDisplay = document.querySelector('.services-request__form-subtitleFile');

input.addEventListener('change', () => {
  const archivos = Array.from(input.files);
  const nombres = archivos.map(file => file.name).join(', ');

  fileNameDisplay.textContent = archivos.length > 0
    ? nombres : 'Planos, bocetos, imágenes, archivos CAD (opcional)';
});