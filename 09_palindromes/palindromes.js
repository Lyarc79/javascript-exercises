const palindromes = function (word) {
   word = word.toLowerCase();
   let cleanWord = '';
   for (let i = 0; i < word.length; i++){
    const char = word[i];
    if((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')){
        cleanWord += char;
    }
   }
   let start = 0;
   let end = cleanWord.length -1;

   while (start < end){
    if (cleanWord[start] !== cleanWord[end]){
        return false;
    }
    start ++;
    end--; 
   }
   return true;
};

// Do not edit below this line
module.exports = palindromes;
