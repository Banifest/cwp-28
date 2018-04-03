const sequelize = require('sequelize');

class User extends require('./crud')
{
    constructor()
    {
        super(new (require('../services/user'))());

        this.tweetReadAll = async (req, res) =>
        {
            let answ = await this.service.tweetReadAll(req.params.userId);
            res.json(answ);
        };
        this.tweetRead = async (req, res) =>
        {
            let answ = await this.service.tweetRead(req.params.userId, req.params.tweetId);
            res.json(answ);
        };
        this.tweetParamRead =async (req, res) =>
        {
            res.json(await this.service.tweetReadByOption(req.body));
        };

        this.tweetCreate = async (req, res) =>
        {
            res.json(await this.service.tweetCreate(req.body, req.params.userId));
        };

        this.tweetUpdate = async (req, res) =>
        {
            let id = req.body.id;
            delete req.body.id;
            res.json(await this.service.tweetUpdate( req.params.userId, req.params.tweetId, req.body));
        };

        this.tweetDelete = async (req, res) =>
        {
            res.json(await this.service.tweetDelete(req.params.userId, req.params.tweetId));
        };

        this.routers['/:userId/tweets/']=
        [
            { method: 'get', cb: this.tweetReadAll },
            { method: 'post', cb: this.tweetCreate }
        ];
        this.routers[':userId/tweets/:tweetId'] =
        [
            { method: 'get', cb: this.tweetRead },
            { method: 'put', cb: this.tweetUpdate },
            { method: 'delete', cb: this.tweetDelete }
        ];

        this.registerRouters();
    }
}

module.exports = (settings)=>
{
    return (new User()).router;
};