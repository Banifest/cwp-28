const sequelize = require('sequelize');

class Like extends require('./crud')
{
    constructor()
    {
        super(new (require('../services/like'))());

        this.likeCreate = async (req, res) =>
        {
            req.body['authorId'] = req.params.userId;
            req.body['tweetId'] = req.params.tweetId;
            res.json(await this.service.likeCreate(req.body));
        };

        this.likeDelete = async (req, res) =>
        {
            req.body['authorId'] = req.params.userId;
            req.body['tweetId'] = req.params.tweetId;
            res.json(await this.service.likeDelete(req.body));
        };

        this.routers = {
            '/users/:userId/tweets/:tweetId':
            [
                { method: 'post', cb: this.likeCreate },
                { method: 'delete', cb: this.likeDelete }
            ],

        };
        this.registerRouters();
    }
}

module.exports = (settings)=>
{
    return (new Like()).router;
};