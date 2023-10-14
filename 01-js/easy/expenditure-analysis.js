
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
  console.log(res);
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
