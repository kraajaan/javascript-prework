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
  else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
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
  else if (argComputerMove == 'nieznany ruch' || argPlayerMove == 'nieznany ruch') {
    return 'Nieznany wynik.';
  }
}






//let randomNumber2 = Math.floor(Math.random() * 9 + 11);
//printMessage('Los z zakresu 11-19: ' + randomNumber2);

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
  computerMove = 'papier';
}
else if(randomNumber == 3){
  computerMove = 'nożyce';
}
*/

printMessage('Mój ruch to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == 2){
  playerMove = 'papier';
}
else if(playerInput == 3){
  playerMove = 'nożyce';
}
*/

printMessage('Twój ruch to: ' + playerMove);


printMessage(displayResult(computerMove, playerMove));
