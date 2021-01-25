const express = require('express')

const controllers = require('./route_controllers/controllers')

const router = express.Router()

router.post('/new_purchase',controllers.new_purchase)
router.get('/list_all', controllers.list_all)
router.delete('/delete_all', controllers.delete_all)
router.delete('/delete_purchase/:id', controllers.delete_purchase)
router.get('/list_by_date/:month', controllers.list_by_month)
router.get('/list_by_date/:month/:day', controllers.list_by_month_n_day)
router.get('/list_by_date', controllers.list_last_30)


module.exports = server => server.use(router)