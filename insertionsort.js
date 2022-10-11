function insertionSort(arr){
    //12 89 90 7
    for(let i=0;i<arr.length;i++){
        let key=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>key ){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=key
    }
}

function converToNumber(arr){
    for(let i=0;i<arr.length;i++){
        arr[i]=parseInt(arr[i]);
    }
}

let T=parseInt(readLine());
while(T--){
    let N=parseInt(readLine());
    let arr=readLine().split(' ');
    converToNumber(arr)
    insertionSort(arr);
    console.log(...arr);
}