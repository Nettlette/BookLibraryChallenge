const sequelize = require("../config/connection");
const {
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
} = require("../models");

const userData = require("./userData.json");
const bookData = require("./bookData.json");
const authorData = require("./authorData.json");
const seriesData = require("./seriesData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });
  // userData.forEach((user) => {
  //   console.log(user.firstName);
  //   console.log(user.lastName);
  //   console.log(user.email);
  //   console.log(user.password);
  //   User.create({
  //     firstname: user.firstName,
  //     lastname: user.lastName,
  //     email: user.email,
  //     password: user.password
  //   });
  // });

  // Create books
  for (const b of bookData) {
    await Book.create({
      ...b
    });
  }

  // Create authors
  for (const author of authorData) {
    await Author.create({
      ...author
    });
  }

  // Match author to book
  Book.findAll({
    where: {
      title: "The Honor of the Queen"
    }
  }).then(book => {
    Author.findAll({
      where: {
        firstname: "David"
      }
    }).then(author => {
      BookAuthor.create({
        bookid: book[0].dataValues.id,
        authorid: author[0].dataValues.id
      });
    });
  });
  

  thisbook = await Book.findAll({
    where: {
      title: "This Plot is Bananas"
    }
  });
  thisauthor = await Author.findAll({
    where: {
      firstname: "J.P."
    }
  });
  BookAuthor.create({
    bookid: thisbook[0].dataValues.id,
    authorid: thisauthor[0].dataValues.id
  });

  thisbook = await Book.findAll({
    where: {
      title: "Iron Dragoon"
    }
  });
  Author.findAll({
    where: {
      firstname: "Richard"
    }
  });
  BookAuthor.create({
    bookid: thisbook[0].dataValues.id,
    authorid: thisauthor[0].dataValues.id
  });

  // Create series
  for (const series of seriesData) {
    await Series.create({
      ...series
    });
  }

  // Match book to series
  await Series.findOne({
    where: {
      name: "Honor Harrington"
    }
  }).then(series => {
    console.log("Series: ", series.dataValues);
    Book.update(
      {
        seriesid: series.dataValues.id
      },
      {
        where: {
          title: "The Honor of the Queen"
        }
      }).then(function (result) {
        console.log(result);
      });
  });
  await Series.findOne({
    where: {
      name: "This Trilogy is Broken"
    }
  }).then(series => {
    console.log("Series: ", series.dataValues);
    Book.update(
      {
        seriesid: series.dataValues.id  
      },
      {
        where: {
          title: "This Plot is Bananas"
        }
      }
    ).then(function(result) {
      console.log(result);
    });
  });
  await Series.findOne({
    where: {
      name: "Iron Hearts"
    }
  }).then(series => {
    console.log("Series: ", series.dataValues);
    Book.update(
      {
        seriesid: series.dataValues.id
      },
      {
        where: {
          title: "Iron Dragoon"
        }
      }
    ).then(function(result) {
      console.log(result);
    });
  });
  thisbook = await Book.findAll();
  console.log(thisbook);


  process.exit(0);
};

seedDatabase();