
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

    class Passaro extends Animal {
        cantar(){
            console.log('estou cantando');
        } 
    }

    class Cachorro extends Animal{
        static nomeCientifico = 'canis lupus familiaris';
        constructor(pelagem){
            super(4, 0, false);
            this.pelagem = pelagem;
        }
    }


    const andorinha = new Passaro(2, 2, true);

    const doguinho = new Cachorro('curta');
    console.log(andorinha);
    console.log(Passaro.nomeCientifico);
    console.log(doguinho);
    console.log(Cachorro.nomeCientifico);

    andorinha.voar();
    andorinha.cantar();
    
    let escolha = prompt('escolha: ');
    if (escolha === ) {
        alert(cachorro);
    } else {
       alert('nao existe');
    }


