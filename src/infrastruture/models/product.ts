import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
export const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  /* user: {
    }, */
  price: {
    type: DataTypes.NUMBER,
    defaultValue: 0
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  /*  category: {
   }, */
  available: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }

});
