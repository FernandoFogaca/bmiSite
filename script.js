let modal = document.getElementById("resultModal");
let span = document.getElementsByClassName("close")[0];

function calculate(event) {
    event.preventDefault();

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100; // Converte para metros

    let bmi = weight / (height * height);
    let resultText = '';
    let modalClass = '';

    // Determina o texto e a classe CSS com base no IMC
    if (bmi < 18.5) {
        resultText = `Your BMI is ${bmi.toFixed(2)}: Underweight`;
        modalClass = 'underweight'; // Azul
    } else if (bmi >= 18.5 && bmi <= 24.99) {
        resultText = `Your BMI is ${bmi.toFixed(2)}: Normal`;
        modalClass = 'normal'; // Verde
    } else if (bmi >= 25 && bmi <= 29.99) {
        resultText = `Your BMI is ${bmi.toFixed(2)}: Overweight`;
        modalClass = 'overweight'; // Laranja
    } else if (bmi >= 30 && bmi <= 34.99) {
        resultText = `Your BMI is ${bmi.toFixed(2)}: Obese`;
        modalClass = 'obese'; // Vermelho
    } else {
        resultText = `Your BMI is ${bmi.toFixed(2)}: Morbidly Obese`;
        modalClass = 'morbidly-obese'; // Preto
    }

    // Exibe o resultado no modal
    document.getElementById("modalResult").innerHTML = resultText;

    // Adiciona a classe para definir a cor da caixa modal
    modal.querySelector('.modal-content').className = 'modal-content ' + modalClass;

    // Mostra o modal
    modal.style.display = "block";
}

// Fecha o modal ao clicar no "X"
span.onclick = function() {
    modal.style.display = "none";
    // Limpa os campos após fechar o modal
    document.getElementById("weight").value = '';
    document.getElementById("height").value = '';
    // Remove a classe do modal para que a cor volte ao padrão
    modal.querySelector('.modal-content').className = 'modal-content';
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        // Limpa os campos após fechar o modal
        document.getElementById("weight").value = '';
        document.getElementById("height").value = '';
        // Remove a classe do modal para que a cor volte ao padrão
        modal.querySelector('.modal-content').className = 'modal-content';
    }
}
