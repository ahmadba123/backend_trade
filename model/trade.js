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
//this function to get and  divide data 10 record in one page from data base
    static async findAll(limit, offset) {
        let sql = "SELECT * FROM mt5_deals LIMIT ?, ?";
        limit = Number(limit) >= 0 ? Number(limit) : 10;
        offset = Number(offset) >= 0 ? Number(offset) : 0;
        let results = (await db.query(sql, [offset, limit])).values();
        return results;
    }
//this function count all data  from data base
    static async Count() {
        let sql = "SELECT  COUNT(Deal) FROM mt5_deals  ";

        let results = (await db.query(sql));
        // console.log(await db.query(sql))
        return results;
    }
}

module.exports = Trade;
