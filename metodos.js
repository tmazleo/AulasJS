
        //classes
    class Animal{
        constructor(patas, asas, voa){ //metodo
            this.patas = patas;
            this.asas = asas;
            this.voa = voa; //sera o boolean, falara se voará ou não pela quantidade de patas e asas
    }
        voar() {
            if(this.voa) {
                console.log('estou voando!');
            } else {
                console.log('não posso voar..');
            }
        }
    }
    const gato = new Animal(4, 0, false);
    const pato = new Animal(2, 2, true);
    console.log('gato', gato);
    console.log('pato', pato);

    gato.voar() //executando a função voar
    pato.voar()


