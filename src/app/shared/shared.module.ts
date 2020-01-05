import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './navbar/navbar.component'
import { RouterModule } from '@angular/router'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { LayoutComponent } from './layout/layout.component'
import { FooterComponent } from './footer/footer.component'
import { BreadcumbComponent } from './components/breadcumb/breadcumb.component'
import { FormsModule } from '@angular/forms'
import { PaginationComponent } from './components/pagination/pagination.component'
import { CalDateFormatPipe } from './utils/cal-date-format.pipe'
import { UtilsService } from './utils/utils.service'

@NgModule({
  declarations: [NavbarComponent, LayoutComponent, FooterComponent, BreadcumbComponent, PaginationComponent, CalDateFormatPipe],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule
  ],
  exports: [NavbarComponent, LayoutComponent, BreadcumbComponent, PaginationComponent, CalDateFormatPipe]
})
export class SharedModule {
  static forRoot() {
    return { ngModule: SharedModule, providers: [UtilsService] }
  }
}
