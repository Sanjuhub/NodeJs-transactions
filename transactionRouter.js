const { Router } = require('express')
const { getTransactions } = require('./transactionController')
const router = Router()


router.get('/admin/transactions', getTransactions)

module.exports = router