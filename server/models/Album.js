// Album
module.exports = (sequelize, DataTypes) => {
    const Album = sequelize.define("Album",{
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        released_date:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        no:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
    });
    Album.associate = (models) => {
        Album.hasMany(models.Song, {
            onDelete: "cascade",
        });   
    };
    return Album;
}
