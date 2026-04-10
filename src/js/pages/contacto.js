
// Modulo: modal para agendar llamada

const $formContact = document.getElementById('contact-form');
const $btnOpenModal = $formContact.querySelector('#open-modal-btn');

const $modalWrapper = $formContact.querySelector('#call-scheduling-modal');
const $btnCloseModal = $formContact.querySelector('#close-scheduling-modal');
const $btnConfirmDate = $formContact.querySelector('#confirm-scheduling-date');
const $inputDate = $formContact.querySelector('#appointment-input');

$btnOpenModal.addEventListener('click', () => {
    if ($formContact.checkValidity()) {
        $modalWrapper.classList.add('is-active');
        document.body.style.overflow = 'hidden';

    } else {
        $formContact.reportValidity();
    }
});

$btnCloseModal.addEventListener('click', () => {
    $modalWrapper.classList.remove('is-active');
    document.body.style.overflow = '';

});

$btnConfirmDate.addEventListener('click', async () => {
    const selectedDate = new Date($inputDate.value);
    const nowDate = new Date();
    const optionsDate = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
    };
    const formattedDate = selectedDate.toLocaleString('es-MX', optionsDate);
    const $formData = new FormData($formContact); 

    if (isNaN(selectedDate) || selectedDate <= nowDate) {
        alert("Error: Por favor, elige una fecha futura.");
        return;
    } else {
        $btnConfirmDate.disabled = true;
        try { 
            const response = await fetch("https://formspree.io/f/xaqlgeko", {
                method: "POST",
                body: $formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert(`¡Llamada agendada para el ${formattedDate}!`);
                $btnOpenModal.textContent = "Llamada Agendada ✓";
                $btnOpenModal.style.backgroundColor = "#0e7d74";
                $btnOpenModal.style.filter = "none";
                $btnOpenModal.disabled = true;

                $modalWrapper.classList.remove("is-active");
                document.body.style.overflow = "";

                $formContact.reset();
            } else {
                let error = await response.json();
                alert(`Error al enviar:\n${error.errors.map(e => e.message).join(', ')}\nVerifica tus datos o intentalo más tarde.`);
                $modalWrapper.classList.remove("is-active");
                document.body.style.overflow = "";
            }

        } catch (error) {
            alert("Hubo un fallo de conexión. Por favor, verifique su internet e intente de nuevo.");
            $modalWrapper.classList.remove("is-active");
            document.body.style.overflow = "";
        }
        finally {
            $btnConfirmDate.disabled = false;
        }
    }


    
});

$modalWrapper.addEventListener('click', (e) => {
    
    if (e.target === $modalWrapper) {
        $modalWrapper.classList.remove('is-active');
        document.body.style.overflow = '';
    }
    
});