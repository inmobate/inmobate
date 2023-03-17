const { Comment, User, Publication } = require("../../db");

const newPostComment = async (content, id_user, id_publication) => {
  try {
    if (!content || !id_user || !id_publication) throw new Error("un nuevo post debe recibir: content, id_user y id_publication")
    /*     
    Publication.hasMany(Comment, { foreignKey: "publicId" });
    Comment.belongsTo(Publication, { as: "public" });

    User.hasMany(Comment, { foreignKey: "autor_comiId" });
    Comment.belongsTo(User, { as: "autor_comi" });
    */

    const comment = await Comment.create(
      {
        content,
      });

      const findPublication = await Publication.findAll({
        where: {
          id: id_publication,
        },
      });
      
      const findUser = await User.findAll({
        where: {
          id: id_user,
        },
      });

      comment.addUser(findUser);
      comment.addPublication(findPublication);

    return "Thanks for your comment";
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = newPostComment;
