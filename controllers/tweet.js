const sequelize = require('sequelize');

class Team extends require('./crud')
{
    constructor()
    {
        super(new (require('../services/tweet'))());
        this.searchSetting = {
            limit: 10,
            page: 1,
            offset : 0,
            order: 'desc',
            orderField: 'publishedOn',
        };
        this.readAll = async (req, res) =>
        {
            let sS = this.searchSetting;
            sS['limit'] = req.query.limit ? req.query.limit : sS['limit'];
            sS['offset'] = req.query.offset ? req.query.offset : sS['offset'];
            sS['page'] = req.query.page ? req.query.page : sS['page'];
            sS['orderedField'] = req.query.orderField ? req.query.orderField : sS['orderedField'];
            sS['order'] = req.query.order ? req.query.order : sS['order'];
            res.json(await this.service.readAll(sS));
        };
        this.routers['/'] =
        [
            { method: 'get', cb: this.readAll },
        ];


        this.registerRouters();
    }
}

module.exports = (settings)=>
{
    return (new Team()).router;
};