const fetch = require('node-fetch');
//const Re = require('@reactivex/rxjs');

// function fetchUsers(res) {
//     Re.Observable.fromPromise(fetch('http://jsonplaceholder.typicode.com/users/')).subscribe(function(response) {
//         Re.Observable.fromPromise(response.json()).subscribe(function(data) {res.render('users', {users:data})});
//     });    
// }

const observable = {
    next: function(value){console.log(value)},
    error:function(){},
    complete: function(){},
}
function myObservable(observable){
    // var  myData = fetch('http://jsonplaceholder.typicode.com/users/');
    // var data = myData.json();
    observable.next(fetch('http://jsonplaceholder.typicode.com/users/'));
} 
function fetchUsers(res) {
    myObservable(observable);
  //  res.render('users', {users});
}
module.exports = fetchUsers;
