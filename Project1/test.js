// power function 

function power (a, b){
   let c= a**b;
   console.log(c); 
}


power(2,3);


// function factorial  
function factorial (a){
 if(a == 0 || a == 1){
    return 1;
 } else{
    return a *factorial (a-1);
        }
}

console.log(factorial(5));
console.log (12);

