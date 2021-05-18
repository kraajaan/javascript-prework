function playGame(playerInput){

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

  function displayResult(argComputerMove, argPlayerMove){

    console.log('moves:', argComputerMove, argPlayerMove);

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      return 'Ty wygrywasz!';
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      return 'Przegrywasz!';
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      return 'Przegrywasz!';
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      return 'Ty wygrywasz!';
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      return 'Ty wygrywasz!';
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
      return 'Przegrywasz!';
    }
    else if (argComputerMove == argPlayerMove) {
      return 'Remis!';
    }
  }


  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);
  let computerMove = getMoveName(randomNumber);
  printMessage('Mój ruch to: ' + computerMove);


  //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  console.log('Gracz wpisał: ' + playerInput);
  let playerMove = getMoveName(playerInput);
  printMessage('Twój ruch to: ' + playerMove);


  printMessage(displayResult(computerMove, playerMove));
}


document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
