const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/
// site em que pesquisei sobre o not.ToBe:
// https://jestjs.io/pt-BR/docs/using-matchers
describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
    expect(typeof productDetails).toBe('function');
    expect(typeof productDetails()).toBe('object');
    const funcaoProducts = productDetails();
      expect(Object.keys(funcaoProducts).length).toBe(2);
    expect(typeof productDetails()[0, 1]).toBe('object');
    expect(productDetails('Alcool Gel', 'Máscara')[0]).not.toBe(productDetails('Alcool Gel', 'Máscara')[1]);
    expect(productDetails('Alcool Gel', 'Máscara')[0, 1].details.productId).toMatch('123');
  });
});
