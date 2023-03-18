const { Property } = require("../../db");

const updateProperty = async ( id, description, area, price, bathrooms, floor, country, city, province, address, postal_code, room, title, pictures, type, type_icon, service, service_icon ) => {
    try {
        const findproperty = await Property.findByPk(id);
        if (!findproperty) throw new Error("Property not found");
        else {
          const newproperty = await Property.upsert({
            id, description, area, price, bathrooms, floor, country, city, province, address, postal_code, room, title, pictures, type, type_icon, service, service_icon
          });

          return newproperty
        }
      } catch (error) {
        return { Error: error.message };
      }
}
