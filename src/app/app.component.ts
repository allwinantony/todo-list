import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  list:any[] = [];
  addTask(item:string){
    this.list.push({id:this.list.length, name:item})  
    event?.preventDefault();
  }

  removeTask(rId:number){
    console.log(rId)
    this.list = this.list.filter(item=>item.id!==rId)
  }

}
