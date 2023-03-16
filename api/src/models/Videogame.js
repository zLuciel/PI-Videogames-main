const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Videogame",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      released: {
        type: DataTypes.STRING,
      },

      rating: {
        type: DataTypes.FLOAT,
      },

      platform: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },

      image:{
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
