//let vs var
//if we declare a variable with let then it limits that varible
//if variable is declared with var then it can access outside also

function hello(){
    for(let i=0;i<6;i++)
    {
        console.log(i);
    }
    console.log("out"+i);
    
}
hello();
function hello1(){
    for(var i=0;i<6;i++)
    {
        console.log(i);
    }
    console.log("out"+i);
    
}
hello1();