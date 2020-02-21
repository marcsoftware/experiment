import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



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
    this.subject="assets/"+this.subject+".txt"

    this.http.get(this.subject, { responseType: 'text' })
    .subscribe(data => {
      console.log(this);
      this.dict=data.split("`,`").join('\n').split('\n');
      alert(this.dict);
    });

    this.drawQuestion();
  }

  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  //=================================================================
  //
  //=================================================================
  //displays question to user
  //renders stuff on screen
  drawQuestion(){

  


  }



}


