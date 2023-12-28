module.exports = (sequelize, dataTypes)=>{
    const alias = "Address";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        pais: dataTypes.STRING(100),
        provincia: dataTypes.STRING(100),
        localidad: dataTypes.STRING(100),
        calle: dataTypes.STRING(100),
        numero: dataTypes.INTEGER,
        departamento: dataTypes.STRING(100),
        nota: dataTypes.STRING(300)
    };
    const config = {
        tableName: "Addresses",
        timestamps: false
    }
    const Address = sequelize.define(alias,cols,config);

    Address.associate = function(models){
        Address.belongsToMany(models.User, {
            as: "user",
            through: "AddressesUsers", /* aca va el tableName de la tabla pivot */
            foreignKey: "address_id",
            otherKey: "user_id",
            timestamps: false
        })
    }


    return Address
}