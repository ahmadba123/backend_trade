const Trade = require("../model/trade");
const db = require("../database_Connection/config");

//this function to get data for trade  from data base
exports.getAllTrade = async (req, res, next) => {
  try {
    const [Trades, _] = await Trade.findAll(req.query.limit, req.query.offset, req.query.query);
    const count = await Trade.Count()
    res.status(200).send({ count: Trades.length, Trades, countTrade: count[0] });

  } catch (error) {
    next(error);
  }
};
//this function to add data for trade from data base
exports.createNewTrade = async (req, res, next) => {
  try {
    let dataCreated = new Date();
    let yyyy = dataCreated.getFullYear();
    let mm = dataCreated.getMonth() + 1;
    let dd = dataCreated.getDate();
    let hh = dataCreated.getHours();
    let mi = dataCreated.getMinutes();
    let ss = dataCreated.getSeconds();
    let createdAtDate = `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}`;
    let Deal = req.body.Deal;
    let Login = req.body.Login;
    let Action = req.body.Action;
    let Entry = req.body.Entry;
    let Time = createdAtDate;
    let Symbol = req.body.Symbol;
    let Price = req.body.Price;
    let Profit = req.body.Profit;
    let Volume = req.body.Volume;

    let myQuery = `INSERT INTO mt5_deals (Deal,Login,Action,Entry,Time,Symbol,Price,Profit,Volume)
    VALUES('${Deal}','${Login}','${Action}','${Entry}','${Time}','${Symbol}','${Price}','${Profit}','${Volume}')`;
    db.execute(myQuery).then(() =>
      res.status(200).json({ success: true, message: "Trade Added !" })
    );
  }

  catch (error) {
    next(error);
  }
};


