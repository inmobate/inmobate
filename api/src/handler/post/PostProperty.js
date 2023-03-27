const { Property, Service, Type } = require("../../db");

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
  service
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
      !service
    )
      throw new Error("Incomplete information");

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
    });

    await property.addService(service);
    await property.addType(type);

    return property;
  } catch (error) {
    return { error: error.message };
  }
};
module.exports = newPostProperty;
