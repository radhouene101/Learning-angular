import {Component, signal,inject} from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

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
  private service:MyFirstService=inject(MyFirstService);
  constructor(
  ) {
    this.messages=this.service.getAllMessages();
    this.isSubmitted=this.messages.length>0;
  }

  messages: Array<any>=[];
  onSubmit():void{
    this.service.insert({
      "name":this.name,
      "email":this.email,
      "message":this.message
    })
    this.isSubmitted= true;
    console.log(this.messages)
  }

  deleteMessage(index: number) {
    this.service.deleteMessage(index);
  }
}
