let num = 1634;
let ognum = num;
let arm=0;
let rem;
let length = Math.floor(Math.log10(Math.abs(num)))+1;
let power;

while(num!=0){
    rem = parseInt(num % 10);
    power = Math.pow(rem,length);
    arm += power;
    num = parseInt(num/10);
}

if(arm==ognum){
    console.log(`${ognum} is armstrong`);
}else{
    console.log(`${ognum} is not armstrong`);
}