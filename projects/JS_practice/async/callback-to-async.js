'use strict';

// -----------------------------------------------------------------
// Callback hell to Async & await
// -----------------------------------------------------------------
class UserStorage {
    async loginUser(id, password){
        setTimeout(()=> {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    // 원래는 한번에 받아오는 것이 맞지만, 따로 받아와야하는 백엔드로 가정
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

// 1) id, pw
// 2) login
// 3) roles
// 4) user object 출력

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
