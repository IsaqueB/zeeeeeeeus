const Purchase = require('../../models/purchases')

module.exports = { 
    new_purchase: async function(req, res){
        
        try{
            const purchase = await Purchase.create(req.body)
            return res.status(200).send()
        }
        catch(err){
            return res.status(400).send(err)
        }
    },
    list_all: async function (req,res){
        let purchases = []
        try{
            purchases = await Purchase.find({}).sort({createdAt: 'desc'})
            return res.send(purchases)
        } catch (err){
            return res.status(400).send(err)
        }
    },
    delete_all: async function (req,res){
        try{
            Purchase.collection.drop()
            return res.status(200).send("Deleted all purchases")
        }
        catch(err){
            return res.status(400).send(err)
        }
    },
    delete_purchase: async function (req,res){
        try{
            
            let deleted = await Purchase.deleteOne({_id: req.params.id})
            return res.status(200).send("Purchases deleted")
        }
        catch(err){
            return res.status(400).send(err)
        }
    },
    list_by_month: async function (req,res){
        try{
            let purchases = []
            let month = req.params.month
            let last_day = new Date(2020,month+1, 0) //Pra calculo do último dia do mês
            let initial_date = new Date(2020,month,01)
            let end_date = new Date(2020,month,last_day.getDate())
            purchases = await Purchase.find({createdAt:{ $gte: initial_date, $lte: end_date }}).sort({createdAt: 'desc'})
            return res.status(200).send(purchases)
    
        }catch(err){
            return res.status(400).send(err)
        }
    },
    list_by_month_n_day: async function (req,res){
        try{
            let purchases = []
            let day = req.params.day
            let month = req.params.month
            initial_date = new Date(2020,month,day,0,0,0,0)
            end_date = new Date(2020,month,day,23,59,59,0)
            purchases = await Purchase.find({createdAt:{$gte: initial_date, $lte: end_date }}).sort({createdAt: 'desc'})
            return res.status(200).send(purchases)
    
        }catch(err){
            return res.status(400).send(err)
        }
    },
    list_last_30: async function (req,res){
        try{
            let purchases = []
            let initial_date = new Date()
            initial_date.setDate(initial_date.getDate()-30)
            let end_date = new Date()
            purchases = await Purchase.find({createdAt:{$gte: initial_date, $lte: end_date}}).sort({createdAt: 'desc'})
            return res.status(200).send(purchases)
    
        }catch(err){
            return res.status(400).send(err)
        }
    },
}