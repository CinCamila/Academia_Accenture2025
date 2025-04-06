# utf-8
# language: pt

Funcionalidade: automobileInsurance-02 - Cadastro de veículo incompleto
    Cenário: Usuário tenta seguir sem preencher os campos obrigatórios do formulário
        Dado que o usuário acessa o portal Tricentis Vehicle Insurance Application
        E clica no botão Automobile e é redirecionado para a página Enter Vehicle Data
        Quando o usuário clica em Next até ser redirecionado para a página Select Price Option
        Então o usuário vê a mensagem Please, complete the first three steps to see the price table
        

