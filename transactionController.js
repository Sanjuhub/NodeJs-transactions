const { transactionService } = require("./transactionService");


function getTransactions(req, res) {
  const { type, status, currency } = req.query;
  if (!status) {
    res
      .status(422)
      .send(
        "status is a compulsory parameter. It takes values as [pending, settled, declined, reversed]"
      );
  }

  let result = transactionService(req.query);
  

  return res.send({ total: result.length, result });
}

module.exports = { getTransactions };
