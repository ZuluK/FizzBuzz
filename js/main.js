//Fizz Buzz Algorithm
function fizzBuzz(num){
  for(var i = 1; i < num; i++){
    if(i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');//if(i % 15 === 0) because 15 is divisible by both three and five
    if(i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
}

fizzBuzz(40);
