
    const selectSerie = document.getElementById('serie');
    const blocoLingua = document.getElementById('bloco-segunda-lingua');
    const radioLingua = document.querySelectorAll('input[name="segunda-lingua"]');
    const radioTurno = document.querySelectorAll('input[name="turno"]');
    const blocoTelefone = document.getElementById('bloco-telefone-tarde');


    selectSerie.addEventListener('change', function () {
    if (this.value == '5ano') {
        blocoLingua.style.display = 'block';
    } else {
        blocoLingua.style.display = 'none';
        radioLingua.forEach(radio => radio.checked = false);
    }
});

radioTurno.forEach(radio => {
    radio.addEventListener('change', function () {
        if (this.value === 'tarde') {
            blocoTelefone.style.display = 'block';
        } else {
            blocoTelefone.style.display = 'none';
        }
    });
});
