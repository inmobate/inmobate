const { Property } = require("../../db");

const updateProperty = async (
  id,
  description,
  area,
  price,
  bathrooms,
  floor,
  country,
  city,
  province,
  address,
  postal_code,
  room,
  title,
  pictures,
  type,
  service
) => {
  try {
    const findproperty = await Property.findByPk(id);
    if (!findproperty) throw new Error("Property not found");
    else {
      description
        ? await Property.update({ description: description })
        : findproperty.description;
      area ? await Property.update({ area: area }) : findproperty.area;
      price ? await Property.update({ price: price }) : findproperty.price;
      bathrooms
        ? await Property.update({ bathrooms: bathrooms })
        : findproperty.bathrooms;
      floor ? await Property.update({ floor: floor }) : findproperty.floor;
      city ? await Property.update({ city: city }) : findproperty.city;
      province
        ? await Property.update({ province: province })
        : findproperty.province;
      address
        ? await Property.update({ address: address })
        : findproperty.address;
      postal_code
        ? await Property.update({ postal_code: postal_code })
        : findproperty.postal_code;
      room ? await Property.update({ room: room }) : findproperty.room;
      title ? await Property.update({ title: title }) : findproperty.title;
      pictures
        ? await Property.update({ pictures: pictures })
        : findproperty.pictures;
      type ? await Property.update({ type: type }) : findproperty.type;
      service
        ? await Property.update({ service: service })
        : findproperty.service;
    }

    return newproperty;
  } catch (error) {
    return { Error: error.message };
  }
};
module.exports = updateProperty;
