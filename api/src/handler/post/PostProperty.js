const{Property, Service, Type} = require('../../db')

const newPostProperty = async (id, description, area, price, bathrooms, floor, country, city, province, address, postal_code, room, title, pictures, type, service ) => {
    try {
        if (id || !description || !area || !price || !bathrooms || !floor || !country || !city || !province || !address || !postal_code || !room || !title || !pictures || !type || !service) throw new Error("Incomplete information");

        const  property = await Property.create({
            id, description, area, price, bathrooms, floor, country, city, province, address, postal_code, room, title, pictures,
            Services: [{
                id : service
            }],

            Types: [{
                id : type
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