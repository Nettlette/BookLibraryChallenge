const router = require('express').Router();
const { getAllBooks, addNewBook, getBook, searchBook, deleteBook, updateBook } = require('../../controllers/api/bookController');

// The `/api/books` endpoint

router.route('/').get(getAllBooks).post(addNewBook).get(searchBook);

router.route('/:id').get(getBook).put(updateBook).delete(deleteBook);

router.route('/search').post(searchBook);

module.exports = router;
