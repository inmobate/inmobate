const{Property}=require('../db.js')
const {data} = require('./data')


const property = async () => {
  const properties = await Property.findAll()
  if(properties.length <= 0){
    const info = data.map((e)=>{
      return {
<<<<<<< HEAD
        descrition : e.detail,
          price : e.price,
          bathrooms : e.banos,
          city : e.city,
          address : e.direccion,
=======
          id : e.id,
          description : e.detail,
          price : e.price,
          bathrooms : e.banos,
          city : e.city,
          garage : e.garage,
          address : e.direccion,
          wifi : e.wifi,
>>>>>>> c87b0e03dc41282d926702868a70d234c9c6a5ec
          room : e.habitacion,
          title : e.title,
          area : e.area,
          picture : e.picture.map((el)=> el)}
  })
    await Property.bulkCreate(info)
    return info 
  }
  return properties
}

module.exports = {
    property
}