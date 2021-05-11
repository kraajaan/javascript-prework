
//let randomNumber2 = Math.floor(Math.random() * 9 + 11);
//printMessage('Los z zakresu 11-19: ' + randomNumber2);

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
  computerMove = 'papier';
}
else if(randomNumber == 3){
  computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);
