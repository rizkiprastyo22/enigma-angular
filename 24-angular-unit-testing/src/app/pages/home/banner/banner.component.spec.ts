import { CommonModule } from "@angular/common"
import { DebugElement } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser"
import { BannerComponent } from "./banner.component"

describe('6. Banner component test scenario', () => {

    let fixture: ComponentFixture<BannerComponent> // semua perlengkapan di dalam AppComponent diambil dan dimasukkan ke dalam fixture
    let component: BannerComponent
    let element: HTMLElement
    let debugElement: DebugElement
    
    beforeAll(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule],
            declarations: [BannerComponent]
        })

        fixture = TestBed.createComponent(BannerComponent)
    })

    beforeEach(() => {
      fixture.detectChanges()
      component = fixture.componentInstance
      element = fixture.nativeElement
      debugElement = fixture.debugElement
    })

    describe('6.1 Banner ', () => {
      it('component should be initialized', () => {
        expect(component).toBeTruthy()
        expect(component).toBeInstanceOf(BannerComponent)
      })

      it('component View Element should be created', () => (
        expect(element).toBeTruthy() // kalo ga pake tanda kurung, nanti ada has no expectation, berarti itu tanda sebenernya toBeTruthy ga jalan
      ))
    })

    describe('6.2 Banner component should have the required properties and tag', () => {
      const expectedBannerText: string = 'We focus on training and teaching our clients the fundamentals and advance programming languages that suitable for the industry'

      // it(`banner text should have value as "${expectedBannerText}"`, () => {
      //   expect(component.banner).toMatch(expectedBannerText)
      // })

      // cara lain dengan menguji dari component html
      it(`banner text should have value as "${expectedBannerText}"`, () => {
        const banner = element.querySelector('.load') as Element

        expect(banner).toBeTruthy()
        expect(banner.textContent).toContain(component.banner)
      })

      it('banner text-warning should have warning class', () => {
        const warning = debugElement.query(By.css('.text-warning'))

        expect(Object.values(warning.classes)).toContain(true)
      })
    })

    
})

