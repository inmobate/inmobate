const{Property,Service,Type}=require('../db.js')
const {data} = require('./data')

const property = async () => {
 /*  const properties = await Property.findAll()
  if(properties.length <= 0){
    try{
      for(const prop in data){
        const property = await Property.create({
          description : prop.detail,
          area : prop.area,
          price : prop.price,
          bathrooms : prop.banos,
          floor: prop.piso,
          city : prop.ciudad,
          province:prop.provincia,
          address : prop.address,
          postal_code: prop.codigo_postal,
          room : prop.habitacion,
          title : prop.title,
          pictures : prop.picture
        });
        const types = await Type.findOne({where: {name: prop.type}});
        await property.setProperty(types);
      
          const services = await Service.findAll({ where: { name:services}});
          await property.addServicio(services);
        
      }
      console.log('se crearon correctamente')    
    }
    catch(error){
      console.error('Error al agregar las propiedades:', error);
    }
  } */
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