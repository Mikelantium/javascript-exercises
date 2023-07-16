const users = [{ id: 1, name: 'Abel' }, { id: 2, name: 'Julia' }, { id: 3, name: 'Pedro' }, { id: 4, name: 'Amanda' }];

const usersName = users.map(user => user.name);
// const usersName = users.map(user => {return user.name});

console.log(usersName);
