## File cleaner
//Read a file, remove all the extra spaces and write it back to the same file.

const fs = require('fs');


function writedata(err){
    console.log("done");
}

function clean(data){
    var arr = data.split(" ");

    var ans;

    for(var i = 0; i < arr.length; i++){
        if(arr[i].length === 0){

        }
        else{
            ans.push(arr[i]);
        }
    }

    var cleanned = ans.join(" ");

    return cleanned;
}

function readdata(err, data){
    if(err){
        console.log(err);
        return;
    }
    
    var cleandara = clean(data);
    fs.writeFIle('a.txt', 'utf8', cleandata, writedata);
}





fs.readFile('a.txt', 'utf8', readdata);