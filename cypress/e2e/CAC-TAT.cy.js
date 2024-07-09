
describe('Central de Atendimento ao Cliente', () => {
  beforeEach(() => {
    cy.visit('././src/index.html')
  })
  it('verificar o titulo da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
  it.only('Prencher campos obrigatórios e enviar formulário', () => {
    cy.get('#firstName').type('Leonardo Henrique')
    cy.get('#lastName').type('Luz Marciano')
    cy.get('#email').type('Leo@teste.com')
    cy.get('#phone').type('11 9999-9999')
    cy.get('#open-text-area').type('Cypress é top!')
    cy.get('#open-text-area').type('Lorem ipsum dolor sit amet. Sed saepe quia qui recusandae perspiciatis et repellendus sint! Qui porro cumque cum fugiat dignissimos qui sapiente sint non reiciendis dolorum in placeat quibusdam. Eum commodi voluptatem ea totam Quis sed quia voluptatibus ad tempora officia non quisquam provident aut internos dolorem ut magni repudiandae.', 
      {delay: 0})
    cy.get('button[type = "submit"]').click()

    cy.get('.success').should('be.visible')
  })

})

