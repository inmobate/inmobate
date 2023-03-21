const{Property,Service,Type}=require('../db.js')
const {data} = require('./data')


const property = async () => {
  const properties = await Property.findAll()
  if(properties.length <= 0){
    const info = data.map((e)=>{
      return {
          price : e.price,
          description : e.detail,
          bathrooms : e.banos,
          room : e.habitacion,
          floor: e.piso,
          title : e.title,
          area : e.area,
          city : e.ciudad,
          province:e.provincia,
          postal_code: e.codigo_postal,
          address : e.address,
          pictures : e.picture.map((e)=> e),
        }
  })
    await Property.bulkCreate(info)
    return info 
  }
  return properties
}


const propertyById = async (id) => {
  let propy = await Property.findOne({
    where:
    {id: id},
    include: {
      model: Type,
      model: Service,
    }
    // falta corregir el include de los modelos Service y Type no los esta incluyendo 
  });
  const propiedad ={
    id: propy.id,
    price: propy.price,
    description: propy.description,
    bathrooms: propy.bathrooms,
    room: propy.room,
    floor: propy.floor,
    title: propy.title,
    area: propy.area,
    country: propy.country,
    city: propy.city,
    province: propy.province,
    postal_code: propy.postal_code,
    address: propy.address,
    pictures: propy.pictures,
  }
  return propiedad
}

module.exports = {
    property,
    propertyById
}