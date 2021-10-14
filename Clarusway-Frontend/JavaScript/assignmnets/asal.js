for(let num=2 ; num<100; num++){
    var sonuc=true;
        for(let i = 2; i < num; i++){
            if(num %i == 0){
               sonuc=false;
               break;
            }
        }  
    if(sonuc == true){console.log(num);}    
}


for (var i = 2; i<=100; i++) {
    for(var k = 2; k<i; k++){
        if(i % k == 0){
            break;
        }
    }
    if(i == k){
        console.log(i)
    }
}