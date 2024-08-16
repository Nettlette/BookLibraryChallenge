const router = require('express').Router();
const { getAllBooks, addNewBook, getBook, deleteBook, updateBook } = require('../../controllers/api/bookController');

// The `/api/books` endpoint

router.route('/').get(getAllBooks).post(addNewBook);

router.route('/:id').get(getBook).put(updateBook).delete(deleteBook);

module.exports = router;
