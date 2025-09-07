document.addEventListener('DOMContentLoaded', () => {

    // 1. SELECIONAR OS ELEMENTOS
    const imcForm = document.getElementById('imc-form');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    
    const imcValueElement = document.getElementById('imc-value');
    const imcCategoryElement = document.getElementById('imc-category');
    const resultImageElement = document.getElementById('result-image');
    
    const resultModal = document.getElementById('result-modal');
    const closeButton = document.querySelector('.close-button');
    const closeModalBtn = document.getElementById('close-modal-btn');

    // 2. FUNÇÃO PARA ABRIR E FECHAR O MODAL (agora usando a classe 'is-visible')
    function openModal() {
        resultModal.classList.add('is-visible'); // MUDANÇA AQUI
    }

    function closeModal() {
        resultModal.classList.remove('is-visible'); // MUDANÇA AQUI
    }

    // 3. EVENTOS PARA FECHAR O MODAL
    // Botão X
    closeButton.addEventListener('click', closeModal);
    // Botão de ação "Fechar" se existir
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && resultModal.classList.contains('is-visible')) {
            closeModal();
        }
    });
    resultModal.addEventListener('click', (event) => {
        if (event.target === resultModal) {
            closeModal();
        }
    });

    // 4. EVENTO PRINCIPAL DO FORMULÁRIO
    imcForm.addEventListener('submit', (event) => {
        event.preventDefault();

    // Aceita vírgula ou ponto
    const weight = parseFloat(weightInput.value.replace(',', '.'));
    const height = parseFloat(heightInput.value.replace(',', '.'));

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert("Por favor, insira valores válidos para peso e altura.");
            return;
        }

        const imc = (weight / (height * height)).toFixed(2);
        let category = '';
        let imageName = '';

        if (imc < 18.5) {
            category = 'Abaixo do peso';
            imageName = 'abaixo-do-peso.png';
        } else if (imc >= 18.5 && imc <= 24.9) {
            category = 'Peso normal';
            imageName = 'peso-normal.png';
        } else if (imc >= 25 && imc <= 29.9) {
            category = 'Sobrepeso';
            imageName = 'sobrepeso.png';
        } else if (imc >= 30 && imc <= 34.9) {
            category = 'Obesidade Grau I';
            imageName = 'obesidade-1.png';
        } else if (imc >= 35 && imc <= 39.9) {
            category = 'Obesidade Grau II';
            imageName = 'obesidade-2.png';
        } else {
            category = 'Obesidade Grau III';
            imageName = 'obesidade-3.png';
        }

        // 5. ATUALIZAR O CONTEÚDO DENTRO DO MODAL
        imcValueElement.textContent = `Seu IMC: ${imc}`;
        imcCategoryElement.textContent = category;
        resultImageElement.src = `images/${imageName}`;
        resultImageElement.alt = category;

        // 6. ABRIR O MODAL
    openModal();

    // Focar primeiro elemento interativo para acessibilidade
    (closeModalBtn || closeButton).focus({ preventScroll: true });
    });

    // Atualiza ano do footer
    const yearSpan = document.getElementById('year-copy');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});