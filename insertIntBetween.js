function converToNumber(arr){
    for(let i=0;i<arr.length;i++){
        arr[i]=parseInt(arr[i]);
    }
}

function insertInBetween(arr){
    let key=arr[arr.length-1];
    let j=arr.length-2;
    while(j>=0 && arr[j]>key){
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=key
}

let inputs=readLine().split(' ');
let N=parseInt(inputs[0]);
let element=parseInt(inputs[1]);
let arr=readLine().split(' ');
converToNumber(arr);
arr.push(element);
insertInBetween(arr);
console.log(...arr);