const{Property, Service, Type} = require('../../db')

const newPostProperty = async (id, description, area, price, bathrooms, floor, country, city, province, address, postal_code, room, title, pictures, type, type_icon, service, service_icon ) => {
    try {
        if (id || !description || !area || !price || !bathrooms || !floor || !country || !city || !province || !address || !postal_code || !room || !title || !pictures || !type || !service) throw new Error("Incomplete information");

        const  property = await Property.create({
            id, description, area, price, bathrooms, floor, country, city, province, address, postal_code, room, title, pictures,
            Services: [{
                name : service,
                icon : service_icon
            }],

            Types: [{
                name : type,
                icon : type_icon
            }],

        },{
            include: Service
        },{        
            include: Type
        });
        
        return property 
    } catch (error) {
         return { error: error.message };
    }
}
module.exports = newPostProperty