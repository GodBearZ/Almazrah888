const { token } = require('morgan');
const Token = require('../Models/token')

//Token
exports.listToken= async(req,res) => {
    try{
        //code
        const tokensin = await Token.find({}).exec();
        //res.send('Hello every scheduler \n')
        res.send(tokensin)
    }catch(err){
        //error
        console.log(err)
        res.status(500).send('Server ERROR')
    }
}
exports.findTokenOne = async(req,res) => {
    try{
     const id = req.params.id
     const tokensin = await Token.findOne({_id:id}).exec();
     //res.send('Hello someone scheduler\n')
     res.send(tokensin)
    } catch(err)
    {
         console.log(err)
         res.status(500).send('Server ERROR')
    }
 }
 exports.createToken = async(req,res) => {
    try{
        console.log("create from backend",req.body)
        const tokenin = await Token(req.body).save()

         res.send('Hi time to create')
    } catch(err)
    {
         console.log(err)
         res.status(500).send('Server ERROR')
    }
 }