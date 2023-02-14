// **************LEKSIONI 24 - Promises ***************

// let divide = (x,y) => {
//     return new Promise ((resolved, rejected)=>{

//     if(x === 0 || y === 0 )

//     rejected(`x ose y duhet te jene te ndryshme nga numri 0`)
//     else resolved (x/y)})}
        
 

// divide (0,2)
// .then(res => console.log(res))
// .catch(err => console.log(4+err ))

// setInterval(()=> {console.log(Math.random())},10) 

let mreti = (...args) => {

    return new Promise ((po, jo) =>{

        let s=0
        for (let i=0; i<= args.length; i++){
            s+=args[i] }

            if(s%2==0)
            po(args)
            else jo("Array ka dhe elemente tek") 
       
    }
        
    )
}

mreti(2,4,6,10,10).then(po => console.log(po)).catch(jo => console.log(jo))