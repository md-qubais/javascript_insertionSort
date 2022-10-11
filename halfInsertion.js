function halfInsertion(arr,start,end){
    for(let i=start;i<end;i++){
        let key=arr[i];
        let j=i-1;
        while(j>=start && arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }

}


let str=readLine();
let arr=str.split('');
halfInsertion(arr,parseInt(arr.length/2),arr.length);
console.log(arr.join(''));