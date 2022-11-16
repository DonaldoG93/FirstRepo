// // power function 

// function power (a, b){
//    let c= a**b;
//    console.log(c); 
// }


// power(2,3);


// function factorial  
function factorial (a){
      if(a == 0 || a == 1){
    return 1;
 } else{
     return a *factorial (a-1);
        }
}

console.log(factorial(5));


// RUN factorial(5)

// 1 is (a == 0 || a == 1) => No  

//    then return a *factorial (5-1);  /*a=4 */
//  ///           5 * factorial (4) 
// 2 is (a == 0 || a == 1) => No  
//    then return  a *factorial (4-1);  /*a=3 */
// ///             4 * factorial (3) 

// 3 is (a == 0 || a == 1) => No  
//    then return  a *factorial (3-1);  /*a=2 */
//    ///             3 * factorial (2) 

// 4 is (a == 0 || a == 1) => No  
//    then return  a *factorial (2-1);  /*a=1 */
//  ///             2 * factorial (1)   

// 5 is (a == 0 || a == 1) => Yes  
//    then return  1 


//    // BACKWAY (stack exec)

// 5. factorial (1) = 1 /* from base statement*/

// 4. 2 * factorial (1) => 2* 1 = 2    /*  facttorial(2) = 2 */

// 3. 3 * factorial(2) = 3*2 = 6  /* factorial(3) = 6 */

// 2. 4 * factorial (3) = 4 *6  /*factorial(4) = 24 */

// 1. 5 * factorial (4) = 5 * 24 = 120

function power(a, b) {
   if (b === 0) return 1;
   
      return a * power(a, b-1)
   
}

console.log (power(4, 3));





