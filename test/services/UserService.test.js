const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {

	test("1. Create a new user using the UserService", () =>{
		const user = UserService.create(1, "olarag", "Oscar")
		expect(user.username).toBe("olarag")
		expect(user.name).toBe("Oscar")
		expect(user.id).toBe(1)
		expect(user.bio).not.toBeUndefined()
	})

	test("2. Get all user data in a list", () =>{
		const user2 = UserService.create(1, "olarag", "Oscar")
		const userInfoInList = UserService.getInfo(user2)
		expect(userInfoInList[0]).toBe(1)
		expect(userInfoInList[1]).toBe("olarag")
		expect(userInfoInList[2]).toBe("Oscar")
		expect(userInfoInList[3]).toBe("Sin bio")
	})


})
