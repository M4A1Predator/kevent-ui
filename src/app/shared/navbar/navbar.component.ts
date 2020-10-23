import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { URL } from 'src/app/constants/url'
import { SearchParams } from 'src/app/main/models/search-params'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {

  keyword = ''
  isCollapsed = true

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((p: SearchParams) => {
      this.keyword = p.q
    })
  }

  onChange(e: any) {
    const keyword = e.target.value
    this.keyword = keyword
  }

  onSearch(e: any) {
    e.preventDefault()
    const queryParams = {
      q: this.keyword
    }
    this.router.navigate([URL.events], { queryParams })
  }

}
