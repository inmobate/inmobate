const{Property}=require('../db.js')
const {data} = require('./data')


const property = async () => {
  const properties = await Property.findAll()
  if(properties.length <= 0){
    const info = data.map((e)=>{
      return {
        descrition : e.detail,
          price : e.price,
          bathrooms : e.banos,
          city : e.city,
          address : e.direccion,
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