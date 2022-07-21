import { DataTypes } from 'sequelize';

class User extends Model {

  /**
   * @var array
   * hidden
   *  Hide attributes with variable names below
   */
  hidden = [
    'password',
    'is_deleted'
  ];

  /**
   * toJSON
   *  Sequelize function settings to cast this model
   *  into JSON
   */
  toJSON () {
    // hide hidden fields
    let attributes = Object.assign({}, this.get())
    for (let a of this.hidden) {
      delete attributes[a]
    }
    return attributes
  }


}

User.init({
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
  "tableName"    : 'users',
  "timestamps"   : true,
  "paranoid"     : true,
  "underscored"  : true
})

export default User;