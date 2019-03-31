import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [NavbarComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [NavbarComponent, LayoutComponent]
})
export class SharedModule {
  static forRoot() {
      return { ngModule: SharedModule };
  }
}
