// Ex-1(object literals)
    const person={
        name:"Web_Bocket",
        age:24,
        location:"BBSR"
    };
    console.log(person);
    console.log(person.location);
// Ex-2(object constructor)
    const person1={};
        person1.name="Web_Bocket";
        person1.age=24;
        person1.location="BBSR";
    console.log(person1);
    console.log(person1.name);
    console.log(person1.location);
    person1.isLoggedIn=false;

    console.log(Object.keys(person1));
    console.log(Object.values(person1));
    console.log(person1.hasOwnProperty("isLoggedIn"));
    console.log(person.hasOwnProperty("isLoggedIn"));
// Ex-3
console.log(Object.entries(person1));
console.log(Object.entries(person));