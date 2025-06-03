// Menu responsivo e dropdown
// Rolagem suave, tooltip, validação de formulário, animações e acessibilidade

document.addEventListener('DOMContentLoaded', function() {
    // Header fixo e com background ao scrollar
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Ajuste o valor conforme necessário
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Menu mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    if (navToggle && navList) {
        navToggle.addEventListener('click', function() {
            navList.classList.toggle('open');
        });
        // Fechar menu mobile ao clicar em um link
        navList.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('open')) {
                    navList.classList.remove('open');
                }
            });
        });
    }

    // Dropdown acessível
    const dropdown = document.querySelector('.nav-dropdown');
    if (dropdown) {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.querySelector('.dropdown-menu').style.display = 'block';
        });
        dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.dropdown-menu').style.display = 'none';
        });
        dropdown.addEventListener('focusin', () => {
            dropdown.querySelector('.dropdown-menu').style.display = 'block';
        });
        dropdown.addEventListener('focusout', () => {
             // Delay para permitir clique nos sublinks
             setTimeout(() => {
                if (!dropdown.contains(document.activeElement)) {
                     dropdown.querySelector('.dropdown-menu').style.display = 'none';
                }
             }, 50);
        });
        // Fechar dropdown ao clicar em um item
        dropdown.querySelectorAll('.dropdown-menu a').forEach(item => {
            item.addEventListener('click', () => {
                dropdown.querySelector('.dropdown-menu').style.display = 'none';
            });
        });
    }

    // Seta do hero rola para a próxima seção
    const heroArrow = document.querySelector('.hero-arrow');
    if (heroArrow) {
        heroArrow.addEventListener('click', function() {
            const nextSection = document.querySelector('#quem-somos'); // Ajuste o ID da próxima seção
            if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Tooltip acessível no info
    const heroInfo = document.querySelector('.hero-info');
    if (heroInfo) {
        heroInfo.addEventListener('focus', () => {
            heroInfo.querySelector('.tooltip').style.display = 'block';
        });
        heroInfo.addEventListener('blur', () => {
            heroInfo.querySelector('.tooltip').style.display = 'none';
        });
        heroInfo.addEventListener('mouseenter', () => {
            heroInfo.querySelector('.tooltip').style.display = 'block';
        });
        heroInfo.addEventListener('mouseleave', () => {
            heroInfo.querySelector('.tooltip').style.display = 'none';
        });
    }

    // Formulário de contato (exemplo de validação e envio) - PRECISA DE BACKEND PARA FUNCIONAR
    const contatoForm = document.querySelector('.contato-form');
    if (contatoForm) {
        contatoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aqui você adicionaria o código para enviar o formulário para um backend
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            contatoForm.reset();
        });
    }

    // Rolagem suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#') && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Animação de entrada para os cards de serviços
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.servico-card').forEach(card => {
        observer.observe(card);
    });
}); 