const Author = require('./author');
const AuthorDetail = require('./authordetail');
const Book = require('./book');
const BookAuthor = require('./bookauthor');
const BookDetail = require('./bookdetail');
const BooksRead = require('./booksread');
const Challenge = require('./challenge');
const ChallengeElement = require('./challengeelement');
const ChallengeSubscription = require('./challengesubscription');
const CompletedElement = require('./completedelement');
const Edition = require('./edition');
const EditionAuthor = require('./editionauthor');
const Lookup = require('./lookup');
const Series = require('./series');
const User = require('./user');

User.hasOne(User, {
    foreignKey: "parent",
    onDelete: "CASCADE"
});

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

ChallengeSubscription.belongsTo(User, {
    foreignKey: "userid",
});

Book.hasMany(BookAuthor, {
    foreignKey: "bookid",
    onDelete: "CASCADE",
});

BookAuthor.belongsTo(Book, {
    foreignKey: "bookid"
});

Edition.hasMany(EditionAuthor, {
    foreignKey: "editionid",
    onDelete: "CASCADE",
});

EditionAuthor.belongsTo(Edition, {
    foreignKey: "editionid"
});

Book.hasOne(Series, {
    foreignKey: "seriesid",
    onDelete: "CASCADE",
});

Challenge.hasMany(ChallengeSubscription, {
    foreignKey: "challengeid",
    onDelete: "CASCADE",
});

ChallengeSubscription.belongsTo(Challenge, {
    foreignKey: "challengeid",
});

Author.hasMany(BookAuthor, {
    foreignKey: "authorid",
    onDelete: "CASCADE",
});

BookAuthor.belongsTo(Author, {
    foreignKey: "authorid",
});

Author.hasMany(EditionAuthor, {
    foreignKey: "authorid",
    onDelete: "CASCADE",
});

EditionAuthor.belongsTo(Author, {
    foreignKey: "authorid",
});

Lookup.hasMany(BookAuthor, {
    foreignKey: "noteid",
    onDelete: "CASCADE",
});

BookAuthor.belongsTo(Lookup, {
    foreignKey: "noteid",
});

Lookup.hasMany(EditionAuthor, {
    foreignKey: "noteid",
    onDelete: "CASCADE",
});

EditionAuthor.belongsTo(Lookup, {
    foreignKey: "noteid",
});

Lookup.hasMany(AuthorDetail, {
    foreignKey: "detailid",
    onDelete: "CASCADE",
});

AuthorDetail.belongsTo(Lookup, {
    foreignKey: "detailid",
});

Author.hasMany(AuthorDetail, {
    foreignKey: "authorid",
    onDelete: "CASCADE",
});

AuthorDetail.belongsTo(Author, {
    foreignKey: "authorid",
});

Book.hasMany(BookDetail, {
    foreignKey: "bookid",
    onDelete: "CASCADE",
});

BookDetail.belongsTo(Book, {
    foreignKey: "bookid",
});

Lookup.hasMany(BookDetail, {
    foreignKey: "detailid",
    onDelete: "CASCADE",
});

BookDetail.belongsTo(Lookup, {
    foreignKey: "detailid",
});

Edition.hasMany(BooksRead, {
    foreignKey: "editionid",
    onDelete: "CASCADE",
});

BooksRead.belongsTo(Edition, {
    foreignKey: "editionid",
});

Challenge.hasMany(ChallengeElement, {
    foreignKey: "challengeid",
    onDelete: "CASCADE",
});

ChallengeElement.belongsTo(Challenge, {
    foreignKey: "challengeid",
});

ChallengeSubscription.hasMany(CompletedElement, {
    foreignKey: "challengesubscriptionid",
    onDelete: "CASCADE",
});

CompletedElement.belongsTo(ChallengeSubscription, {
    foreignKey: "challengesubscriptionid",
});

ChallengeElement.hasMany(CompletedElement, {
    foreignKey: "challengeelementid",
    onDelete: "CASCADE",
});

CompletedElement.belongsTo(ChallengeElement, {
    foreignKey: "challengeelementid",
});

BooksRead.hasMany(CompletedElement, {
    foreignKey: "bookread",
    onDelete: "CASCADE",
});

CompletedElement.belongsTo(BooksRead, {
    foreignKey: "bookread",
});

Book.hasMany(Edition, {
    foreignKey: "bookid",
    onDelete: "CASCADE",
});

Edition.belongsTo(Book, {
    foreignKey: "bookid",
});

Lookup.hasMany(Edition, {
    foreignKey: "publisher",
    onDelete: "CASCADE",
});

Edition.belongsTo(Lookup, {
    foreignKey: "publisher",
});

Lookup.hasMany(Edition, {
    foreignKey: "language",
    onDelete: "CASCADE",
});

Edition.belongsTo(Lookup, {
    foreignKey: "language",
});

module.exports = {
    Author,
    AuthorDetail,
    Book,
    BookAuthor,
    BookDetail,
    BooksRead,
    Challenge,
    ChallengeElement,
    ChallengeSubscription,
    CompletedElement,
    Edition,
    EditionAuthor,
    Lookup,
    Series,
    User
};