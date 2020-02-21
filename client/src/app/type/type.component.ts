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


  //=================================================================
  //
  //=================================================================
subject='?';
  ngOnInit() {

    this.subject = (this.route.snapshot.paramMap.get("subject"));
    
      this.drawQuestion();
  }

  constructor(private route: ActivatedRoute,private http: HttpClient) { }
  //=================================================================
  //
  //=================================================================

  drawQuestion(){
    alert(this.subject);
   
  }

  //=================================================================
  //
  //=================================================================
  nextPage(){
    
  }


  //=================================================================
  //
  //=================================================================
  prevPage(){
      
  }

}


