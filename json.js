const user ={id:12, name:'Nishat', color:'Black'};
// console.log(user);

// const stringified = JSON.stringify(user);
// console.log(stringified);

const shop ={
    name:'Nishat',
    address: 'station road',
    product: ['mobile, laptop'],
    isExpensive : true
}
const stringified =JSON.stringify(shop);
console.log(stringified);
const unWrapJson =JSON.parse(stringified);
console.log(unWrapJson)