const { Publication } = require("../../db");

const updatePublication = async ( id, active, description, picture, public_data, title ) => {
  try {
    const findpublication = await Publication.findByPk(id);
    if (!findpublication) throw new Error("Publication not found");
    else {
      const newPublication = await Publication.upsert({
        id,
        active,
        description,
        picture,
        public_data,
        title,
      });
      return newPublication
    }
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = updatePublication;
