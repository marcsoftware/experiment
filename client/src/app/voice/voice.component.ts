import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent {



isHidden=false;
title = 'learn';
math = Math;// hack since angular does not recognize Math on the html page,
question :string;
feedback :any;
page_count=1;

count=0;
now;

total_words=0;
done_count=0;
ans_key;

dict=[];

cycle_count=0;

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
    });



    this.page_count = parseInt(this.route.snapshot.paramMap.get("number"))-1;
    this.ans_key=' '+this.dict[this.page_count]+' ';

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
        if(this.blanks_count==0){
          if(this.cycle_count==this.cycle_size){
            this.goaback();
          }else{
            this.nextPage(); //automatically go to next page
          }
        }


  }

  //=================================================================
  //
  //=================================================================
  blanks_count=0;
  drawProgress(){

      this.now=this.now.replace(/ϯ/g,'');
      this.total_words=(this.ans_key.match(/\w+/g).length);

      try{
         this.blanks_count= this.now.match(/\#+/g).length;
      }catch(e){
        this.blanks_count=0;
      }
      this.done_count=this.total_words-this.blanks_count;
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

  //=================================================================
  //
  //=================================================================
  myDynamicColor='white';
  changeVisibility(){
    if(this.isHidden){
      this.myDynamicColor='blue';
    }else{
      this.myDynamicColor='white';
    }

  }

  //=================================================================
  //
  //=================================================================
  hardInput(event: any){

    let user_input=event.target.value.trim();

    user_input=user_input.replace(/[\.]+/g,"");

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

  //=================================================================
  //
  //=================================================================

  reset(){
    this.ans_key=' '+this.dict[this.page_count]+' ';
    this.drawQuestion();
    this.drawProgress();

  }

  //=================================================================
  //
  //=================================================================

  reveal(re: any){
      this.ans_key=this.ans_key.replace(re,' ϯ ');
      this.drawQuestion();
  }


  //=================================================================
  //
  //=================================================================

  //do this everytime user enter correct input
  correctInput(event){
      this.feedback='';
      this.count++;
      event.target.value=''; //clear the users input box


      this.drawQuestion();
  }

  //=================================================================
  //
  //=================================================================
remainder:any;
 drawRemainder(){
   this.remainder= this.dict.slice(this.page_count+1).join('\n');
 }

 //=================================================================
  //
  //=================================================================
  setZero(){
    this.cycle_count=0;
  }

  //=================================================================
  //
  //=================================================================
  deleteEmpty(){

    this.dict=this.dict.join(' ').replace(/\n/g,'').replace(/\./g,".\n").replace(/\n+/g,'\n').split("\n");
    this.dict= this.dict.filter(function (el) {

      return (el.match(/[a-z]/gi)) && (el !== 'undefined');
    });

    this.page_count = parseInt(this.route.snapshot.paramMap.get("number"))-1;
    this.ans_key=' '+this.dict[this.page_count]+' ';

    this.drawQuestion();

  }


  //=================================================================
  //
  //=================================================================
 cycle_size=4;
  nextPage(){
    this.cycle_count++;
    this.page_count++;

    if(this.cycle_count>this.cycle_size){
      this.cycle_count=this.cycle_size;
    }

    this.ans_key=' '+this.dict[this.page_count]+' ';
      this.drawQuestion();
      this.drawRemainder();
  }

  //=================================================================
  //
  //=================================================================
  prevPage(){
    this.cycle_count--;
    if(this.cycle_count<0){
      this.cycle_count=0;
    }
      this.page_count--;
      this.ans_key=' '+this.dict[this.page_count]+' ';
      this.drawQuestion();
      this.drawRemainder();
  }

  //=================================================================
  //
  //=================================================================
  //go back to start of cycle
  goaback(){
      if(!this.isHidden){
        this.cycle_count=0;
        this.page_count++;
        this.drawQuestion();
          return ;
      }
      this.page_count -=this.cycle_size;
      this.cycle_count=0;
      this.drawQuestion();
  }


  //=================================================================
  //
  //=================================================================
  nextCycle(){
    this.page_count+=(this.cycle_size-this.cycle_count)+1;
    this.cycle_count=0;
    this.reset();
    this.drawQuestion();
    this.drawRemainder();
  }
}


