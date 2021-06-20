function inicio(){
        var user1 = Math.random()*100;
        while ((user1 > 11) || (user1 < 1)){
            user1 = Math.random()*100;
        }
        alert(Math.round(user1));
        user1 = Math.round(user1);
        var user2 = Math.random()*100;
        while((user2 > 11) || (user2 < 1)){
            user2 = Math.random()*100;
        }
        alert(Math.round(user2));
        user2 = Math.round(user2);

        var resultado = user1 + user2;

    //Comienzan los condicionales para más cartas

        var anwser = confirm("Quieres otra carta?");
        if (anwser == true){
            var user3 = Math.random()*100;
            while ((user3 > 11) || (user3 < 1)){
                user3 = Math.random()*100;
            }
            alert(Math.round(user3));
            user3 = Math.round(user3);
        }else{
            alert("Resultado: "+ Math.round(resultado));
        }

        resultado = user1+user2+user3;
        if(resultado < 21){
            if (anwser == true){
                var anwser2 = confirm("Quieres otra carta?");
                if (anwser2 == true){
                    var user4 = Math.random()*100;
                    while ((user4 > 11) || (user4 <1) ){
                        user4 = Math.random()*100;
                    }
                    alert(Math.round(user4));
                    user4 = Math.round(user4);
                    resultado = user1+user2+user3+user4;
                    alert("Resultado: "+ Math.round(resultado));
                }else if(anwser2 == false){
                    resultado = user1+user2+user3;
                    alert("Resultado: "+ Math.round(resultado));
                }
            }
        }else if (resultado >= 21){
            alert("Resultado: "+ Math.round(resultado));
        }

        alert("Turno de la máquina");
    //
        var maquina1 = Math.random()*100;
        while ((maquina1 > 11) || (maquina1 < 1)){
            maquina1 = Math.random()*100;
        }
        alert(Math.round(maquina1));
        maquina1 = Math.round(maquina1);

        var maquina2 = Math.random()*100;
        while((maquina2 > 11) || (maquina2 < 1)){
            maquina2 = Math.random()*100;
        }
        alert(Math.round(maquina2));
        maquina2 = Math.round(maquina2);

        var maquinaResult = maquina1 + maquina2;

        if (maquinaResult < 18){
            var entrada = true;
            var maquina3 = Math.random()*100;
            while ((maquina3 > 11) || (maquina3 < 1)){
                maquina3 = Math.random()*100;
            }
            alert(Math.round(maquina3));
            maquina3 = Math.round(maquina3);
            maquinaResult = maquina1+maquina2+maquina3;
        }else if (maquinaResult >= 18){
            alert("Resultado: "+Math.round(maquinaResult));
        }
        if (maquinaResult < 18){
            var maquina4 = Math.random()*100;
            while ((maquina4 > 11) || (maquina4 < 1)){
                maquina4 = Math.random()*100;
            }
            alert(Math.round(maquina4));
            maquina4 = Math.round(maquina4);
            maquinaResult = maquina1+maquina2+maquina3+maquina4;
            alert("Resultado: "+ Math.round(maquinaResult));
        }else if ((maquinaResult > 18) && (entrada == true)){
            maquinaResult = maquina1+maquina2+maquina3;
            alert("Resultado: " + Math.round(maquinaResult));
        }

    //If para resultado
        if ((resultado < 22) && (maquinaResult < 22)){
                if (resultado == maquinaResult){
                    alert("Empate");
                }else if (resultado != maquinaResult){
                    if (resultado > maquinaResult){
                        alert("Tú has ganado");
                    }else if (resultado < maquinaResult){
                        alert("La máquina ha ganado");
                    }
                }
        }else if ((resultado > 21) && (maquinaResult > 21)){
            alert("Ambos pierden");
        }else if ((resultado > 21) || (maquinaResult > 21)){
            if (resultado > 21){
                alert("La máquina ha ganado");
            }else if (maquinaResult > 21){
                alert("Tú has ganado");
            }
        }
            
            
            
        let jugar = confirm("¿Quieres jugar otra vez?");
        if (jugar == true){
            inicio();
        }else if(jugar == false){
            alert("Adiós");
        }
     }
