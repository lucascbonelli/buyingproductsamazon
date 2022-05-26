import SignupFactory from '../factories/SignupFactory'


describe ('home page', function(){
 
//    var testCase = [{
//        searchName : 'Cadeira gamer',
//        filterType : 'div[id="reviewsRefinements"] li[id="p_72/17833785011"]',
//        productName : 'Cadeira Gamer EC3 Preta THUNDERX3',           
//        hasCoverage : true
//
//    },
//    {
//        searchName : 'Monitor 32 polegadas',
//        filterType : 'div[id="departments"] li[id="n/16364756011"]',
//        productName : 'Samsung Monitor Uhd 31,5" Flat',
//        hasCoverage : false
//
//    },
//    {
//        searchName : 'Teclado mecaninco',
//        filterType : 'div[id="brandsRefinements"] li[id="p_89/Redragon"]',
//        productName : 'Teclado gaming mecanico corsair k70 rgb preto - ch-9109010-na',
//         hasCoverage : false,
//
//    },
//    {
//        searchName : 'Mouse gamer',
//        filterType :  'div[id="deliveryRefinements"] li[id="p_n_free_shipping_eligible/19171733011"]',
//        productName : 'Mouse Gamer Logitech G502 HERO com RGB LIGHTSYNC, Ajustes de Peso, 11 Botões Programáveis e Sensor HERO 25K',
//        hasCoverage : true
//        
//    },
//    {
//        searchName : 'mesa gamer',
//        filterType : 'div[id="reviewsRefinements"] li[id="p_72/17833785011"]',
//        productName : 'Mesa Gamer ED5 Preta THUNDERX3',
//        hasCoverage : false
//    },
//    {
//        searchName : 'headphone gamer',
//        filterType : 'div[id="reviewsRefinements"] li[id="p_72/17833785011"]',
//        productName : 'Headset Gamer 7.1 Mic PC Console e Celular Haiz',
//        hasCoverage : false
//    },
//    {
//        searchName : 'mousepad gamer',
//        filterType : 'div[id="reviewsRefinements"] li[id="p_72/17833785011"]',
//        productName : 'Mouse Pad de Tecido Logitech G240 para Jogos de Baixo DPI',
//        hasCoverage : false
//    }
//]
    
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