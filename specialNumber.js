function specialNum (num){
    var sum = 0;
    num1= num;
    while(num1 !=0){
        fact = 1 
        rem  = num1 % 10
        for(i=1; i<=rem; i++){
            fact= fact * i
        }
        sum  = sum + fact
        num1 = parseInt (num1 / 10)
    }

    if(sum == num)
        console.log("Special");
    else 
        console.log("Not Special ");
}

specialNum(146);