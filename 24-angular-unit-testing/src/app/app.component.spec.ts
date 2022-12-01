import { AppComponent } from './app.component'

describe('1. App component, introduction', () => {
  describe('1.1 App component should be exist', () => {
    it('1.1.1 App component should be truthy', () => {
      let component = new AppComponent()
      let test = ''
      expect(component).toBeTruthy()
      // expect(test).toBeTruthy() // ini pasti fail
    })
  }),

  describe('1.2 Unit testing using matchers', () => {
    let number: number = 1
    let string: string = 'string'
    it('1.2.1 Number should be equal to one', () => {
      expect(number).toEqual(1)
    }),

    it('1.2.2 string should equal to string', () => {
      expect(string).toEqual('string')
    })
  })
})