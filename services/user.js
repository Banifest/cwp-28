const db = require('../index');
const validators = require('./validators');

module.exports = class User extends require('./crud')
{
    constructor()
    {
        super(db.user, 'user');

        this.tweetReadAll = async (userId) =>
        {
            return await db.tweet.find({where: {authorId: userId}});
        };
        this.tweetRead = async (userId, tId) =>
        {
            if (!isNaN(id) && (await db.tweet.findById(Number(userId))) != null)
            {
                return await (await db.tweet.findOne({where :
                        {authorId: Number(userId), id: tId}})).get({plain: true});
            }
            else
            {
                throw this.errors.notFound;
            }
        };
        this.tweetParamRead = async (userId, tId) =>
        {
            res.json(await this.service.readByOption(req.body));
        };

        this.tweetCreate = async (data, userId) =>
        {
            data['authorId'] = userId;
            if ((await validators.check('tweet', data)).error)
            {
                throw this.errors.wrongCredentials;
            }
            else
            {
                return await db.tweet.create(data);
            }
        };
        this.tweetUpdate = async (userId, tId, data) =>
        {
            if ((await validators.check('tweet', data)).error)
            {
                throw errors.invalidId;
            }
            else
            {
                await db.tweet.update(data, {where: {id: tId}});
                return this.readById(id);
            }
        };
        this.likeCreate = async (userId, tId)=>
        {
            return await db.like.create({authorId: userId, tweetId: tId});
        };

        this.likeDelete = async (data)=>
        {
            return await db.like.destroy({where: {authorId: data.authorId, tweetId: data.tweetId}});
        };
        this.tweetDelete = async (userId, tId) =>
        {
            return await db.tweet.destroy({where: {authorId: userId, tweetId: tId}});
        };
    }
};