// Função que lida com o envio do formulário
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio real do formulário

    // Exibe a mensagem de sucesso
    document.getElementById('mensagemSucesso').style.display = 'block';

    // Limpa o formulário
    document.getElementById('formContato').reset();

    // Opcional: Esconde a mensagem de sucesso após 5 segundos
    setTimeout(function() {
        document.getElementById('mensagemSucesso').style.display = 'none';
    }, 5000);
});
