// Number
// Ex-1
    const num=768;
    console.log(num);
// Ex-2
    // new(datatype),Number(reserved keyword)
    const newScore = new Number(100);
    console.log(newScore);
    console.log(typeof newScore);
    console.log(newScore.toString());
    console.log(newScore.toString().length);
    console.log(newScore.toFixed(2));
// Ex-3
    const otherNumber=125.8920;
    console.log(otherNumber.toPrecision(4));
    const demoNumber=1000000;
    console.log(demoNumber.toLocaleString());
// Math
// Ex-1
    console.log(Math.abs(-4));
    console.log(Math.random());
// Ex-2
    const min=100;
    const max=200;
    console.log(Math.floor(Math.random()*(Math-min+1))+min);