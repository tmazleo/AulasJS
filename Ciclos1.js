
        let x = prompt ('insira um numero: ');
        x = parseFloat (x);

        let y = prompt ('insira outro numero menor: ');
        y = parseFloat (y);

        let valorx;
        let valorx2;
        let valory;
        let valory2;
        

        for (let i = 0; i <= 10; i++){
            valorx = x * i;
            
            console.log(+x+' x '+i+' = '+valorx);
            
        }
        valorx2 = x * y;
        console.log('X x y = '+ valorx2);

        console.log('-------------');
        valory2 = y * x;
        console.log('y x X = ' + valory2);

        for (let u = 10; u >= 1; u--){
            valory = y * u; 
            
            console.log(+y+' x '+u+' = '+valory);
        }


