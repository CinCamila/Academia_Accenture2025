import { faker } from '@faker-js/faker';

const SELETORES = {
    BTN_ABA_ATIVA: 'idealsteps-step-active',
    INPUT_EMAIL: '#email',
    INPUT_TELEFONE: '#phone',
    INPUT_USERNAME: '#username',
    INPUT_SENHA: '#password',
    INPUT_CONFIRMAR_SENHA: '#confirmpassword',
    INPUT_COMENTARIO: '#Comments',
    BTN_ENVIAR: '#sendemail',
    ALERT_POPUP: '.sweet-alert',
    BTN_CONFIRMAR: '.confirm',
    BTN_HOME: 'a[title="Home"]'
}

const USUARIO = {
    email: faker.internet.email(),
    telefone: faker.string.numeric(8),
    username: faker.internet.username().replace(/-/g, ''),
    senha: faker.internet.password(8, true, /[A-Za-z0-9!@#$%^&*()_+={}\[\]|;:'",.<>?/-]/),
    comentario: faker.lorem.sentences(2)
}

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('e is not defined')) {
        return false;
    }
    return true;
});

Cypress.Commands.add('validarPaginaCotacao', () => {
    cy.get(`li.${SELETORES.BTN_ABA_ATIVA} a`).should('have.id', 'sendquote')
    cy.log('Redirecionamento feito com sucesso.')
})

Cypress.Commands.add('preencherFormularioEnvio', () => {
    Cypress.env('email', USUARIO.email);
    Cypress.env('telefone', USUARIO.telefone);
    Cypress.env('username', USUARIO.username);
    Cypress.env('senha', USUARIO.senha);

    cy.get(SELETORES.INPUT_EMAIL).type(Cypress.env('email'))
    cy.get(SELETORES.INPUT_TELEFONE).type(Cypress.env('telefone'))
    cy.get(SELETORES.INPUT_USERNAME).type(Cypress.env('username'))
    cy.get(SELETORES.INPUT_SENHA).type(Cypress.env('senha'))
    cy.get(SELETORES.INPUT_CONFIRMAR_SENHA).type(Cypress.env('senha'))
    cy.get(SELETORES.INPUT_COMENTARIO).type(USUARIO.comentario)
    cy.get(SELETORES.BTN_ENVIAR).click()
    cy.screenshot({
        capture: 'fullPage',
        blackout: ['.elemento-escondido'],
        clip: { x: 0, y: 0, width: 500, height: 300 },
    });
})

Cypress.Commands.add('alertaSucesso', () => {
    cy.get(SELETORES.ALERT_POPUP, { timeout: 10000 })
        .should('be.visible')
        .and('contain', 'Sending e-mail success!')
    cy.log('Mensagem de sucesso exibida.')
    cy.screenshot({
        capture: 'fullPage',
    })
})

Cypress.Commands.add('clicarOk', () => {
    cy.wait(1000)
    cy.get(SELETORES.BTN_CONFIRMAR).click()
    cy.log('Botão Ok clicado e popup com mensagem de sucesso fechada.')
})

