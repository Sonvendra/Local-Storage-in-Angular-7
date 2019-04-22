import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  public name = '';
  public getItem;
  public JsonItem;
  public myItem;
  public obj;
  public key;
  public item;

  title = 'Local Storage';

  constructor() { }

  setData() {
    // localStorage.setItem("email", "email@example.com");
    this.key = 'item';
    this.obj = [
      { id: 1, name: "name1", email: "email1@example.com" },
      { id: 2, name: "name2", email: "email2@example.com" },
      { id: 3, name: "name3", email: "email3@example.com" }
    ];
    localStorage.setItem(this.key, JSON.stringify(this.obj));
  }
  getData() {
    this.key = 'item';
    this.item = JSON.parse(localStorage.getItem(this.key));
    const value = localStorage.getItem("email");

    // alert(JSON.stringify(this.item));
    this.myItem = JSON.stringify(this.item);
    this.JsonItem = JSON.parse(this.myItem);

    console.log(this.JsonItem);
    // let myData = true;
    // console.log(myData);
    //alert(item[1].email);
  }
  deleteData() {
    if (confirm('Are you sure?')) {
      localStorage.removeItem("item");
    }
  }

  OnInit(){
    this.JsonItem.cols = [
      {field: 'id', header: 'Id'},
      {field: 'name', header: 'Name'},
      {field: 'email', header: 'Email'},
    ];
  }
  

}
