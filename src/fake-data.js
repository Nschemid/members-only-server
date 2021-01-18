const GROUP_ID_1 = '1234';
const GROUP_ID_2 = '2345';
const GROUP_ID_3 = '3456';

const USER_ID_1 = '14PuszfU3Xg74Zt9fhSOrhgnyzY2';
const USER_ID_2 = 'GY41GygR8ZMhGjZADDc5Siheox93';

module.exports.groups = [{
    id: GROUP_ID_1,
    name: 'The Cool People Group',
    ownerId: USER_ID_1,
    members: [USER_ID_1],
}, {
    id: GROUP_ID_2,
    name: 'Programmers Unite',
    ownerId: USER_ID_2,
    members: [USER_ID_2, USER_ID_1],
}, {
    id: GROUP_ID_2,
    name: 'DIYers Group',
    ownerId: USER_ID_2,
    members: [USER_ID_2],
}];

module.exports.requests = [{
    id: '234',
    userId: USER_ID_1,
    groupId: GROUP_ID_3,
}, {
    id: '345',
    userId: USER_ID_2,
    groupId: GROUP_ID_1,
}];

module.exports.messages = [{
    userId: USER_ID_1,
    groupId: GROUP_ID_1,
    text: 'Hello everyone!'
},{
    userId: USER_ID_2,
    groupId: GROUP_ID_2,
    text: 'Good morning programmers, let\'s write some code',
}, {
    userId: USER_ID_1,
    groupId: GROUP_ID_2,
    text: 'Yes indeed, let\'s.',
},{
    userId: USER_ID_2,
    groupId: GROUP_ID_3,
    text: 'Only ten?',
}];

module.exports.users = [{
    id: USER_ID_1,
    email: 'nschemid@hotmail.com',
    fullName: 'Natascha',
}, {
    id: USER_ID_2,
    email: 'jsmith@gmail.com',
    fullName: 'John Smith',
}];