
function calculateTime(n) {
    var start = new Date().getTime();

    var sum = 0;

    for(var i = 0; i < n; i++){
        sum+=i;
    }

    var end = new Date().getTime();

    console.log((end-start)/1000);
}

calculateTime(10000000);