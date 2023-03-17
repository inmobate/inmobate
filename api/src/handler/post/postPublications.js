const { Publication, User } = require("../../db");

const newPostPublication = async ( autor, active, description, picture, public_data, title) => {
  try {
    if (!active || !description || !picture || !public_data || !title || !autor) throw new Error("Information incomplete");
   
         
    User.hasMany(Publication,{foreignKey:"autorId"});
    Publication.belongsTo(User,{as: "autor"})


    const publication = await Publication.create({
        active, 
        description, 
        picture, 
        public_data, 
        rating, 
        title, 
        favorite
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
