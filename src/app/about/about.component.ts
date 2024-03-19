import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{
  constructor(
    private activatedRoute: ActivatedRoute

  ) {
  }

  ngOnInit(): void {
    console.log(this.activatedRoute);
  }
    param:any;
}
