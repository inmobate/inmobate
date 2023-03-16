const { Publication } = require("../../db");

const newPostPublication = async (id, active, description, picture, public_data, rating, title, favorite) => {
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
        rating, 
        title, 
        favorite,
        autor: id_user,
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
