function soma(numero1, numero2) {
  return numero1 + numero2
}

describe("Soma", () => {
  test("deveria retornar 2 quando temos 1 + 1", () => {
    const resultado = soma(1, 1)
    expect(resultado).toEqual(2)
  })

  test("deveria retornar 3 quando temos 1 + 2", () => {
    const resultado = soma(1, 2)
    expect(resultado).toEqual(3)
  })
})
