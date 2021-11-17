//câu 0:
function Primes(n)
{
    console.log(n);
    if(n<2){
        document.getElementById("kq").innerText=" "
        document.getElementById("kq").innerText="Không Phải Số Nguyên Tố"
    }
    else{
        let dem =0;
        for(let i=1;i<=n;i++){
            if(n%i==0){
                dem++
            }
        }
        if(dem==2)
        {
            document.getElementById("kq").innerText=""
            document.getElementById("kq").innerText="Là số nguyên tố"
        }
        else{
            document.getElementById("kq").innerText=" "
            document.getElementById("kq").innerText="Không phải là số nguyên tố"
        }
    }
}



//câu 1
function print(n){
    document.getElementById("kq").innerText=""
for(let i=1;i<=n;i++)
{
    let a=document.getElementById("kq")
    a.innerHTML=a.innerHTML +"<label>" +i+" "+"</label>"
}
}

//câu 2
function printOddNumbers(n){
    document.getElementById("kq").innerText=""
    for(i=1;i<=n;i++){
        if(i%2==1){
            let a=document.getElementById("kq")
            a.innerHTML=a.innerHTML +"<label>" +i+" "+"</label>"
        }
    }
    
}
//câu 3
function printEvenNumbers(n){
    document.getElementById("kq").innerText=""
    for(let i=1;i<=n;i++){
        if(i%2==0)
        {
            let a=document.getElementById("kq")
            a.innerHTML=a.innerHTML +"<label>" +i+" "+"</label>"
        }
    }
}


//câu 4
function countingPrimes(n)
{
    document.getElementById("kq").innerText=" "
    for (let j=0;j<=n;j++)
    {
        let dem=0;
    for(let i=1;i<=j;i++){
        if(j%i==0){
            dem++
        }}
        if(dem==2){
            let a=document.getElementById("kq")
            a.innerHTML=a.innerHTML +"<label>" +j+" "+"</label"
        }
        else{
            console.log("no")
        }
    
    }
    
}

//câu 5
function sum(n)
{   let sum=0
    document.getElementById("kq").innerText="" 
    
    for(let i=1;i<=n;i++)
    sum +=i;
   document.getElementById("kq").innerText=sum
    
}

//câu 6
function SumOfSquares(n)
{
    let sum=0
    document.getElementById("kq").innerText=""
    for(let i=1;i<=n;i++)
    sum+=i*i;
    document.getElementById("kq").innerText=sum
}

//câu 7
function oddTotals(n)
{
    let sum=0
    document.getElementById("kq").innerText=""
    for(let i=1;i<=n;i++)
    if(i%2==1)
    sum+=i;
    document.getElementById("kq").innerText=sum
}

//câu 8
function check(n)
{
    let a = String(n);
    let dem=0;
    for(let i=0;i<=a.length-1;i++){
        if(a.charAt(i)%2==0){
            dem++
        }
    }
    if(dem==0){
        document.getElementById("kq").innerText="Yes"
    }else{
        document.getElementById("kq").innerText="No"
    }

}




function kq()
{
    switch (document.getElementById("select").value){
    case '0':
    Primes(document.getElementById('n').value)
    break;
   case '1':
    print(document.getElementById('n').value)
    break;
    case '2':
    printOddNumbers(document.getElementById('n').value)
    break;
   case '3':
    printEvenNumbers(document.getElementById('n').value)
    break;
   case '4':
    countingPrimes(document.getElementById('n').value)
        break;
    case '5':
        sum(document.getElementById('n').value)
        break;
    case '6':
        SumOfSquares(document.getElementById('n').value) 
        break;
    case '7':
        oddTotals(document.getElementById('n').value)
        break;
    case '8':
        check(document.getElementById('n').value)
        break;
    
    }


}