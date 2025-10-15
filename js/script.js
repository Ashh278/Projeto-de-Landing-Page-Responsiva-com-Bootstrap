// Manipulador do formulário de contato
document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Coletar dados do formulário
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    
    // Validação básica
    if (!nome || !email || !assunto || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido!');
        return;
    }
    
    // Simular envio (em produção, isso seria enviado para um servidor)
    console.log('Dados do formulário:', {
        nome,
        email,
        assunto,
        mensagem
    });
    
    // Mostrar mensagem de sucesso
    mostrarMensagemSucesso();
    
    // Limpar formulário
    this.reset();
});

// Função para mostrar mensagem de sucesso
function mostrarMensagemSucesso() {
    const mensagem = document.getElementById('mensagemSucesso');
    mensagem.style.display = 'block';
    
    // Remover mensagem após 5 segundos
    setTimeout(function() {
        mensagem.style.display = 'none';
    }, 5000);
}

// Fechar menu mobile ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        // Fecha o menu se estiver aberto em telas pequenas
        if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});

// Adicionar animação ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar cards de serviços
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Efeito hover nos cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Scroll suave para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Ignorar cliques no navbar brand
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Adicionar classe ao navbar quando scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Validação em tempo real do email
document.getElementById('email').addEventListener('blur', function() {
    const email = this.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && !emailRegex.test(email)) {
        this.style.borderColor = '#ff6b6b';
        this.classList.add('is-invalid');
    } else {
        this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        this.classList.remove('is-invalid');
    }
});

// Resetar estilo do input quando focado
document.getElementById('email').addEventListener('focus', function() {
    this.style.borderColor = 'rgba(255, 255, 255, 0.5)';
    this.classList.remove('is-invalid');
});

// Animar números ao scroll
function animar_numeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    
    numeros.forEach(numero => {
        const valor_final = parseInt(numero.getAttribute('data-numero'));
        let valor_atual = 0;
        
        const incremento = valor_final / 50;
        const intervalo = setInterval(() => {
            valor_atual += incremento;
            
            if (valor_atual >= valor_final) {
                numero.textContent = valor_final;
                clearInterval(intervalo);
            } else {
                numero.textContent = Math.floor(valor_atual);
            }
        }, 20);
    });
}

// Log de inicialização
console.log('Script carregado com sucesso!');
console.log('Versão: 1.0.0');
console.log('Landing Page Bootstrap - Projeto Melhorado');