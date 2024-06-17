describe('Menu de navegação', () => {
    context('Resolução de 720p', () => {
      beforeEach(() => {
        // Roda os testes como se fossem em um monitor de 720p de resolução
        cy.viewport(1280, 720)
        cy.url('www.google.com.br')
      })
  
      // seu teste aqui
    })
  
    // context('Resolução do iphone-5 ', () => {
    //   beforeEach(() => {
    //     // roda os testes como se fossem em um dispositivo com a resolução de um iphone-5
    //     cy.viewport('iphone-5')
    //   })
  
    //   // seu teste aqui
    // })
  })