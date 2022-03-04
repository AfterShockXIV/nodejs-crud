import { dbQuery } from "../../../common/database/mysql.db.js";
import { Model ,TableName } from "../modals/user.modal.js";

const UserService = {
    create: (payload) => {
        return dbQuery(`INSERT INTO ${TableName} SET ?`,payload)
    },
    getAll : (columns = Model) => {
        const options = [columns,TableName] 
        return dbQuery(`SELECT ?? FROM ??` , options)
    }
}

export default UserService