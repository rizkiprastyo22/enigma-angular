import { fakeAsync, tick } from '@angular/core/testing'
import { from, Observable } from 'rxjs'
import { AppComponent } from '../app.component'

class Person {
  name? : string
  age?: number
  constructor(name?:string,age?:number ){
    this.name = name
    this.age = age
  }
}

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

describe('2. Simple unit test scenario', () => {
  describe('2.1 Object and Array test scenario', () => {
    const actualPerson = {name: 'John', age: 20}
    const expectedPerson = {name: 'John', age: 20}
    const persons: Person[] = [
      new Person('John', 20),
      new Person('Adidas', 23)
    ] 
    const newPerson: Person = new Person('Jamie', 12)

    it('actual person should equal to expected person', () => {
      expect(actualPerson).toEqual(expectedPerson)
      // expect(actualPerson).toBeInstanceOf(Person) // ini error karena adanya constructor di Person
      expect(newPerson).toBeInstanceOf(Person)
    })

    xit('newly added person should be instance of Person', () => {
      const newPerson2: Person = {name: 'Tequila', age: 23} // jika kita instance seperti ini walaupun sudah menjadi bagian dari array tersebut, tetap hasilnya akan failed
      persons.push(newPerson2)

      for(const person of persons){
        expect(person).toBeInstanceOf(Person)
      }
    })

    it('empty person should be truthy', () => {
      const empty: Person = new Person() // walaupun object tidak ada nilainya, tetap dianggap truthy
      expect(empty).toBeTruthy()
    })
  })

  describe('2.2 FakeAsync and tick test scenario', () => {
    it('asynchronous test without fakeasync', (done) => { // callback
      let test: boolean = false
      // kalo testnya gini aja pasti dikira gaada expect, jadi harus pakai callback
      // setTimeout(() => {
      //   test = true
      //   expect(test).toBeTrue()
      // }, 1000)
      setTimeout(() => {
        test = true
        expect(test).toBeTrue()
        done() // panggil callback
      }, 1000)
    })

    it('asynchronous test with fakeasync', fakeAsync(() => { // callback
      let test: boolean = false
      // kalo testnya gini aja pasti dikira gaada expect, jadi harus pakai callback
      setTimeout(() => {
        test = true
        expect(test).toBeTrue()
      }, 1000)

      expect(test).toBeFalse()

      tick(800)
      expect(test).toBeFalse()

      tick(200) // diisi bebas asal harus lebih dari sama dengan 200
      expect(test).toBeTrue()
    }))
  })
})

function fetchCallBack(callback:(data:string)=>void): void {
  setTimeout(() => {
    callback('MandiriDap')
  }, 1000)
}

function fetchPromise(): Promise<string> {
  return new Promise((resolve, reject) => {
    fetchCallBack(resolve)
  })
}

function fetchObservable(): Observable<string>{
  return from(fetchPromise())
}

describe('3. Asynchronous unit test scenario', () => {
  const expected = 'MandiriDap'

  describe('3.1 Test scenario for fetchCallback', () => {
    it(`Callback actual should have value as ${expected}`, (done) => {
      fetchCallBack((actual) => {
        expect(actual).toMatch(expected)
        done()
      })
    })
  })

  describe('3.2 Test scenario for fetchPromise', () => {
    it(`Promise actual should have value as ${expected}`, (done) => {
      fetchPromise().then((actual) => {
        expect(actual).toMatch(expected)
        done()
      })
    })

    // ini yang async await (wajib menggunakan promise)
    it(`Promised actual should have value as ${expected}`, async() => {
      const actual = await fetchPromise()
      expect(actual).toMatch(expected) 
    })
  })

  describe('3.3 Test scenario for observable', () => {
    it(`Subscribe actual should have value as ${expected}`, (done) => {
      fetchObservable().subscribe((actual: any) => {
        expect(actual).toMatch(expected)
        done()
      })
    })

    it(`Subscribe actual should have value as ${expected}`, async() => {
      const actual = await fetchObservable().toPromise()
      expect(actual).toMatch(expected)
    })
  })
})

