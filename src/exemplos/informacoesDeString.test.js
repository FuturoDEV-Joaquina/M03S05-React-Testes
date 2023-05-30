// Utilizar TDD para criar uma função que receba uma string
// e devolva um objeto com as informações:
// quantos caracteres a string possui (exemplo: caracteres: 3)
// qual seu primeiro caracter
// e qual seu último caracter

function stringInfo(texto) {
  const caracteres = texto.length;
  const primeiroCaracter = texto[0];
  const ultimoCaracter = texto[texto.length - 1];

  const info = {
    caracteres,
    primeiroCaracter,
    ultimoCaracter,
  }

  return info;
}

describe("String Info", () => {
  test("deveria retornar um objeto com as informaçõees de quantos carecteres a string possui", () => {
    const resultado = stringInfo("abc");
    expect(resultado).toEqual(
      expect.objectContaining({
        caracteres: 3,
      })
    );
  });

  test("deveria retornar um objeto com as informaçĩes de qual seu primeiro caracter", () => {
    const resultado = stringInfo("abc");
    expect(resultado).toEqual(
      expect.objectContaining({
        primeiroCaracter: "a",
      })
    );
  });

  test("deveria retornar um objeto com as informaçĩes de qual seu último caracter", () => {
    const resultado = stringInfo("abc");
    expect(resultado).toEqual(
      expect.objectContaining({
        ultimoCaracter: "c",
      })
    );
  });

  test("deveria retornar um objeto com as informações de quantos caracteres possui, qual seu primeiro caracter e qual seu último caracter", () => {
    const resultado = stringInfo("abc");
    expect(resultado).toEqual({
      caracteres: 3,
      primeiroCaracter: "a",
      ultimoCaracter: "c",
    });
  });
});
