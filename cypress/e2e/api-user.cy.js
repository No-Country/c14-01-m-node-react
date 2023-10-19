it('TC003: Verificar el correcto registro de usuarios, con todos los datos válidos', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:5173/api/users',
    }).then((response) => {
      // Verifica que la solicitud se haya realizado con éxito
      expect(response.status).to.eq(200);
  
      // Correo electrónico que estás buscando
      const userEmail = 'marcelogereniere@hotmail.com';
  
      // Busca el usuario con el correo electrónico específico en la respuesta
      const userWithEmail = response.body.find((user) => user.email === userEmail);
  
      // Verifica que al menos un usuario tenga el correo electrónico especificado
      expect(userWithEmail).to.exist;
  
      // Accede al atributo 'email' del usuario encontrado
      const email = userWithEmail.email;
  
      // Verifica que el correo electrónico sea igual a 'marcelogereniere@hotmail.com'
      expect(email).to.equal('marcelogereniere@hotmail.com');
    });
  });
  