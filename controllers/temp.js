const axios =require('axios');


exports.getTemp=(req,res)=>{
    const city=req.params.place;
   // console.log(city);
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8f297c72696fd8f262c9c3374ea2b17b`).then(resp=>{
      	  res.json(resp.data);
      }).catch(err=>{
      	console.log(err.message);

 
      })
    }