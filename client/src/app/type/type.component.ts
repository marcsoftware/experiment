import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-root',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})


export class TypeComponent {





dict=[];



  //=================================================================
  //
  //=================================================================
  subject='1';
  ngOnInit() {
    this.subject = (this.route.snapshot.paramMap.get("subject"));
    

    this.drawQuestion();
  }

  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  //=================================================================
  //
  //=================================================================
  //displays question to user
  //renders stuff on screen
  drawQuestion(){

      (this.getAll());
  }

  //=================================================================
  //
  //=================================================================
  getAll() {
  
  
   var api='http://localhost:8080/demo/note/'+this.subject;
   
    this.http.get(api, { responseType: 'text' })
    .subscribe(data => {
      console.log(this);
      
      alert(data);
    });

  }
  
  //=================================================================
  // this read file from assets folder
  //=================================================================
  readFile(){
// TODO assets/+nameof file+.txt
    this.http.get(this.subject, { responseType: 'text' })
    .subscribe(data => {
      console.log(this);
      this.dict=data.split("`,`").join('\n').split('\n');
      alert(this.dict);
    });

  }


}


