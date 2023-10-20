const userInfo = {
  firstName: "Juan",
  lastName: "Gomez",
  country: "Argentina",
  birthdayMonth: "Jun",
  birthdayDay: "10",
  birthdayYear: "1976",
  email: "juangomez@hotmail.com",
  password: "12345678",
}

it.only('TC003: Verificar el correcto registro de usuarios, con todos los datos válidos', () => {
    
  // ... (código anterior para llenar el formulario)

  cy.wait(1000);
  
  cy.request({
    method: 'GET',
    url: `http://localhost:5173/api/users/`,
  }).then((response) => {
    // Verificar que la solicitud haya tenido éxito (código de respuesta 200)
    expect(response.status).to.eq(200);

    // Verificar que el usuario se haya encontrado en la respuesta
    expect(response.body.email).to.eq(userInfo.email);
  });
});
