const signUp = require("./post/postUsers.js");
const newPostComment = require("./post/postComments.js");
const newPostPublication = require("./post/postPublications.js");
const newPostProperty = require("./post/PostProperty.js");
const newPostBooking = require("./post/postBooking.js");
const newPostSale = require("./post/postSale.js");
const updateUser = require("./put/UpdateUser.js");
const updatePublication = require("./put/updatePublication.js");
const updateProperty = require("./put/updateProperty");
const bookingDelete = require("./delete/deleteBooking.js");
const{Op,Property,Service}=require('../db')
const {getUser} = require('../controller/controllerUsers');
const {getComentario}  =require("../controller/controllerComment.js");
const {getReservas} = require('../controller/controllerBooking')
const {getPublication} = require('../controller/controllerpublicacion')
const {getVentas} = require('../controller/controllerSale')
const{propertyById}= require('../controller/controllerProperty')
const {typeDb} = require ('../controller/controllerType')
const CommentDelete = require("../handler/delete/deleteCommit.js") 


const allProperty = async (req,res) => {
    const datos = await Property.findAll()
    const {city,province}=req.query
    if(city){
        let propertyCity = await Property.findAll({
            where:{
                city:{[Op.iLike]: city}
            }
            //falta incluir los modelos servicios y tipos para cuando 
            //busque una propiedad por ciudad  te muestre que tipo es y que servicios brinda
        })
        try {
        return res.status(200).json(propertyCity);
        } catch (error) {
            res.status(400).json({Error:error.menssage})
        }
    }else if(province){
        let propertyProvince = await Property.findAll({
            where:{
                province:{[Op.iLike]: province}
            }
            //falta incluir los modelos servicios y tipos para cuando 
            //busque una propiedad por ciudad  te muestre que tipo es y que servicios brinda
        })
        try {
        return res.status(200).json(propertyProvince);
        } catch (error) {
            res.status(400).json({Error:error.menssage})
        }
    }
    res.status(200).json(datos)
}

const allPropertyById = async (req,res) => {
    const {id} = req.params
        try {
        const datos = await propertyById(id)
            res.status(200).json(datos)
        } catch (error) {
            res.status(400).json({Error:"error.id no esta"})
        }
}

const postProperty = async (req, res) => {
    const {description, area, price, bathrooms, floor, country, city, province, address, postal_code, room, title, pictures, type, service } = req.body
    const { id } = req.params
    try {
        const newproperty = await newPostProperty (id, description, area, price, bathrooms, floor, country, city, province, address, postal_code, room, title, pictures, type, service )
        res.status(200).json(newproperty)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const putProperty = async (req, res) => {
  const {id, description, area, price, bathrooms, floor, country, city, province, address, postal_code, room, title, pictures, type, service } = req.body
    try {
        const newproperty = await updateProperty(id, description, area, price, bathrooms, floor, country, city, province, address, postal_code, room, title, pictures, type, service )
        res.status(200).json(newproperty)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


const allServicios = async (req, res) => {
  const servicios = await Service.findAll();
  try {
    res.status(200).json(servicios);
  } catch (error) {
    res.status(400).json({ Error: error.menssage });
    res.status(404).json({ error: menssage });
  }
};

const allUsers = async (req, res) => {
  const users = await getUser();
  try {
    res.status(200).json({ usuarrios: users });
  } catch (error) {
    res.status(400).json({ Error: error.menssage });
  }
};

const postUsers = async (req, res) => {
  const { name, lastName, email, password } = req.body;
  try {
    const newPost = await signUp(name, lastName, email, password);
    res.status(201).send(newPost);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const putUsers = async (req, res) => {
  const { id, name, lastName, email, password } = req.body;
  try {
    const updateuser = await updateUser(id, name, lastName, email, password);
    res.status(200).send(updateuser);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const allComments = async (req, res) => {
  const comments = await getComentario();
  try {
    res.status(200).json({ comentarios: comments });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const postComments = async (req, res) => {
  const { id_publication } = req.params
  const { content, id_user } = req.body;
  try {
    const newComment = await newPostComment(content, id_user, id_publication);
    res.status(200).json(newComment);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const deleteComments = async (req, res) => {
  const { id } = req.body;
  try {
    const commentsdelete = await CommentDelete(id);
    res.status(200).json(commentsdelete);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const allPublications = async (req, res) => {
  const publicacion = await getPublication();
  try {
    res.status(200).json({ publi: publicacion });
  } catch (error) {}
};

const putPublications = async (req, res) => {
  const { active, description, picture, public_data, title, autor } = req.body;
  try {
    const newPublication = await updatePublication( active, description, picture, public_data, title, autor);
    res.status(200).send(newPublication);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
}

  const postPublications = async (req, res) => {
    const { active, description, picture, public_data, title, autor} = req.body;

    console.log(req.body);
    try {
      const newPublication = await newPostPublication( active, description, picture, public_data, title, autor );
      console.log(newPublication);
      res.status(200).json(newPublication);
    } catch (error) {
      res.status(400).json({ Error: error.message });
    }
  };

  const allReservas = async (req, res) => {
    const reserva = await getReservas();
    try {
      res.status(200).json({ booking: reserva });
    } catch (error) {
      res.status(400).json({ Error: error.message });
    }
  };

  const allSale = async (req, res) => {
    const ventas = await getVentas();
    try {
      res.status(200).json({ ventas: ventas });
    } catch (error) {
      res.status(400).json({ Error: error.message });
    }
  };

  const postSale = async (req, res) => {
    const {name, sale_date, total_amount_sell} = req.body
    try {
      const newsale = await newPostSale(name, sale_date, total_amount_sell);
      res.status(200).json(newsale);
    } catch (error) {
      res.status(400).json({ Error: error.message });
    }
  };
  const allBooking = (req, res) => {
    res.status(200).json({ mensaje: "en esta ruta veremos todos las reservas" });
  };

  const postBooking = async (req, res) => {
    const { id, date_of_admission, departure_date, total_price, id_user, id_sale, id_property } = req.body;
    try {
      const newBooking = await newPostBooking( id, date_of_admission, departure_date, total_price, id_user, id_sale, id_property );
      res.status(200).json(newBooking);
    } catch (error) {
      res.status(400).json({ Error: error.message });
    }
  };

  const deleteBooking = async (req, res) => {
    const { id } = req.body;
    try {
      const bookingdelete = await bookingDelete(id);
      res.status(200).json(bookingdelete);
    } catch (error) {
      res.status(400).json({ Error: error.message });
    }
  };

  const alltype = async (req, res) => {
    const type = await typeDb();
    try {
      res.status(200).json(type);
    } catch (error) {
      res.status(400).json({ Error: error.message });
    }
  }

module.exports = {
  allUsers,
  postUsers,
  putUsers,
  allComments,
  postComments,
  allPublications,
  postPublications,
  putPublications,
  allProperty,
  allSale,
  allBooking,
  postBooking,
  deleteBooking,
  alltype,
  allServicios,
  allReservas,
  allPropertyById,
  postProperty,
  putProperty,
  postSale,
  deleteComments
};