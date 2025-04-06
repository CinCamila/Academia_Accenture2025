# utf-8
# language: pt

Funcionalidade: automobileInsurance-02 - Cadastro de veículo com dados inválidos
    Cenário: Usuário tenta escolher uma data inválida 
        Dado que o usuário acessa o portal Tricentis Vehicle Insurance Application
        E clica no botão Automobile e é redirecionado para a página Enter Vehicle Data
        Quando o usuário tenta escolher uma data futura no campo Date of Manufacture
        Então o usuário vê a mensagem Must be today or somewhere in the past
        

