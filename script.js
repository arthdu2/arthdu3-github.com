var quotes = ['Pegue 5 objetos de cores diferentes em 25 segundos','Realize 50 polichinelos em 2 minutos', 'Passe por debaixo de 8 mesas em 40 segundos','Levante duas pessoas mais leve que voce simultaneamente', 'Levante alguem mais pesado que vc durante 10 segundos','Plante bananeira por 20 segundos']
      var randomNumberStable= -1;
      
      function newQuote() {
      
      if(randomNumberStable < 0){
        randomNumberStable = Math.floor(Math.random()*(quotes.length));
       document.getElementById('quoteDisplay').innerHTML = quotes[randomNumberStable];
      }
       else{
          var randomNumber = -2
           do{
           randomNumber = Math.floor(Math.random()*(quotes.length));
           }
          while(randomNumber == randomNumberStable);
          document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
          randomNumberStable = randomNumber;
       }
      
      }
      var quotes2 = ['Onde o apostolo Paulo morreu?','Quem escreveu o livro de Atos?', 'Quem foi o primeiro seguidor de Cristo a morrer? (de acordo com a biblia)','Qual o numero de evangelhos sinoticos?','Qual era o nome do primo de Jesus?','Qual era o emprego de Lucas?','Onde nasceu o apostolo Paulo?']
      var randomNumberStable2= -1;
      function newQuote2() {
          if(randomNumberStable2 < 0){
           randomNumberStable2 = Math.floor(Math.random()*(quotes2.length));
          document.getElementById('quoteDisplay').innerHTML = quotes2[randomNumberStable2];
         }
          else{
             var randomNumber2 = -2
              do{
              randomNumber2 = Math.floor(Math.random()*(quotes2.length));
              }
             while(randomNumber2 == randomNumberStable2);
             document.getElementById('quoteDisplay').innerHTML = quotes2[randomNumber2];
             randomNumberStable2 = randomNumber2;
          }
         
         }