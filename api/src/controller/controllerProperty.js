const { Property, Service, Type } = require("../db.js");
const { data } = require("./data");
const { servicios } = require("./servicios");

const property = async () => {
  const properties = await Property.findAll();
  if (properties.length <= 0) {
    const info = data.map((e) => {
      const newarray = [];
      servicios
        .filter((servicio, index) => {
          return e.services.includes(index);
        })
        .map((servicio) => {
          newarray.push([servicio.servicio, servicio.icono]);
        });

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
        services: newarray,
      };
    });
    await Property.bulkCreate(info);
    return info;
  }
  return properties;
};

const propertyById = async (id) => {
  let propy = await Property.findOne({ where: { id: id } });

  const propiedad = {
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
    services: propy.services,
  };
  return propiedad;
};

module.exports = {
  property,
  propertyById,
};
