// Song
module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define("Song", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Song;
}