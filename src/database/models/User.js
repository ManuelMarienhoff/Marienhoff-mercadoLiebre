module.exports = (sequelize, dataTypes)=>{
    const alias = "User";
    const cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
      },
      name: dataTypes.STRING(100),
      surname: dataTypes.STRING(100),
      username: dataTypes.STRING(100),
      email: dataTypes.STRING(100),
      password: dataTypes.STRING(100),
      profile_id: dataTypes.INTEGER,
      image: dataTypes.STRING(100),
    };
    const config = {
        tableName: "Users",
        timestamps: false
    }

    const User = sequelize.define(alias,cols,config);

    User.associate = function (models) {
      User.belongsToMany(models.Address, {
        as: "address",
        through: "AddressesUsers", /* aca va el nombre de la tabla */
        foreignKey: "user_id",
        otherKey: "address_id",
        timestamps: false,
      });
      
      User.belongsTo(models.Profile, {
        as: "profile",
        foreignKey: "profile_id"
      })
    };

    return User;
}