{
  const playGame = function(playerInput){

    clearMessages();

    function getMoveName(argMoveId){
      if(argMoveId == 1){
        return 'kamień';
      }
      else if(argMoveId == 2){
        return 'papier';
      }
      else if(argMoveId == 3){
        return 'nożyce';
      }
    }

    const displayResult = function(argComputerMove, argPlayerMove){

      console.log('moves:', argComputerMove, argPlayerMove);
      const wygr = 'Ty wygrywasz!',
            przegr = 'Przegrywasz!',
            rem = 'Remis.';

      if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        return wygr;
      }
      else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        return przegr;
      }
      else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        return przegr;
      }
      else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        return wygr;
      }
      else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        return wygr;
      }
      else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        return przegr;
      }
      else if (argComputerMove == argPlayerMove) {
        return rem;
      }
    };


    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);


    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);
    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);


    printMessage(displayResult(computerMove, playerMove));
  };


  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
}
