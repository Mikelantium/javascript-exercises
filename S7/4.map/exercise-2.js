const users = [{ id: 1, name: 'Abel' }, { id: 2, name: 'Julia' }, { id: 3, name: 'Pedro' }, { id: 4, name: 'Amanda' }];

const newUsersName = users.map(user => user.name[0] === 'A' ? 'Anacleto' : user.name);
// const newUsersName = users.map(user => { return user.name[0] === 'A' ? 'Anacleto' : user.name});

console.log(newUsersName);
