const fetch = require('node-fetch');
const Rx = require('@reactivex/rxjs');

// function fetchUsers(res) {
//     Rx.Observable.fromPromise(fetch('http://jsonplaceholder.typicode.com/users/')).subscribe(function(response) {
//         Rx.Observable.fromPromise(response.json()).subscribe(function(data) {res.render('users', {users:data})});
//     });    
// }

const observable = {
    next: function (response) {
        observable1.next(response.json());
    },
    error: function () { },
    complete: function () { },
}

const observable1 = {
    next: function (val) {
        return { users: val };
    },
    error: function () { },
    complete: function () { },
}

function myObservable(observable) {
    observable.next(fetch('http://jsonplaceholder.typicode.com/users/'));
}

function fetchUsers(res) {
    myObservable(observable);
    res.render('users', { users });
}
module.exports = fetchUsers;
