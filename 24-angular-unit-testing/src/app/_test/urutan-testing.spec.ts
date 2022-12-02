describe('5. Urutan Test after, before', ()=> {
    beforeAll(()=> {
      console.log('Before All')
    })
  
    beforeEach(()=>{
      console.log('Before each')
    })
  
    afterAll(()=>{
      console.log('After All')
    })
  
    afterEach(()=> {
      console.log('After Each')
    })
  
    it('nyoba 1', ()=> {
      console.log('it 1')
    })
  
    it('nyoba 2', ()=> {
      console.log('it 2')
    })
  
    it('nyoba 3', ()=> {
      console.log('it 3')
    })
  })