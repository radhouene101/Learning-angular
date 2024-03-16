import { Component ,Input,Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-messages-details',
  templateUrl: './messages-details.component.html',
  styleUrl: './messages-details.component.scss'
})
export class MessagesDetailsComponent {
  @Input()
  message : any ={};
  @Input()
  ind : number=-1 ;


  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();
  onDelete():void{
    this.delete.emit(this.ind);
  }
}
