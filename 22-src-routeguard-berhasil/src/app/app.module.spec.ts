import { TestBed } from "@angular/core/testing"
import { AppModule } from "./app.module"

describe('4. Angular test module', () => {
    
    beforeAll(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        })
    })

    it('AppModule should be initialized', () => {
        const module: AppModule = TestBed.inject(AppModule) // inject variabel module dengan AppModule

        expect(module).toBeTruthy() // cek apakah module ada
        expect(module).toBeInstanceOf(AppModule) // cek apakah module bagian dari AppModulle
    })
})