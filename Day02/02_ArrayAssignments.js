//Move Non Zero Element in an Array
function moveZerosInArray(arr)
{
    let arr2=[];
for(let i=0;i<arr.length;i++)
{
   
    if(arr[i]!= 0)
    {
        arr2.push(arr[i])
    }
   
}
while(arr2.length!=arr.length)
{
arr2.push(0)
}
return arr2
}


console.log(moveZerosInArray([1,2,3,0,90,0,4,0]))
//2.Array Intersection Solve using Two for loops or two pointer algorithm
 function arrayIntersection(arr1,arr2)
 {
    arr1.sort();
    arr2.sort();
    let l=0
    let r=0
    while(l<arr1.length && r<arr2.length)
    {
      if(arr1[l]>arr2[r])
      {
       // console.log(arr1[l])
        r++
      }
      else if(arr1[l]<arr2[r])
      {
l++
      }
      else{
        console.log(arr1[l])
        l++
        r++
      }
    }
 }

 arrayIntersection([1,2,2,3,1],[2,2,3,3])

//3.Find Maximum and minimum in a array and return index

function minAndMaxinArray(arr) {
    let l=0
    let r= l+1
   while(l<r && r<arr.length)
   {
     if(arr[l]>arr[r])
     {
        r++;
     }
     else
     {
        l=r;
        r++;
     }

   }
 console.log("Max Position "+l)
 l = 0,
 r= l+1;
 while(l<r && r<arr.length)
   {
     if(arr[l]<arr[r])
     {
        r++;
     }
     else
     {
        l=r;
        r++;
     }

   }
   console.log("Min Position "+l)
}

minAndMaxinArray([1,2,3,0,90,0,4,0])

//4.remove Duplicates from Array
function duplicateArray(arr)
{
  for(let i=0;i<arr.length-1;i++)
  {
    for(let j=i+1;j<arr.length;j++)
    {
      if(arr[i]==arr[j])
      {
        arr.splice(j,1)
      }

    }
  }
  console.log(arr)
}

duplicateArray([1,2,7,3,2,4,5,1,6,3,6])