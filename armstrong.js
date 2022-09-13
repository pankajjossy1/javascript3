function armstrong  (num){
    var sum = 0;
    num1= num;
    while(num1 !=0){
        cube = 0 
        rem  = num1 % 10
        cube = rem * rem * rem
        sum  = sum + cube
        num1 = parseInt (num1 / 10)
    }

    if(sum == num)
        console.log("Armstrong");
    else 
        console.log("Not Armstrong");
}

armstrong(371);