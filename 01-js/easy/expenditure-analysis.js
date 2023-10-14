
function calculateTotalSpentByCategory(transactions) {

  var res = {};
  
  for(var i = 0; i  < transactions.length; i++){
    var t = transactions[i];
    if(res[t.cat]){
      res[t.cat] =  res[t.cat] + t.price;
    }
    else{
      res[t.cat] = t.price;
    }
  }

  var keys = Object.keys(res);
  var ans = [];

  for(var i = 0; i < keys.length; i++){
    var obj = {
      cat: keys[i],
      price: res[keys]
    }

    ans.push(obj);
  }

  console.log(ans);
}

var transactions = [
  {
    item: "Mazaa",
    cat: "Drink",
    price: 20
  },
  {
    item: "Pepsi",
    cat: "Drink",
    price: 21
  },
  {
    item: "Vadapav",
    cat: "Food",
    price: 15
  },
  {
    item: "chole bature",
    cat: "Food",
    price: 50
  }
]

calculateTotalSpentByCategory(transactions);
