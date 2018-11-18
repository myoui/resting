const Article = require("../models/Article")

exports.listAllArticles = (req, res) => {
    Article.find({}, (err, article) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(200).json(article)
    })
}

exports.deleteAllArticles = (req, res) => {
    Article.deleteMany({}, (err, article) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json({message: `All articles successfully deleted.`})
    })
}

exports.createNewArticle = (req, res) => {
    let newArticle = new Article(req.body);
    newArticle.save((err, article) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(201).json(article)
    })
}

exports.getArticle = (req, res) => {
    Article.findOne({_id: req.params.articleid}, (err, article) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(article);
    });
}
exports.deleteArticle = (req, res) => {
    Article.deleteOne({_id: req.params.userid}, (err, article) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json({message: `Article ID:${article._id} successfully deleted.`})
    })
}