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
const detailData = require("./detailData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const u of userData) {
    await User.create({
      firstName: u.firstName,
      lastName: u.lastName,
      email: u.email,
      password: u.password
    });
  }

  const details = [];
  // Create lookups
  for (const l of detailData) {
    details.push(
      await Lookup.create({
        ...l
      }));
  }
  console.log(details);
  // Create books
  for (const b of bookData) {
    const series = await Series.create({
      ...b.series
    });
    console.log(series.id);
    const book = await Book.create({
      title: b.title,
      originalPublishedDate: b.originalPublishedDate,
      seriesorder: b.seriesorder,
      seriesid: series.id
    });
    const author = await Author.create({
      ...b.author
    });
    const bookauthor = await BookAuthor.create({
      bookid: book.id,
      authorid: author.id
    });
    const edition = await Edition.create({
      bookid: book.id,
      published_date: b.edition.published_date,
      audiolength: b.edition.audiolength
    });
    const bookread = await BooksRead.create({
      editionid: edition.id,
      userid: b.bookread.userid,
      startDate: b.bookread.startdate,
      endDate: b.bookread.enddate
    });
    console.log(b.details?.length);
    for (let i=0; i < b.details?.length; i++) {
      let d = b.details[i];
      const dd = details.find(x => x.class == d.class && x.name == d.name);
      console.log(dd);
      await BookDetail.create({
        bookid: book.id,
        detailid: details.find(x => x.class == d.class && x.name == d.name).id
      })
    }
  }


  process.exit(0);
};

seedDatabase();