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
        cover: DataTypes.STRING  // This field stores the image filename or path

    });
    Album.associate = (models) => {
        Album.hasMany(models.Song, {
            onDelete: "cascade",
        });   
    };
    return Album;
}
