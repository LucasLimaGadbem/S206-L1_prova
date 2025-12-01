// Ignorar erros da página
Cypress.on('uncaught:exception', () => false);

// Função de login
function loginInternet(user, pass) {
  cy.visit('/login');
  cy.get('#username').type(user);
  cy.get('#password').type(pass);
  cy.get('button[type="submit"]').click();
}

// Testes
describe('Testes - The Internet (Herokuapp)', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('1 - Login com sucesso', () => {
    loginInternet('tomsmith', 'SuperSecretPassword!');
    cy.get('.flash')
      .should('be.visible')
      .and('contain.text', 'You logged into a secure area!');
  });

  it('2 - Login com falha (senha incorreta)', () => {
    loginInternet('tomsmith', 'senha_errada');
    cy.get('.flash')
      .should('be.visible')
      .and('contain.text', 'Your password is invalid!');
  });

  it('3 - Adicionar três elementos', () => {
    cy.visit('/add_remove_elements/');

    for (let i = 0; i < 3; i++) {
      cy.contains('Add Element').click();
    }

    cy.get('.added-manually').should('have.length', 3);
  });

  it('4 - Remover um elemento', () => {
    cy.visit('/add_remove_elements/');

    for (let i = 0; i < 3; i++) {
      cy.contains('Add Element').click();
    }

    cy.get('.added-manually').should('have.length', 3);

    cy.get('.added-manually').first().click();

    cy.get('.added-manually').should('have.length', 2);
  });

});
