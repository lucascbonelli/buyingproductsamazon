import SignupFactory from '../factories/SignupFactory'


describe ('home page', function(){
 
   
    var testCase = SignupFactory.products()
 
    it('Abrir app', ()=>{
        cy.visit('/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    
    })
    it('Pesquisar itens', function(){
       for (let i=0; i < testCase.length; i++){
            cy.get('input[id="twotabsearchtextbox"]').type(testCase[i].searchName)
            cy.get('input[id="nav-search-submit-button"]').click()
            cy.get(testCase[i].filterType).click()
            
            cy.contains(testCase[i].productName).should('be.visible').click()
            cy.get('#add-to-cart-button').click()
            if (testCase[i].hasCoverage){
                cy.get('span[id="attachSiNoCoverage"]').click()
            }

            cy.wait(2000)
        }

        cy.get('div[id="nav-cart-count-container"]').click()

    })

})