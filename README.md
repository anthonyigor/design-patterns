# DESIGN PATTERNS

## Singleton

- Intenção: Garantir que uma classe tenha somente uma instância no programa e fornecer um ponto de acesso global para a mesma

- Geralmente usado para acesso a recursos compartilhados, como acesso a banco de dados, interface gráfica, sistema de arquivos, logger e mais

- Pode ser usado para substituir variáveis globais

- Implementação: 
*Criar uma classe com um atributo que será a instancia dessa mesma classe. Esse atributo deve ser privado e estático. O atributo será do mesmo tipo da classe ou null, e iniciará como null;
*Colocar o construtor como private para não permitir uso do "new";
*Criar um método get que retorna a instância da própria classe. Se a instância for null (primeira execução), ela fará a instanciação, caso contrário retorna o mesmo atributo;
- Exemplo de código em src/creational/singleton

## Builder

- Sugere a separação do código que cria e o código que usa o objeto

- Trata da criação de objetos complexos, por exemplo, objetos com construtor muito extenso ou que recebe vários parâmetros, composição de objetos (composite) ou algoritmo de criação do objeto complexo

- Permite a criação de um objeto em etapas

- Padrão complexo

O padrão normalmente é composto por quatro componentes principais:

- Builder (Construtor): Define os métodos necessários para criar as diferentes partes do objeto complexo. Cada método retorna o próprio Builder, permitindo o encadeamento de chamadas (chamado de fluent interface).

- Concrete Builder (Construtor Concreto): Implementa a interface do Builder e realiza a construção real do objeto.
Também mantém o objeto construído em um estado intermediário.

- Product (Produto): O objeto complexo que está sendo construído.
Normalmente, é uma classe com muitos atributos que precisam ser configurados.

- Director (Diretor) [opcional]: Responsável por controlar o processo de construção.
Chama os métodos do Builder em uma sequência específica para criar o objeto.
