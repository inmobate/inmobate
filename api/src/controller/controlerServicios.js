const { Service } = require("../db.js");
const { servicios } = require("./servicios");

const servicioDb = async (id) => {
  const serv = await Service.findOne({ where: { id: id } });
  /* if (serv.length <= 0) {
    const servic = servicios.map((e) => {
      return {
        name: e.servicio,
        icon: e.icono,
      };z
    });
    await Service.bulkCreate(servic);
    return servic;
  } */
  return serv;
};

module.exports = {
  servicioDb,
};
