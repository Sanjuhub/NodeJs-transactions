const {pending_transactions,completed_transactions} = require('./dbData')

function transactionService(query){
    let result = []
    if (query.status === "pending") {
        result = pending_transactions.filter((elm) => {
          if (
            elm.status === query.status &&
            query.type === elm.type &&
            query.currency === elm.currency
          ) {
            return true;
          }
        });
      } else {
        result = completed_transactions.filter((elm) => {
          if (
            elm.status === query.status &&
            query.type === elm.type &&
            query.currency === elm.currency
          ) {
            return true;
          }
        });
      }

      return result
}

module.exports = {transactionService}