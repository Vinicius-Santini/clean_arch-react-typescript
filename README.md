## Objetivo
Este projeto visa demonstrar a aplicação da Clean Architecture e alguns princípios SOLID
em uma aplicação frontend.

Como o maior foco deste projeto é implementar a arquitetura e demonstrar que a mesma é funcional, o projeto por enquanto possui apenas a listagem dos jogos fornecidos pela RAWG API e, ao clicar no título de cada jogo, a navegação para a tela do jogo em questão.

## A arquitetura:

![MyArchitecture drawio](https://github.com/user-attachments/assets/883bd1a9-fad3-4d8c-bb9a-83b69a36b14a)

O diagrama acima mostra as camadas em que o projeto está separado e suas dependências, abaixo você encontrará uma explicação mais detalhada do objetivo e função de cada camada.

**Infra**
-  A camada de Infra é utilizada para implementar os protocolos definidos na Data layer.
-  Esta camada depende da camada de Data e de uma biblioteca externa, no caso o Axios.
- Devido a apenas implementar o que foi definido na Data layer, aqui podemos definir como será feita a implementação sem impactar as outras camadas, poderíamos, por exemplo, parar de utilizar axios e passar à utilizar outra alternativa sem gerar impacto em outras camadas.

**Data**
- A camada de Data faz a implementação dos casos de uso, possuindo a classes que vão implementar os protocolos da Domain layer.
- A Data layer depende da Domain layer.
- Ela não se comunica com a API diretamente, apenas define o protocolo que fará o acesso à API.

**Domain**
- A Domain layer possui a regra de negócio. Criando a regra de negócio como interface, apenas define o que a interface precisa e o que ela deve retornar.
- Define apenas a regra, e não o como.
- Independente das outras camadas.

**Presentation**
- Renderiza a view, cuida da navegação e do gerenciamento de estado.
- Depende de um caso de uso do Domain.

**Main**
- Depende de todas camadas.
- Utiliza design patterns, como factories.
- Tem classes que geram instâncias de outras classes
- Tem o index da aplicação.
- Faz Injeção de Dependência.
