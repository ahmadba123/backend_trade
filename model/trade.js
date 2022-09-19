const db = require("../database_Connection/config");

class Trade {
    constructor(Deal, Login, Action, Entry, Time, Symbol, Price, Profit, Volume) {
        this.Deal = Deal;
        this.Login = Login;
        this.Action = Action;
        this.Entry = Entry;
        this.Time = Time;
        this.Symbol = Symbol;
        this.Price = Price;
        this.Profit = Profit;
        this.Volume = Volume;
    }

    static async findAll(limit, offset) {


        let sql = "SELECT * FROM mt5_deals LIMIT ?, ?";
        limit = Number(limit) >= 0 ? Number(limit) : 10;
        offset = Number(offset) >= 0 ? Number(offset) : 0;
        let results = (await db.query(sql, [offset, limit])).values();
        return results;
    }
    static async Count() {

        
        let sql = "SELECT  COUNT(Deal) FROM mt5_deals  ";
        
        let results = (await db.query(sql));
        // console.log(await db.query(sql))
        return results;
    }
    // static async findAll() {
    //     let page = req.query.page || 1;
    //     let limit = req.query.limit || 12;
    //     let skip = (page - 1) * limit;
    //     let total = await Dish.countDocuments(query);
    // let pages = Math.ceil(total / limit);
    // const response = await Dish.find(query)
    // .populate("cook")
    // .skip(skip)
    // .limit(limit)
    // .sort(sort);
    

    // }
}

module.exports = Trade;
