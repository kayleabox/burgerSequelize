module.exports = function(sequelize, DataTypes) {
 // Add code here to create a Post model
 // This model needs a title, a body, and a category
 // Don't forget to 'return' the post after defining

 return sequelize.define("Burger", {
    burger:{
         type: DataTypes.STRING,
         allowNull: false,
         validate:{
             len:[1]
         }
     },
    customer:{
         type: DataTypes.STRING,
         allowNull: false,
         validate:{
             len:[1]
         }
    },
    devoured:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

 });
};

