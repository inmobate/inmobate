const{Property,Service,Type}=require('../db.js')
const {data} = require('./data')
const { type } = require("./tipos_de_propiedades");

const property = async () => {
  const properties = await Property.findAll()
  const name = type.map((x) => x.type)
  if(properties.length <= 0){
    const info = data.map((e)=> {
        return {
          price: e.price,
          description: e.detail,
          bathrooms: e.banos,
          room: e.habitacion,
          floor: e.piso,
          title: e.title,
          area: e.area,
          city: e.ciudad,
          province: e.provincia,
          postal_code: e.codigo_postal,
          address: e.address,
          pictures: e.picture.map((e) => e),
          name: name[Math.floor(Math.random() * (name.length - 0) + 0)]
        };
      })
      info.forEach(async(x)=>{
        await Property.create(x)
      })
  return info 
  }
  return properties
}

const propertyById = async (id) => {
  const properties = await Property.findOne({
    where: { id: id },
    include: [
      {
        model: Type,
        attributes: ["name", "icon"],
        through: { attributes: [] },
      },
      {
        model: Service,
        attributes: ["name", "icon"],
        through: { attributes: [] },
      },
    ],
  });
  return properties;
};

module.exports = {
    property,
    propertyById
}