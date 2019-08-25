import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './navbar/navbar.component'
import { RouterModule } from '@angular/router'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { LayoutComponent } from './layout/layout.component'
import { FooterComponent } from './footer/footer.component'
import { BreadcumbComponent } from './components/breadcumb/breadcumb.component'

@NgModule({
  declarations: [NavbarComponent, LayoutComponent, FooterComponent, BreadcumbComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [NavbarComponent, LayoutComponent, BreadcumbComponent]
})
export class SharedModule {
  static forRoot() {
    return { ngModule: SharedModule }
  }
}
