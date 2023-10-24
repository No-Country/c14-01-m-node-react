describe('Auth Module', () => {
  const userInfo = {
    firstName: "Marcelo",
    lastName: "Gomez",
    country: "Argentina",
    birthdayMonth: "Jun",
    birthdayDay: "10",
    birthdayYear: "1976",
    email: "marcelogomez@hotmail.com",
    password: "12345678",
  }

  const firstLetterName = userInfo.firstName.charAt(0);

  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })
  it.only('TC003: Verificar el correcto registro de usuarios, con todos los datos validos', () => {
    
    cy.get('#dropdown-basic-button').click().should('be.visible')
    cy.get('#dropdown-basic-button > div > a:nth-child(2) > button').contains("Sign Up").click()
    cy.get('input[name="first_name"]').type(userInfo.firstName)
    cy.get('input[name="last_name"]').type(userInfo.lastName)
    cy.get('select[name="location"]').select(userInfo.country)
    cy.get('select[name="month"]').select(userInfo.birthdayMonth)
    cy.get('select[name="day"]').select(userInfo.birthdayDay)
    cy.get('select[name="year"]').select(userInfo.birthdayYear)
    cy.get('input[name="email"]').type(userInfo.email)
    cy.get('input[name="password"]').type(userInfo.password)
    cy.get('.d-grid > .btn').contains("Agree and continue").should('be.visible').click()
    cy.wait(1000)
    
  })

  it.only('TC004: Consulta en BD, si existe un email', () => {
    
    cy.api({
      url: 'http://localhost:8080/api/users/',
      method: 'GET',
    }).then((response) => {
      expect(response.status).to.eq(200);
      
      const users = response.body;
  
      // Verificar que al menos un usuario tenga el email esperado
      const userWithEmail = users.find(user => user.email === userInfo.email);
  
      expect(userWithEmail).to.exist; // Debería encontrar un usuario con el email
    });
  });
  
  

  it('TC008: Verificar el correcto inicio de sesion con todos los daos validos', () => {
    cy.get('#dropdown-basic-button').click().should('be.visible')
    cy.get('#dropdown-basic-button > div > a:nth-child(1) > button').contains("Log In").click()
    cy.get('input[name="email"]').type(userInfo.email)
    cy.get('input[name="password"]').type(userInfo.password)
    cy.get('.d-grid > .btn').contains("Continue").click()
    cy.get('.logged-user').contains(firstLetterName)
  })

  it('TC005: Verificar la validación del formulario de inicio de sesión sin el ".com" del email y muestre los mensajes de error correctos.', () => {
    cy.get('#dropdown-basic-button').click().should('be.visible')
    cy.get('#dropdown-basic-button > div > a:nth-child(1) > button').contains("Log In").click()
    cy.get('input[name="email"]').type('marceloagm@hotmail')
    cy.get('.d-grid > .btn').contains("Continue").click()
    cy.get(".invalid-feedback").should("be.visible").and("contain", "  Please provide a valid email.")
    
  })

  it('TC006: Verificar la validación del formulario de inicio de sesión sin el "@" del email y muestre los mensajes de error correctos.', () => {
    cy.get('#dropdown-basic-button').click().should('be.visible')
    cy.get('#dropdown-basic-button > div > a:nth-child(1) > button').contains("Log In").click()
    cy.get('input[name="email"]').type('marceloagmhotmail.com')
    cy.get('.d-grid > .btn').contains("Continue").click()
    cy.get(".invalid-feedback").should("be.visible").and("contain", "  Please provide a valid email.")
    
  });

  it('TC013: Pop Up Filtro Input Range: filtrar viviendas según el precio máximo y una caracteristica. Price: $50 and checbox: whasher ', () => {
    const newValue = 50;
    const checkbox = 'washer';
    
    cy.get('.filters').click();
    cy.get('#floatingInput').clear().type(newValue);
    cy.get('input[name="price"]').should('have.value', newValue.toString());
  
    cy.get('.bottom-price').each(($div) => {
      const priceText = $div.text();
      const price = parseFloat(priceText.match(/\d+/)[0]);
  
      if (price < newValue) {
        cy.wrap($div).should('exist');
      } else {
        cy.wrap($div).should('not.exist');
      }
    });
  
    cy.get('.amenities-item').contains(checkbox)
      .prev('input[type="checkbox"]')
      .check();
    cy.get('.modal-footer > .btn').click();
    cy.get('#root > div.container-cards > a').each(($card, index, $cards) => {
      
      cy.get('#root > div.container-cards > a').eq(index).click(); // Haz clic en el enlace
      cy.get('ul li').contains(checkbox)
    
      // Luego, regresa a la página anterior
      cy.go('back');
    });
  });
  
  it('TC014: TC013: Pop Up Filtro Input Range: filtrar viviendas según el precio máximo y una caracteristica. Price: $158 and checbox: air conditioning', () => {
    const newValue = 158;
    const checkbox = 'air conditioning';
    
    cy.get('.filters').click();
    cy.get('#floatingInput').clear().type(newValue);
    cy.get('input[name="price"]').should('have.value', newValue.toString());
  
    cy.get('.bottom-price').each(($div) => {
      const priceText = $div.text();
      const price = parseFloat(priceText.match(/\d+/)[0]);
  
      if (price < newValue) {
        cy.wrap($div).should('exist');
      } else {
        cy.wrap($div).should('not.exist');
      }
    });
  
    cy.get('.amenities-item').contains(checkbox)
      .prev('input[type="checkbox"]')
      .check();
    cy.get('.modal-footer > .btn').click();
    cy.get('#root > div.container-cards > a').each(($card, index, $cards) => {
      
      cy.get('#root > div.container-cards > a').eq(index).click(); // Haz clic en el enlace
      cy.get('ul li').contains(checkbox)
    
      // Luego, regresa a la página anterior
      cy.go('back');
    });
  });
  
})