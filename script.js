// Atualizar o ano automaticamente no rodapé
const yearSpan = document.getElementById('year');
if(yearSpan){
    yearSpan.textContent = new Date().getFullYear();
}

// Função para copiar o e-mail para a área de transferência
const btnEmail = document.getElementById('btn-email');
const meuGmail = "Jose.gabriel.tech@gmail.com";

if (btnEmail) {
    btnEmail.addEventListener('click', () => {
        // Usa a API Clipboard do navegador
        navigator.clipboard.writeText(meuGmail).then(() => {
            const originalText = btnEmail.textContent;
            
            // Altera o visual do botão temporariamente
            btnEmail.textContent = 'Copiado!';
            btnEmail.classList.add('copied');
            
            // Volta ao estado original após 2 segundos
            setTimeout(() => {
                btnEmail.textContent = originalText;
                btnEmail.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Erro ao copiar e-mail: ', err);
        });
    });
}