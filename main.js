const form = document.getElementById('idForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const numero1 = Number(document.getElementById('campoA').value);
    const numero2 = Number(document.getElementById('campoB').value);

    if (numero2 > numero1) {
        alert("Formulário submetido com sucesso");
        form.reset();
    } else {
        alert(`O número B (${numero2}) não é maior que o número A (${numero1})`);
    }
});
