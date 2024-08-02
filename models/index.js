const User = require('./user');
const BooksRead = require('./booksread');
const ChallengeSubscription = require('./challengesubscription');

User.hasMany(BooksRead, {
    foreignKey: "userid",
    onDelete: "CASCADE",
});

BooksRead.belongsTo(User, {
    foreignKey: "userid",
});

User.hasMany(ChallengeSubscription, {
    foreignKey: "userid",
    onDelete: "CASCADE",
});

// ChallengeSubscription.belongsTo(User, {
//     foreignKey: "user",
// });

// ChallengeSubscription.belongsTo(BooksRead, {
//     foreignKey: "BooksRead_id",
//     onDelete: "CASCADE",
// });

// BooksRead.hasMany(ChallengeSubscription, {
//     foreignKey: "BooksRead_id",
//     onDelete: "CASCADE",
// });

module.exports = { User };