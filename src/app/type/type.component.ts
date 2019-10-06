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
  title = 'learn';
  math = Math;// hack since angular does not recognize Math on the html page,
  question :string;
  feedback :any;
 page_count=0;

  count=0;
 now;

 total_words=0;
 done_count=0;
  ans_key;


   dict=[`
 delete this stuff

`];

  //=================================================================
  //
  //=================================================================
subject='?';
  ngOnInit() {

    this.subject = (this.route.snapshot.paramMap.get("subject"));
    this.ans_key=this.dict[this.page_count];
      this.drawQuestion();
  }

  constructor(private route: ActivatedRoute,private http: HttpClient) { }
  //=================================================================
  //
  //=================================================================
  //displays question to user
  //renders stuff on screen
  drawQuestion(){

      //hide words that are not surrounded with  ϯ
      let regex = /ϯ[^ϯ]+ϯ|(\w)/g;
        this.now = this.ans_key.replace(regex, function(m, group1) {
          if (!group1) return m;
          else return "#";
      });

        this.drawProgress();
  }

  //=================================================================
  //
  //=================================================================
  drawProgress(){
      this.now=this.now.replace(/ϯ/g,'');
      this.total_words=(this.ans_key.match(/\w+/g).length);
      let blanks_count= this.now.match(/\#+/g).length;
      this.done_count=this.total_words-blanks_count;
  }


  //=================================================================
  //
  //=================================================================
  //show hint when user hit ?
  flag=false;
  hint(event:any){
        let user_input=event.target.value.trim();
        if(user_input===';'){
          this.now=this.ans_key.replace(/ϯ/g,'');
          this.flag=true;
        }else if(user_input===';;'){
          event.target.value='';
          this.flag=false;
              this.drawQuestion();
        }else{
          if(this.flag){
            this.flag=false;
              this.drawQuestion();
          }
        }
  }


  hardInput(event: any){

    let user_input=event.target.value.trim();

    user_input=user_input.replace(/[\.]+/g,"");
    console.log(user_input);
    if(user_input === ''){
      this.feedback='';

      return;
    }


    var replace = "(\\W)("+(user_input)+")(\\W)";
    var re = new RegExp(replace,"gi");

    this.feedback=this.ans_key.search(re);

    if(this.feedback !== -1){
      event.target.value='';
      this.feedback='yes';
    }else{

      this.feedback='no';
    }
      this.feedback+=' '+user_input;


    this.ans_key=this.ans_key.replace(re,'\$1ϯ\$2ϯ\$3');
    this.ans_key=this.ans_key.replace(/ϯ+/g,'ϯ');
    this.drawQuestion();
  }

  reset(){
    this.ans_key=this.dict[this.page_count];
    this.drawQuestion();
    this.drawProgress();
  }

  reveal(re: any){
      this.ans_key=this.ans_key.replace(re,' ϯ ');
      this.drawQuestion();
  }


  //do this everytime user enter correct input
  correctInput(event){
      this.feedback='';
      this.count++;
      event.target.value=''; //clear the users input box


      this.drawQuestion();
  }







  nextPage(){
    this.page_count++;
    this.ans_key=this.dict[this.page_count];
      this.drawQuestion();
  }

  prevPage(){
      this.page_count--;
      this.ans_key=this.dict[this.page_count];
      this.drawQuestion();
  }

}


