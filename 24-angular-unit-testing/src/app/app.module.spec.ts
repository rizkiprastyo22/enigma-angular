import { ComponentFixture, TestBed } from "@angular/core/testing"
import { AppComponent } from "./app.component"
import { AppModule } from "./app.module"

describe('4. Angular test module', () => {

    let fixture: ComponentFixture<AppComponent> // semua perlengkapan di dalam AppComponent diambil dan dimasukkan ke dalam fixture
    
    beforeAll(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        })

        fixture = TestBed.createComponent(AppComponent)
    })

    describe('4.1 AppModule should be ', () => {
        it('initialized', () => {
            const module: AppModule = TestBed.inject(AppModule) // inject variabel module dengan AppModule
    
            expect(module).toBeTruthy() // cek apakah module ada
            expect(module).toBeInstanceOf(AppModule) // cek apakah module bagian dari AppModulle
        })
    })
    
    describe('4.2 AppComponent should be ', () => {
        it('initialized', () => {
            const component: AppComponent = fixture.componentInstance
    
            expect(component).toBeTruthy() // cek apakah component ada
            expect(component).toBeInstanceOf(AppComponent) // cek apakah component bagian dari AppComponent
        })
    })

    describe('4.3 AppComponent should have ', () => {
        it('router-outlet', () => {
            const element: HTMLElement = fixture.nativeElement

            expect(element.querySelector('router-outlet')).toBeTruthy()
        })

        it('app-header', () => {
            const element: HTMLElement = fixture.nativeElement

            expect(element.querySelector('app-header')).toBeTruthy()
        })

        // div dapet karena yang diuji bukan cuman tag, tapi keseluruhan viewnya
        it('div', () => {
            const element: HTMLElement = fixture.nativeElement

            expect(element.querySelector('div')).toBeTruthy()
        })

        // makanya kalo underline pasti gagal
        xit('underline', () => {
            const element: HTMLElement = fixture.nativeElement

            expect(element.querySelector('u')).toBeTruthy()
        })
    })
})

