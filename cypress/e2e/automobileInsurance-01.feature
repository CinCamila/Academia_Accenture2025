# utf-8
# language: pt

Funcionalidade: automobileInsurance-01 - Cadastro de veículo
    Cenário: Cadastro válido de veículos
        Dado que o usuário acessa o portal Tricentis Vehicle Insurance Application
        E clica no botão Automobile e é redirecionado para a página Enter Vehicle Data
        Quando o usuário preenche o forumulário do veículo com dados válidos e clica no botão Next
        E é redirecionado para a página Enter Insurant Data
        E preenche o forumulário do segurado com dados válidos e clica no botão Next
        E é redirecionado para a página Enter Product Data
        E preenche o forumulário do produto com dados válidos e clica no botão Next
        E é redirecionado para a página Select Price Option
        E escolhe uma opção de plano e clica no botão Next
        E é redirecionado para a página Send Quote
        E o usuário preenche o formulário de envio e clica no botão Send
        Então o usuario vê um popup com a mensagem Sending e-mail success!
        E clica no botão Ok para fechar o popup



