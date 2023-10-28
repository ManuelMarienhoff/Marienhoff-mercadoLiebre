module.exports = (sequelize, dataTypes)=>{
    const alias = "Product";
    const cols = {
        id: dataTypes.INTEGER,
        name: dataTypes.STRING(100),
        price: dataTypes.DECIMAL(10,2),
        discount: dataTypes.INTEGER,
        image: dataTypes.STRING(100),
        category_id: dataTypes.INTEGER
    };
    const config= {
        tableName: "Products",
        timestamps: false
    }

    const Product = sequelize.define(alias,cols,config);

    Product.associate = function(models){
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id"
        })
    }
    

    return Product


}