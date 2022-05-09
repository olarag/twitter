const UserService = require(./../services/UserService)

class UserView{

	static createUser(playload){
		if(payload === null){
			console.log("Error es null")
			return {error: ""l Payload no existe."}
		} else if(typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number') {
			return UserService.create(payload.id, payload.username, payload.name)
		} else {
			return {error: "Error, las propiedades del playload necesitan tener un valor válido"}
		}
	}

}

module.exports = UserView
