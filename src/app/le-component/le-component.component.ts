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
  isSubmitted = false;
  messages: Array<any>=[];
  onSubmit():void{
    this.messages.push({
      "name":this.name,
      "email":this.email,
      "message":this.message
    })
    this.isSubmitted= true;
    console.log(this.messages)
  }
}
