## Objective
This project aims to demonstrate the application of Clean Architecture and some SOLID principles in a *React/Typescript* application.

Since the main focus of this project is to implement the architecture and prove its functionality, the project currently only includes a listing of games provided by the RAWG API and, when clicking on a game's title, navigates to the respective game details screen.

## The Architecture:

![MyArchitecture drawio](https://github.com/user-attachments/assets/883bd1a9-fad3-4d8c-bb9a-83b69a36b14a)

The diagram above illustrates the layers in which the project is structured and their dependencies. Below, you will find a more detailed explanation of the purpose and function of each layer.

**Infra**

The Infra layer is responsible for implementing the protocols defined in the Data layer.
- This layer depends on the Data layer and an external library (in this case, Axios).
- Since it only implements what is defined in the Data layer, we can define how the implementation will be done without affecting other layers. For example, we could replace Axios with another alternative without impacting the other layers.

**Data**

The Data layer is responsible for implementing use cases, containing the classes that will implement the protocols from the Domain layer.
- The Data layer depends on the Domain layer.
- It does not communicate directly with the API; it only defines the protocol that will handle API access.
  
**Domain**

The Domain layer contains the business logic.
- By defining business rules as interfaces, it only specifies what the interface needs and what it should return.
- It defines only the rules, not the implementation details.
- It is independent of other layers.

**Presentation**

Responsible for rendering the view, handling navigation, and managing state.
- Depends on a use case from the Domain layer.

**Main**

- Depends on all layers.
- Uses design patterns, such as factories.
- Contains classes that instantiate other classes.
- Includes the application’s index file.
- Responsible for Dependency Injection.
