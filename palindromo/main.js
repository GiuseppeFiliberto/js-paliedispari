// Chiedere all'utente di inserire una parola, creare una funzione per capire se la parola inserita è palindroma 


// Procediamo a creare prima la funzione che ci serve

function checkPalindrom(word){
    let reverseWord = "";
    for (let i = word.lenght - 1; i >= 0; i--){
        reverseWord += word[i];
    }
    if (reverseWord === word) {
        return true
    } 
    else {
        return false;
    }
} 

const wordTest = "racecar"
console.log(checkPalindrom(wordTest));

const wordTest2 = "racecar"
console.log(checkPalindrom(wordTest2));

