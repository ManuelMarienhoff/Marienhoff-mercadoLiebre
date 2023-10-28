module.exports = (sequelize, dataTypes)=>{
    const alias = "AddressUser";
    const cols = {
      address_id: {
        type: dataTypes.INTEGER,
        references: {
          model: "Address",
          key: "id",
        },
      },
      user_id: {
        type: dataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
    };
    const config = {
        tableName: "AddressesUsers",
        timestamps: false
    }
    const AddressUser = sequelize.define(alias,cols,config);

    AddressUser.associate = function(models){
        AddressUser.belongsTo(models.Address, {
            foreignKey: "address_id"
        }),

        AddressUser.belongsTo(models.User, {
            foreignKey: "user_id"
        })
    }

    return AddressUser;
}