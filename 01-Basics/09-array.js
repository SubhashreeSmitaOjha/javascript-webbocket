/*array ['num','float','string','boolean',null]
1.an array is a special variable which can hold more than one variable.
2.in js wecan store different types of data in array.
*/
// we can defined:-
    // Ex-1
        const myArr=[1,2,3,'name1','name2'];
        console.log(myArr);
    // Ex-2
        const getArr=new Array(1,2,3,4,5);
        console.log(getArr);
    // Ex-3
        const getArr1=[];
        getArr1[0]="ABC";
        getArr1[1]="XYZ";
        getArr1[2]="PQR";
        console.log(getArr1);
    // Ex-4
        const Arr=[1,2,3,4,5,6];
        console.log(Arr[4]);
// Array prototype.push():-used to add an element in the last of an array.
    console.log(Arr.push(7));
    console.log(Arr);
// Array prototype.pop():-used to remove last element of an array.
    console.log(Arr.pop());
    console.log(Arr);
// unshift():-used to add element in the first index of an array.
    console.log(Arr.unshift(14));
    console.log(Arr);
// shift():-used to delete element from the begining in the array.
    console.log(Arr.shift());
    console.log(Arr);
// length:-used to get length of an array.
    console.log(Arr.length);
// toString():-used to conver array to string.
    console.log(Arr.toString());
// array Concat():-used to concat arrays.
    // Ex-1
        const myBoys=["Aman","Soumya","Subhrakant"];
        const myGirls=["Ananya","Mama","Pooja","Lisha"];
        const myFriend=myBoys.concat(myGirls);
        console.log(myFriend);

// includes():-check pass element present in your array or not.
    console.log(Arr.includes(9));
// indexOf():-check element if present then return index no otherwise return -1.
    console.log(Arr.indexOf(5));

    console.log(Arr.indexOf(10));

    console.log(Arr);
// join():-convert array to string.
    const demoArray=Arr.join();
    console.log(demoArray);
    console.log(typeof demoArray);
// slice():-selects elements from the start argument, and up to (but not including) the end argument.(not change original array).
    console.log(Arr.slice(1,3));
// splice():-cut a array and changes original array.
    // console.log(Arr.splice(2,5));
    console.log(Arr);

    console.log(Arr);