// Ex-1
    let myDate=new Date();
    console.log(myDate);
    console.log(myDate.toString());
    console.log(myDate.toDateString());
    console.log(myDate.toLocaleString());
    console.log(typeof myDate);
// Ex-2
    let myOwnDate=new Date(2023,0,23);
    let myOwnDate1=new Date(2023,0,23,5,3);
    console.log(myOwnDate.toDateString());
    console.log(myOwnDate1.toLocaleTimeString());
// Ex-3
    let newDate=new Date();
    console.log(newDate);
    console.log(newDate.getMonth());
    console.log(newDate.getDay());
    console.log(newDate.getFullYear());
    console.log(newDate.getHours());
    console.log(newDate.getMinutes());
    console.log(newDate.getSeconds());
    