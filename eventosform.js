const container = document.querySelector('#container');
        const nome = document.querySelector('#nome');
        const key = document.querySelector('#senha');
        const btn = document.querySelector('#btn');
        const form = document.querySelector('.login');
        
        function senhaOk(){
            if ((key.value === 'secreta') && (nome.value === 'tmazleo')) {
               alert('acessado');

           } else {
               alert('fracasso');
           }
        }

       form.addEventListener('submit', senhaOk);
        