var i = 1, num=1, string = ""
for(i=1; i <=4 ; i++){
    for(j=1; j<=i; j++){
        string += num++;
        string +=' '
    }    
        string += '\n';
}

console.log(string)

