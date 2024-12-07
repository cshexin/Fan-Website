module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define("Song", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Song.associate = (models) => {
        Song.belongsTo(models.Album, {
            foreignKey: {
                allowNull: false, 
            },
        });
    };

    return Song;
};
