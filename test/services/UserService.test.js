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
		const user = UserService.create(1, "olarag", "Oscar")
		const userInfoInList = UserService.getInfo(user)
		expect(userInfoInList[0]).toBe(1)
		expect(userInfoInList[1]).toBe("olarag")
		expect(userInfoInList[2]).toBe("Oscar")
		expect(userInfoInList[3]).toBe("Sin bio")
	})

	test("3. Update username", () => {
		const user = UserService.create(1, "olarag", "Oscar")
		UserService.updateUserUsername(user, "olara")
		expect(user.username).toBe("olara")
	})

	test("4. Given a list of users give me the list of usernames", () => {
		const user1 = UserService.create(1, "olarag1", "Oscar")
		const user2 = UserService.create(1, "olarag2", "Oscar")
		const user3 = UserService.create(1, "olarag3", "Oscar")
		const usernames = UserService.getAllUsernames([user1, user2, user3])
		expect(usernames).toContain("olarag1")
		expect(usernames).toContain("olarag2")
		expect(usernames).toContain("olarag3")
	})
})
