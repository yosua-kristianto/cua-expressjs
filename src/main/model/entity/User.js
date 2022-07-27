import {DataTypes, Model} from 'sequelize';
import mainConnection from '../../config/Database.js';

const User = mainConnection.define('User', {
  "id": {
    "autoIncrement": true,
    "primaryKey": true,
    "field": "id",
    "type": DataTypes.BIGINT
  },

  "email": {
    "allowNull": false,
    "field": "email",
    "type": DataTypes.STRING(255)
  },

  "phone": {
    "allowNull": false,
    "field": "phone",
    "type": DataTypes.STRING(20)
  },

  "password": {
    "allowNull": false,
    "field": "password",
    "comment": "Make sure this is encrypted!!!",
    "type": DataTypes.TEXT
  },

  "is_deleted": {
    "allowNull": false,
    "field": "is_deleted",
    "comment": "0: Not Deleted | 1: Deleted",
    "type": DataTypes.SMALLINT,
    "default": 0
  },

  "some_virtual_attributes": {
    "type": DataTypes.VIRTUAL(DataTypes.STRING),
    "get": function () {
      return `${this.get('email')} ${this.get('phone')}`
    }
  }
}, {
  "tableName": 'user',
  "timestamps": false,
  "paranoid": false,
  "underscored": true,
});

export default User;