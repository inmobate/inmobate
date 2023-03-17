const{Property}=require('../db.js')
const {data} = require('./data')


const property = async () => {
  const properties = await Property.findAll()
  if(properties.length <= 0){
    const info = data.map((e)=>{
      return {
          price : e.price,
          bathrooms : e.banos,
          description : e.detail,
          city : e.city,
          address : e.direccion,
          pictures : e.picture.map((e)=> e),
          room : e.habitacion,
          title : e.title,
          area : e.area,
        }
  })
    await Property.bulkCreate(info)
    return info 
  }
  return properties
}

module.exports = {
    property
}