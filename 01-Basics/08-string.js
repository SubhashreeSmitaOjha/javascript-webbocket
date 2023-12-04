// String
// Ex-1
    let name="Subhashree Smita";
    let lname=" Ojha";
    let age=24;
    console.log("My name is "+name+" "+lname+" ,I am "+age+"years old.");
    // template literals(used by``)
    console.log(`My name is ${name} ${lname}, I am ${age} years old.`);
// Ex-2
    const name1=new String("Bhubaneswar");
    console.log(name1.length);
    console.log(name1.toUpperCase());
    console.log(name1.toLowerCase());
    console.log(name1.indexOf('b'));
    console.log(name1.charAt(7));
// Ex-3
    const newName=name1.SubString(0,4);
    console.log(newName);
// Ex-4
    const myName="____gift____";
    console.log(myName);
    console.log(myName.trim());
