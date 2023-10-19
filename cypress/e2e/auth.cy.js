describe('Auth Module', () => {
  const userInfo = {
    firstName: "Marcelo",
    lastName: "Gereniere",
    country: "Argentina",
    birthdayMonth: "Jun",
    birthdayDay: "10",
    birthdayYear: "1976",
    email: "marcelogereniere@hotmail.com",
    password: "12345678",
  }
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })
  it('TC003: Verificar el correcto registro de usuarios, con todos los datos validos', () => {
    
    cy.get('#dropdown-basic-button').click().should('be.visible')
    cy.get('#dropdown-basic-button > div > a:nth-child(2) > button').contains("Sign Up").click()
    cy.get('input[name="name"]').type(userInfo.firstName)
    cy.get('input[name="lastname"]').type(userInfo.lastName)
    cy.get('select[name="country"]').select(userInfo.country)
    cy.get('select[name="month"]').select(userInfo.birthdayMonth)
    cy.get('select[name="day"]').select(userInfo.birthdayDay)
    cy.get('select[name="year"]').select(userInfo.birthdayYear)
    cy.get('input[name="email"]').type(userInfo.email)
    cy.get('input[name="password"]').type(userInfo.password)
    cy.get('.d-grid > .btn').contains("Agree and continue").should('be.visible').click()
    cy.wait(1000)

  })
  it('TC008: Verificar el correcto inicio de sesion con todos los daos validos', () => {
    cy.get('#dropdown-basic-button').click().should('be.visible')
    cy.get('#dropdown-basic-button > div > a:nth-child(1) > button').contains("Log In").click()
    cy.get('input[name="email"]').type(userInfo.email)
    cy.get('input[name="password"]').type(userInfo.password)
    cy.get('.d-grid > .btn').contains("Continue").click()
    cy.location("pathname").should("equal", "/signin")
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
})