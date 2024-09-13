const router = require("express").Router();
const {
  Book,
  User,
  BooksRead,
  Author,
  Lookup,
  Series,
  Edition
} = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    //req.session.userId = 3;
    console.log(req.session);
    if (req.session.userId == undefined) {
      // Get all blogPosts and JOIN with user data and comment data
      const books = await Book.findAll({
        include: [
          {
            model: Author,
            attributes: ["firstname", "lastname"]
          },
          {
            model: Lookup,
            attributes: [["name", "detailname"], "class"]
          },
          {
            model: Series,
            attributes: [["name", "seriesname"]]
          }
        ],
        limit: 20,
      });
      //console.log(books);
      // Serialize data so the template can read it
      const bookDisplay = books.map((book) =>
        book.get({ plain: true, nest: true })
      );
      //console.log(bookDisplay);

      const booksread = await BooksRead.findAll({
        order: [['end_date', 'DESC']],
        attributes: ['endDate', 'startDate'],
        include: [
          {
            model: Edition,
            attributes: ['bookid', 'publisher', 'language', 'numpages', 'audiolength'],
            include: [
              {
                model: Book,
                include: [
                  {
                    model: Author,
                    attributes: ["firstname", "lastname"]
                  },
                  {
                    model: Series,
                    attributes: [["name", "seriesname"]]
                  },
                  {
                    model: Lookup,
                    attributes: [['name', 'detail'], 'class']
                  }
                ]
              },
              {
                model: Author,
                attributes: ["firstname", "lastname"]
              }
            ]
          },
          {
            model: User,
            attributes: ['firstName', 'lastName'],
          },
        ]
      });
      // Serialize data so the template can read it
      const bookreadDisplay = booksread.map((book) =>
        book.get({ plain: true, nest: true })
      );
      console.log(bookreadDisplay);
      // console.log(bookreadDisplay[0].edition.book);
      // console.log(req);
      // Pass serialized data and session flag into template
      res.render("homepage", {
        bookDisplay,
        bookreadDisplay
      });
    } else {
      // Get all blogPosts and JOIN with user data and comment data
    const books = await Book.findAll({
      include: [
        {
          model: Author,
          attributes: ["firstname", "lastname"]
        },
        {
          model: Lookup,
          attributes: [["name", "detailname"], "class"]
        },
        {
          model: Series,
          attributes: [["name", "seriesname"]]
        }
      ],
      limit: 20,
    });
    //console.log(books);
    // Serialize data so the template can read it
    const bookDisplay = books.map((book) =>
      book.get({ plain: true, nest: true })
    );
    //console.log(bookDisplay);

    const booksread = await BooksRead.findAll({
      where: { userid: req.session.userId },
      order: [['end_date', 'DESC']],
      attributes: ['endDate', 'startDate'],
      limit: 1,
      include: [
        {
          model: Edition,
          attributes: ['bookid', 'publisher', 'language', 'numpages', 'audiolength'],
          include: [
            {
              model: Book,
              include: [
                {
                  model: Author,
                  attributes: ["firstname", "lastname"]
                },
                {
                  model: Series,
                  attributes: [["name", "seriesname"]]
                },
                {
                  model: Lookup,
                  attributes: [['name', 'detail'], 'class']
                }
              ]
            },
            {
              model: Author,
              attributes: ["firstname", "lastname"]
            }
          ]
        },
        {
          model: User,
          attributes: ['firstName', 'lastName'],
        },
      ]
    });
    // Serialize data so the template can read it
    const bookreadDisplay = booksread.map((book) =>
      book.get({ plain: true, nest: true })
    );
    
    // Pass serialized data and session flag into template
    res.render("homepage", {
      bookDisplay,
      bookreadDisplay,
      logged_in: req.session.logged_in,
      userId: req.session.user_id,
      username: req.session.username
    });
    }

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Route set up to find single blog post and render blogPost page
router.get("/blogPost/:id", withAuth, async (req, res) => {
  try {
    const blogPostData = await BlogPost.findByPk(req.params.id, {
      // Join user data and comment data with blog post data
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    const blogPost = blogPostData.get({ plain: true });
    console.log(blogPost);

    res.render("blogPost", {
      ...blogPost,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    res.redirect("/login");
  }
});

// route to allow logged in user access to the dashboard page
// Use withAuth middleware to prevent access to route
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      // Join user blog post and comment data with user data
      include: [
        {
          model: BlogPost,
          include: [User],
        },
        {
          model: Comment,
        },
      ],
    });

    const user = userData.get({ plain: true });
    console.log(user)

    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// NEW POST PAGE: Renders 'create.handlebars'; redirects to /login if not logged in
router.get("/create", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.render("create", {
        logged_in: req.session.logged_in,
        userId: req.session.user_id,
      });
      return;
    } else {
      res.redirect("/login");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Route set up to be able to edit an existing blog post
router.get("/create/:id", async (req, res) => {
  try {
    const blogPostData = await BlogPost.findByPk(req.params.id, {
      // Join user data and comment data with blog post data
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    const blogPost = blogPostData.get({ plain: true });
    console.log(blogPost);

    if (req.session.logged_in) {
      res.render("edit", {
        ...blogPost,
        logged_in: req.session.logged_in,
        userId: req.session.user_id,
      });
      return;
    } else {
      res.redirect("/login");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.all("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

router.get("/books", (req, res) => {
  res.render("bookSearch");
});

// Export
module.exports = router;