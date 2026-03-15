document.addEventListener('DOMContentLoaded', () => {
    // ==== Mobile Navigation Toggle ====
    const menuBtn = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.md\\:flex');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            // Toggle logic for mobile menu would go here
            // For a minimalist demo, we focus on responsive layout
        });
    }

    // ==== FormSubmit AJAX Logic ====
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Evita que recargue la página o salte a FormSubmit

            // Cambia el texto del botón mientras envía
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'SENDING...';
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);

            // IMPORTANTE: Se añade /ajax/ a la URL de formsubmit
            fetch("https://formsubmit.co/ajax/spdmstudio@gmail.com", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success || data.success === "true" || data.form_submit) {
                    formStatus.textContent = "Thank you! Your message has been sent.";
                    formStatus.className = "text-sm mt-4 text-green-400 block";
                    contactForm.reset();
                } else {
                    throw new Error('Error in response');
                }
            })
            .catch(error => {
                formStatus.textContent = "Oops! Something went wrong. Please try again later.";
                formStatus.className = "text-sm mt-4 text-red-500 block";
            })
            .finally(() => {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
                
                // Opcional: Ocultar el mensaje después de 5 segundos
                setTimeout(() => {
                    formStatus.classList.add('hidden');
                    formStatus.classList.remove('block');
                }, 5000);
            });
        });
    }
});