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