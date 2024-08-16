const router = require('express').Router();
const { Book, Series } = require('../../models');

// The `/api/books` endpoint

function getAllBooks(req, res) {
    Book.findAll({
        include: [
            {
                model: Series,
            },
        ],
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

function getBook(req, res) {
    Book.findOne({
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Series,
            },
        ],
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

function addNewBook(req, res) {
    Book.create({
        title: req.body.title,
        subtitle: req.body.subtitle,
        originalPublishedDate: req.body.originalPublishedDate,
        seriesid: req.body.seriesid
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

function updateBook(req, res) {
    Book.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

function deleteBook(req, res) {
    Book.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

module.exports = { getAllBooks, getBook, addNewBook, updateBook, deleteBook };
