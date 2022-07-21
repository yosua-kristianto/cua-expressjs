class UserRepository {

  /**
   * findUserById
   * 
   * A repository to find user by id
   * 
   * @param {number} id 
   * @returns {Promise<User>}
   */
  findUserById = async(id) =>
    User.findOne({
      where: {
        is_deleted: 0,
        id: id
      }
    }).then(resultSet => {
      if(resultSet === null) throw new UserNotFoundException();

      return resultSet;
    });

  /**
   * getAllUser
   * 
   * A repository to get all users data
   * 
   * @returns {Array<User>}
   */
  getAllUser = async() => User.findAll({where: {is_deleted: 0}});

  /**
   * createUser
   * 
   * A repository to create user data
   * 
   * @param {Object} request 
   * @returns {Promise<User>}
   */
  createUser = async (request) =>
    User.create({
      "email": request.email,
      "phone": request.phone,
      "password": "default",
      "is_deleted": 0
    });
    
}

export default new UserRepositoryImpl();