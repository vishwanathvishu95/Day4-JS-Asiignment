ts=prompt("enter the totaal sales values,the employee has generated one after the other with comas");
function salescomission(n){
    (n>20000)               ? c= (5000*0.02)+(5000*0.05)+(10000*0.07)+(0.1*(n-20000)) :
    (n>=10001 && n<=20000)  ? c= (5000*0.02)+(5000*0.05)+((n-10000)*0.07)  :
    (n>=50001 && n<=10000)  ? c= (5000*0.02)+((n-5000)*0.05) :
    (n>=0 && n<=5000)       ? c= 0.02*n : c= 0;
    console.log("commission : " + Math.round(c));
    return Math.round(c);
}
sales = ts.split(",");
tc=0;
for(let i=0;i<sales.length;i++)
{
    s=parseInt(sales[i]);
    console.log("sales:" +s);
    if(s!=NaN)

    {
        tc += salescomission(s);
        console.log("Total Commision" : + tc);

            }
}
console.log("the total commision will be ${tc}");