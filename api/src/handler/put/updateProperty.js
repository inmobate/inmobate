const { Property } = require("../../db");

const updateProperty = async (
  id,
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
  services
) => {
  try {
    const findproperty = await Property.findOne({ where: { id: id } });
    if (!findproperty) throw new Error("Property not found");
    else {
      description
        ? (findproperty.description = description)
        : findproperty.description;
      area ? (findproperty.area = area) : findproperty.area;
      price ? (findproperty.price = price) : findproperty.price;
      bathrooms ? (findproperty.bathrooms = bathrooms) : findproperty.bathrooms;
      floor ? (findproperty.floor = floor) : findproperty.floor;
      city ? (findproperty.city = city) : findproperty.city;
      province ? (findproperty.province = province) : findproperty.province;
      address ? (findproperty.address = address) : findproperty.address;
      postal_code
        ? (findproperty.postal_code = postal_code)
        : findproperty.postal_code;
      room ? (findproperty.room = room) : findproperty.room;
      title ? (findproperty.title = title) : findproperty.title;
      pictures ? (findproperty.pictures = pictures) : findproperty.pictures;
      type ? (findproperty.type = type) : findproperty.type;
      services ? (findproperty.services = services) : findproperty.services;
    }
    return findproperty;
  } catch (error) {
    return { Error: error.message };
  }
};
module.exports = updateProperty;
