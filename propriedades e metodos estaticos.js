
        //classes
    class Animal{
        static nomeCientifico = 'não tenho'
        constructor(patas, asas, voa){ //metodo
            this.patas = patas;
            this.asas = asas;
            this.voa = voa; //sera o boolean, falara se voará ou não pela quantidade de patas e asas
    }
    static clonar(animal) {
        return new Animal(animal.patas, animal.asas, animal.voa);
    }
        voar() {
            if(this.voa) {
                console.log('estou voando!');
            } else {
                console.log('não posso voar..');
            }
        }
    }
    const ovelha = new Animal(4, 0, false);
    const dolly = Animal.clonar(ovelha);
    console.log('ovelha', ovelha);
    console.log('dolly', dolly);
    


