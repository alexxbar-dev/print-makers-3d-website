// Modulo: interceptamos los formularios antes de que llame el servicio Formspree, para darle asincronia y manejar el mensaje de alerta nosotros, sin que nos redirija al mensaje por defecto del servicio.


const $form = document.querySelector('#contact-form');
const $btn = $form.querySelector('#submit-btn-form');

$form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const originalBtnText = $btn.textContent;
  $btn.disabled = true;
  $btn.textContent = "Enviando..."

  const data = new FormData($form);

  try {
    const response = await fetch($form.action, {
      method: $form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert("¡Solicitud enviada con éxito!\n\nGracias por contactar a Print Makers 3D. Nos pondremos en contacto con usted a la brevedad.")
      $form.reset();
    } else {
      errorData = await response.json();
      alert("Error al enviar:\n" + errorData.errors.map(e => e.message).join(', ')
       + "\n\nEl envío de archivos está implementado correctamente en el frontend, " +
        "pero se encuentra deshabilitado en el backend debido a las limitaciones del plan gratuito de Formspree.\n" +
        "Puedes enviar solo datos de texto.");
      $form.reset();
    }
  } catch (error) {
    alert("Hubo un fallo de conexión. Por favor, verifique su internet e intente de nuevo.");
  } finally {
    $btn.disabled = false;
    $btn.textContent = originalBtnText;
  }

})
