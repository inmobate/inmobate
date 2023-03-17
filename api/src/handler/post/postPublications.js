const { Publication, User} = require("../../db");

const newPostPublication = async ( active, description, picture, public_data, title, autor ) => {
  try { 
    if (!active || !description || !picture || !public_data || !title || !autor){
      throw new Error ("Information incomplete") 
    } 
    /*     
    User.hasMany(Publication,{foreignKey:"autorId"});
    Publication.belongsTo(User,{as: "autor"})
 */
    const publication = await Publication.create(
      {
        active,
        description,
        picture,
        public_data,
        title,
      });
      
       const findUser = await User.findAll({
        where: {
          id: autor,
        },
      });

      publication.addUser(findUser);

    return publication;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = newPostPublication;
