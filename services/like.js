const db = require('../index');

module.exports = class WorkPeriod extends require('./crud')
{
    constructor()
    {
        super(db.like, 'like');

        this.likeCreate = async (data)=>
        {
            if(await  db.like.findOne({where: data}))
            {
                throw this.errors.invalidId;
            }
            return await db.like.create(data);
        };

        this.likeDelete = async (data)=>
        {
            return await db.like.destroy({where: data});
        }
    }


};