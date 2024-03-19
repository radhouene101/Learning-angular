import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  // param:any;
  // extra:any;
  constructor(
    private activatedRoute: ActivatedRoute

  ) {
  }

 /* ngOnInit(): void {
    console.log(this.activatedRoute);
    this.param=this.activatedRoute.snapshot.params['username']
    this.extra=this.activatedRoute.snapshot.queryParams['password']
  }*/

}
