const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Activity', {
    id:{
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    difficulty:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            isInt: true,
            min: 1,
            max: 5
        }
    },
    duration:{
        type: DataTypes.TIME,
        allowNull: false
    },
    season:{
        type: DataTypes.ENUM("Summer", "Fall", "Winter", "Spring")
    }
  })
}