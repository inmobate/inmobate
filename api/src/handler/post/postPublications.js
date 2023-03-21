const { Publication, User } = require("../../db");

const newPostPublication = async ( active, description, picture, public_data, title, autor ) => {
  try { 
    if (!active || !description || !picture || !public_data || !title || !autor) throw new Error ("Information incomplete") 
         
    const publication = await Publication.create(
      {
        active,
        description,
        picture,
        public_data,
        title,
        autorId: autor  
      });
      
       const findUser = await User.findOne({where: {id: autor}});
      
      findUser.addPublication(publication);

    return publication;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = newPostPublication;
