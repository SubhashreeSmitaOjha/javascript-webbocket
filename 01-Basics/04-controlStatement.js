/*
it is like an expression which control the expression of a program.
2types.
    1.conditional
        --here we provide condition and based on that condition rest part of the program are executed.
        --if,if-else,else-if,switch,ternary
    2.iterative
        --here we also give an expression and until the condition met repeatedly continue the iteration.
        --for loop(for in,for of),while(entry control loop),do-while(exit control loop)
*/
// if-statement
    let a=10;
    if (a<=20) {
        console.log("a is smallest");
    }
// if-else
    let b=10;
    if (b<=20) {
        console.log("b is smallest");
    }
    else{
        console.log("a is greater");
    }
// else-if
    let age=55;
    if (age<18) {
        console.log("you are not eligible for drive");
    }
    else if(age>=18 && age<60){
        console.log("you are eligible for drive");
    }
    else{
        console.log("you belong to senior citizen category");
    }
// Switch
    let num=3;
    switch(num){
        case 0:
            console.log("num value is 0");
            break;
        case 1:
            console.log("num value is 1");
            break;
        case 2:
            console.log("num value is 2");
            break;
        case 3:
            console.log("num value is 3");
            break;
        case 4:
            console.log("num value is 4");
            break;
        default:
            console.log("num is not matched");
    }
// ternary operator
    let x=10;
    let res=(x>0 ? true:false);
    console.log(res);
// taking input from user
    // let num1=prompt("Enter a no:");
    // let num2=parseInt(prompt("Enter a no:"));


// for loop--which you use to check for certain conditions and then repeatedly execute a block of code as long as those conditions are met.
    //Ex-1
        for (let i = 0; i < 3; i++) {
            let name = "Subhashree";
            console.log("Hi, my name is " + name);
        }
    //Ex-2
            
        
