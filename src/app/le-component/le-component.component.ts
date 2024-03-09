import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-le-component',
  templateUrl: './le-component.component.html',
  styleUrl: './le-component.component.scss'
})
export class LeComponentComponent {
  public name: string = '';
  public email: string = '';
  public message: string = '';
  onSubmit():void{
    console.log("name eis",this.name)
  }
}
