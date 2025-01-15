const names = ["Alwin","chan","ari","athi"]

names[4] = "dina";

console.log(names)

names.forEach((item,index) => {
    console.log(item,index)
    if(item === 'ari'){
        names[index] = "kathi"
    }
});

console.log(names)


movies = new Array("audi","honda","kia");
age = new Array(12,22,43);
mixedItems = new Array(movies,age,["Ram",22,["1","2"]])

console.log(mixedItems)