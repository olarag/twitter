const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {

	test("1. Create a new user using the UserService", () =>{
		const user = UserService.create(1, "olarag", "Oscar")
		expect(user.username).toBe("olarag")
		expect(user.name).toBe("Oscar")
		expect(user.id).toBe(1)
		expect(user.bio).not.toBeUndefined()
	})

})
