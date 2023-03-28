const { Property } = require("../../db");
const { servicios } = require("../../controller/servicios.js");
const { property_types } = require("../../controller/tipos_de_propiedades.js");

const newPostProperty = async (
  description,
  area,
  price,
  bathrooms,
  floor,
  city,
  province,
  address,
  postal_code,
  room,
  title,
  pictures,
  type,
  services,
  id_autor
) => {
  try {
    if (
      !description ||
      !area ||
      !price ||
      !bathrooms ||
      !floor ||
      !city ||
      !province ||
      !address ||
      !postal_code ||
      !room ||
      !title ||
      !pictures ||
      !type ||
      !services
    ) {
      throw new Error("Incomplete information");
    } else {
      const newarray = [];
      servicios
        .filter((servicio, index) => {
          return services.includes(index);
        })
        .map((servicio) => {
          newarray.push([servicio.servicio, servicio.icono]);
        });

      const newtype = [];
      property_types
        .filter((prop) => {
          return prop.id == type;
        })
        .map((type) => newtype.push([type.type, type.icono]));

      const property = await Property.create({
        description,
        area,
        price,
        bathrooms,
        floor,
        city,
        province,
        address,
        postal_code,
        room,
        title,
        pictures,
        services: newarray,
        type: newtype,
        autor_propId: id_autor,
      });
      return property;
    }
  } catch (error) {
    return { error: error.message };
  }
};
module.exports = newPostProperty;
