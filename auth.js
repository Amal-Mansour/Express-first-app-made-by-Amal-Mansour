//Middleware time and date of work 

const authentification = (function(req,res, next){
    const date =new Date();
    if((date.getDay()=== 0 || date.getDay() === 6 || (date.getHours() >17))){
      res.end('Return in working time , this page is closed')
    }
      next()
})

module.exports= authentification