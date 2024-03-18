import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {
  messages : Array<any>= [];
  constructor() {
    this.init();
  }

  init(): void{
    this.insert({
      name:'moudir',
      email:'moudir@moudiir.moudir',
      message:'idara is moudir'
    })
    this.insert({
      name:'morg',
      email:'moudir@moudiir.moudir',
      message:'morg message'
    })
    this.insert({
      name:'saly',
      email:'moudir@moudiir.moudir',
      message:'saly message'
    })
  }

  insert(message:{name:string,email:string,message:string}):void{
    this.messages.push(message);
  }
  getAllMessages(){
    return this.messages
  }
  deleteMessage(index : number){
    this.messages.splice(index,1)
  }
}
