var user={};
user.name='John';
user.surname='Mike';
user.name='Peter';
delete user.name;
console.log(user);

var fruit = {
apple: 20,
pear: 20,
peach: 10
};
// write your code here...
var valueList=Object.values(fruit);
var result=0;
for(var i=0;i<valueList.length;i++){
    result+=valueList[i];
}
console.log(result);
