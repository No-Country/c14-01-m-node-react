// cypress/integration/user.spec.js

describe('Buscar un usuario por correo electrónico', () => {
  it('debería encontrar un usuario existente en la base de datos', () => {
    // Reemplaza ":email" con un correo real en la base de datos
    const emailToSearch = 'marcelogereniere@hotmail.com';

    cy.request('GET', `http://localhost:5173/api/users/email/${emailToSearch}`)
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal('Usuario encontrado');
        expect(response.body.user.email).to.equal(emailToSearch);
      });
  });
});
