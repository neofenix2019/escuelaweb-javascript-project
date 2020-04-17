const UserDao = require('../dao/user.dao');
const log = global.logger.getLoggerObject();

class userController {

    constructor(){

    }

    async fetchAndOrderUsers(req, res){

        let resultRequest = null;
        let users = [];
        let userDao = new UserDao();
        
        resultRequest = await userDao.getUsers(10);
                
        if (resultRequest && resultRequest.results.length > 0){

            resultRequest = resultRequest.results;
            users = resultRequest.sort((a,b)=>{
                //Criterio de ordernamiento: las primera letras del nombre
                if(a.name.first > b.name.first){
                    return 1;
                } else if (a.name.first < b.name.first) {
                    return -1;
                } else {
                    return 0;
                }

            });

            res.status(200).json({
                msg: `La consulta se realizó con éxito.`,
                result: users
            });

        } else {

            res.status(200).json({
                msg: `Error en la transacción.`,
                result: null
            });

        }

    }

    async fetchAndFindUsers(req, res){

        let resultRequest = null;
        let users = [];
        let { age } = req.params;

        let userDao = new UserDao();
        let cant = privateGetRandomInt(5,1000);
        
        resultRequest = await userDao.getUsers(cant);

        if (resultRequest && resultRequest.results.length > 0){

            resultRequest = resultRequest.results;
            users = resultRequest.filter(element=>element.dob.age == age);

            if (users.length > 0){
                res.status(200).json({
                    msg: `La consulta se realizó con éxito.`,
                    result: users[0]
                });
            } else {
                res.status(200).json({
                    msg: `La consulta no arrojó resultados.`,
                    tamaño_muestra: cant,
                    result: null
                });
            }

        } else {

            res.status(200).json({
                msg: `Error en la transacción.`,
                result: null
            });

        }

    }

    async fetchAndCountUsers(req, res){

        let resultRequest = null;
        let firstNames = null;
        let userDao = new UserDao();

        let resultLetter = {
            letter: null,
            cant: 0
        }
        
        resultRequest = await userDao.getUsers(5);
                
        if (resultRequest && resultRequest.results.length > 0){

            resultRequest = resultRequest.results;

            firstNames = resultRequest.map((element)=>{
                return element.name.first;
            });

            let unionFirstNames = firstNames.join("").toUpperCase();
            
            for (let i = 0; i < unionFirstNames.length; i++) {
                const element = unionFirstNames[i];
                let cantOcurr = privateGetOcurrencyLetter(element,unionFirstNames);
                if (cantOcurr > resultLetter.cant) {
                    resultLetter.letter = element;
                    resultLetter.cant = cantOcurr;
                } else if (cantOcurr == resultLetter.cant) {
                    if (element < resultLetter.letter) {
                        resultLetter.letter = element;
                        resultLetter.cant = cantOcurr;
                    }
                }
            }

            res.status(200).json({
                msg: `La consulta se realizó con éxito.`,
                result: {
                    maxOccurrNameLetter: resultLetter.letter
                }
            });

        } else {

            res.status(200).json({
                msg: `Error en la transacción.`,
                result: null
            });

        }        

    }

}

function privateGetRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function privateGetOcurrencyLetter(letter, word) {
    
    let occurCount = 0;
    
    for (let i = 0; i < word.length; i++) {
        const element = word [i];
        if (letter === element) occurCount++;
    }

    return occurCount;

}

module.exports = userController;