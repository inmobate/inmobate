const { Comment } = require("../../db");

const newPostComment = async (content, id_user) => {
  try {
    /*     
    Publication.hasMany(Comment, { foreignKey: "publicId" });
    Comment.belongsTo(Publication, { as: "public" });

    User.hasMany(Comment, { foreignKey: "autor_comiId" });
    Comment.belongsTo(User, { as: "autor_comi" });
 */

    const comment = await Comment.create(
      {
        content,
        public: id_user,
        autor_comi: id_user,
      },
      {
        include: [
          {
            association: {
              as: "public",
            },
          },
          {
            association: {
              as: "autor_comi",
            },
          },
        ],
      }
    );

    return "Thanks for your comment";
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = newPostComment;
