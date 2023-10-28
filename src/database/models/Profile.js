module.exports = (sequelize,dataTypes)=>{
    const alias = "Profile";
    const cols = {
        id: dataTypes.INTEGER,
        name: dataTypes.STRING(100)
    };
    const config = {
        tableName: "Profiles",
        timestamps: false
    };

    const Profile = sequelize.define(alias,cols,config);

    Profile.associate = function (models){
        Profile.hasMany(models.User, {
            as: "user",
            foreignKey: "profile_id"            
        })
    }

    return Profile;
}