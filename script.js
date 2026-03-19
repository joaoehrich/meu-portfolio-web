
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

    document.getElementById('nascimento').addEventListener('change', function(){
        const nascimento = new Date(this.value);
        const hoje = new Date();
        if(!this.value){
            document.getElementById('idade').value='';
            alert('Digite uma data válida!');
        }

        let anos = hoje.getFullYear() - nascimento.getFullYear();
        document.getElementById('idade').value = `${anos} anos`;
});
    const campoCep = document.getElementById('cep');
    campoCep.addEventListener('input', function(){
        let valor = this.value.replace(/\D/g,'');

        if(valor.length > 5){

            valor = valor.slice(0,2)+'.'+ valor.slice(2,5) +'-'+valor.slice(5,8);
           
        }

        this.value = valor;
      })
      
      document.getElementById('cpf').addEventListener('input', function(e){
        let valor = e.target.value.replace(/\D/g,'');
        
        if(valor.length <= 11){
            valor = valor.replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        }

      });
    


