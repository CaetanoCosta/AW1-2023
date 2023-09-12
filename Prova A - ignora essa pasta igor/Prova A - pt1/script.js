var button = document.querySelector("#calcular"); 

    function calcular(event){
    var input_num1 = document.querySelector("#num1");
    var num1 = input_num1.value;
    num1 = Number(num1);
    var input_num2 = document.querySelector("#num2");
    var num2 = input_num2.value;
    num2 = Number(num2);
    var input_operacao = document.querySelector("#operacao");
    var operacao = input_operacao.value;

    if(num1 != "" && num2 != ""){
        if(!isNaN(num1) && !isNaN(num2)){
            if(num1 < 999999999999999 && num1 > -999999999999999 && num2 < 999999999999999 && num2 > -999999999999999){      
            switch(operacao){
                case "Soma":
                var resultado = num1+num2;
                break;
                
                case "Subtração":
                var resultado = num1-num2;
                break;

                case "Multiplicação":
                var resultado = num1*num2;
                break;

                case "Divisão":
                if(num2 != 0){
                    var resultado = num1/num2;
                }else{
                    alert("Não é possível dividir por 0!");
                }
                break;
            }
            
            alert(resultado);
            }else{
                alert("Número muito grande ou muito pequeno");
            }
        }else{
            alert("Insira dois números!");
        }
    }else{
        alert("Insira dois números!")
    }
      event.preventDefault();
    }

    button.addEventListener("click", calcular, false);