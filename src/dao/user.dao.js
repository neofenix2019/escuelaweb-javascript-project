const Axios = require('axios').default;
const log = global.logger.getLoggerObject();

class UserDao {
    constructor (cant){
    }

    getUsers(cant = 1, nat = 'ES'){

           let users = {};
           users = Axios.get(`https://randomuser.me/api/?results=${cant}&nat=${nat}`)
           .then((response)=>{
                return response.data;
           })
           .catch((error)=>{
                log.error(error.message);
                return null;
           });

           return users;
    }  
}

module.exports = UserDao;