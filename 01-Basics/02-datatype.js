/*Data Type and Memory
1.primitive(number,bigint,symbol,string,boolean,null,undefined)
2.reference([],{},())(use heap memory)

*/

let num1=568;
     let num2=568.38;
     console.log(typeof(num1));
     console.log(typeof(num2));

     var num=10;
     var a='5';
     res=num+a;
     console.log(res);
     console.log(typeof(res));

     let name="Subhashree";
     let age=18;
     let isloggedIn=true;
     let myId;
     const mySalary=34352;
     let myBonus=null;
     console.log(typeof(name));
     console.log(typeof(age));
     console.log(typeof(isloggedIn));
     console.log(typeof(myId));
     console.log(typeof(mySalary));
     console.log(typeof(myBonus));

     let Id=Symbol("123");
     let UserId=Symbol("123");
     console.log(Id==UserId);

     const accountId=45678;
     var accountName="savings";
     let holderName="Web-Bocket";
     accountCity="BBSR";
            // accountId=89683;
     accountName="current";
     holderName="Bocket-Lamp";
     console.table([accountId,accountName,holderName,accountCity]);

     var a=10
     if(a<=10)
        {
            var name1="ABC";
            console.log("It is good");
            let b=20;
            console.log(b);
        }

        let name2="Subhashree";
        let vegetable="ladisfinger";
        console.log(typeof(name2));
        console.log(typeof(vegetable));

        var names="ABC";
        console.log(names);
        // names="XYZ";
        // Console.log(names)
        let nameId=568;
        console.log(nameId);
        nameId=863;
        console.log(nameId);
        const fruit="Apple";
        console.log(fruit);
        // fruit="Orange";
        // console.log(fruit);
// primitive
// Ex-1
    let myName="Subhashree";
    let anotherName="Sonu";
    anotherName="Sonaly";
    console.log(anotherName);
// reference
// Ex-2
    const userOne={
        email:"xyz@gmail.com",
        upi:"123@gmail.com"
    }
    const userTwo=userOne;
    userTwo.email="abc@gmail.com";
    console.log(userOne.email);
    console.log(userTwo.email);
    console.log(userOne);
    console.log(userTwo);