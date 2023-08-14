module.exports = (sequelize, DataTypes) => {
    const Albums = sequelize.define("Albums",{
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        released_date:{
            type: DataTypes.DATE,
            allowNull: false,
        },
    });
    return Albums;
}