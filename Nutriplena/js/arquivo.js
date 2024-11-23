// Efeito de Rolagem Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20, // Ajuste de espaçamento
                behavior: "smooth",
            });
        }
    });
});

// Validação do Formulário de Contato Geral
const contactForm = document.getElementById("form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
            contactForm.reset(); // Limpa o formulário
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
}

// Exibir o formulário de consulta ao clicar no botão "Agende uma consulta"
const agendarBtn = document.getElementById("agendar-btn");
if (agendarBtn) {
    agendarBtn.addEventListener("click", function () {
        const formSection = document.getElementById("consultation-form");
        if (formSection) {
            formSection.style.display = "block"; // Torna o formulário visível
            formSection.scrollIntoView({ behavior: "smooth" }); // Rola suavemente até o formulário
        }
    });
}

// Validação do Formulário de Consulta
const consultaForm = document.getElementById("form-consulta");
if (consultaForm) {
    consultaForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("consulta-nome").value.trim();
        const email = document.getElementById("consulta-email").value.trim();
        const telefone = document.getElementById("consulta-telefone").value.trim();
        const mensagem = document.getElementById("consulta-mensagem").value.trim();

        if (nome && email && telefone) {
            alert(`Obrigado, ${nome}! Sua consulta foi agendada.`);
            this.reset(); // Limpa o formulário após envio
            document.getElementById("consultation-form").style.display = "none"; // Esconde o formulário
        } else {
            alert("Por favor, preencha todos os campos obrigatórios.");
        }
    });
}
