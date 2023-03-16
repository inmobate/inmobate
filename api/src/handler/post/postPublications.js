const { Publication } = require("../../db");

const newPostPublication = async ( autor, active, description, picture, public_data, title) => {
  try {
    /*     
    User.hasMany(Publication,{foreignKey:"autorId"});
    Publication.belongsTo(User,{as: "autor"})
 */

    const publication = await Publication.create({
        active, 
        description, 
        picture, 
        public_data, 
        title, 
        autor
      },
      {
        include: [
          {
            association: {
              as: "autor",
            },
          },
        ],
      }
    );

    return publication;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = newPostPublication;
