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