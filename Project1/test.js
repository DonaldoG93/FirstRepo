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


RUN factorial(5)

1 is (a == 0 || a == 1) => No  

   then return a *factorial (5-1);  /*a=4 */

2 is (a == 0 || a == 1) => No  
   then return  a *factorial (4-1);  /*a=3 */


3 is (a == 0 || a == 1) => No  
   then return  a *factorial (3-1);  /*a=2 */
   

4 is (a == 0 || a == 1) => No  
   then return  a *factorial (2-1);  /*a=1 */


5 is (a == 0 || a == 1) => Yes  
   then return  1 


   // BACKWAY





