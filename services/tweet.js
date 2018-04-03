const db = require('../index');
const moment = require('moment');

module.exports = class Team extends require('./crud')
{
    constructor()
    {
        super(db.tweet, 'tweet');

        this.searchSetting = {
            limit: 10,
            page: 1,
            offset: 0,
            order: 'desc',
            orderField: 'publishedOn',
        };

        this.readAll = async(searchSetting = this.searchSetting) =>
        {

            let answ = await (await db.tweet.findAll({
                offset: searchSetting.offset,
                order: [[searchSetting.orderField, searchSetting.order.toUpperCase()]],
                raw: true,
            })).filter((item, i, arr) => // фильтрация по заданому диапозону в limit
                i >= searchSetting.limit * (searchSetting.page - 1)
                && i <= searchSetting.limit * searchSetting.page - 1
            );

            searchSetting['count'] = (await db.tweet.findAndCountAll()).count;
            searchSetting['pages'] = Math.round(searchSetting['count'] / searchSetting.limit) + 1;
            for(let iter = 0; iter<answ.length; iter++)
            {
                answ[iter]['links'] = [];
                answ[iter].links.push({rel: "self", href: `http://localhost:3000/api/tweeets/${answ[iter].id}`});
                if(answ[iter - 1])
                {
                    answ[iter].links.push({rel: "prev", href: `http://localhost:3000/api/tweeets/${answ[iter - 1].id}`});
                }
                else
                {
                    answ[iter].links.push({rel: "prev", href: null});
                }
                if(answ[iter + 1])
                {
                    answ[iter].links.push({rel: "next", href: `http://localhost:3000/api/tweeets/${answ[iter + 1].id}`});
                }
                else
                {
                    answ[iter].links.push({rel: "next", href: null});
                }
            }
            return {
                tweets: answ,
                meta: searchSetting
            };
        }
    }
};