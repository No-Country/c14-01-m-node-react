import userModel from "../../backend/models/userModel";
import { userRouter } from "../../backend/routes/users";
import { usersByEmail } from "../../backend/controllers/user.controllers";
import { registerUser } from "../../backend/controllers/authControllers";



describe("Users API", function () {
  it("get a user profile by username", function () {
    const user = { email };
    cy.request("GET", `/api/users/${email}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.user).to.deep.equal({
        firstName: firstName,
        lastName: lastName,
        avatar: avatar,
      });
      expect(response.body.user).not.to.have.property("balance");
    });
  });
})
