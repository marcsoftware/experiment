import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn';
  math = Math;// hack since angular does not recognize Math on the html page,
  question :string;
  feedback :any;


  count=0;
 now;



  ans_key;


   dict=[`
   git : saves snapshot of  project on or more branching paths.
   Repository : currently active project folder
   staging area:  place where changes are added before commiting
   commit : snapshot of changes
   branch : named pointer to a commit
   head : pointer to current branch
   remote : link to external repository

   git init
   git add .
   Git commit -m “message”
   git remote add origin URL
   git push -u origin master

    `];



  ngOnInit() {


    this.ans_key=this.dict[0];
      this.drawQuestion();
  }

  //displays question to user
  //renders stuff on screen
  drawQuestion(){

//
   // this.now=this.ans_key.replace(/[^Φ\W]/g,'Φ');
   //this.now=this.ans_key.replace(/ϯ[^ϯ]+ϯ|(\w)/g,'X');
   //this.now=this.ans_key.replace(/ϯ[^ϯ]+ϯ|(\w)/g,'X');
 let regex = /ϯ[^ϯ]+ϯ|(\w)/g;
   this.now = this.ans_key.replace(regex, function(m, group1) {
    if (!group1) return m;
    else return "#";
});

  this.now=this.now.replace(/ϯ/g,'');

  }

  //check users input, and five user right/wrong feedback
  checkInput(event: any){
    let user_input=event.target.value;
    if(user_input === ''){
      this.feedback='';
      return;
    }
    this.feedback=this.ans_key.includes(user_input);
    if(this.feedback){
      this.feedback='yes';
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

    event.target.value='';
    var replace = "(\\W)("+(user_input)+")(\\W)";
    var re = new RegExp(replace,"gi");

    this.feedback=this.ans_key.search(re);
    if(this.feedback !== -1){
      this.feedback='yes';
    }

    this.ans_key=this.ans_key.replace(re,'\$1ϯ\$2ϯ\$3');
    this.ans_key=this.ans_key.replace(/ϯ+/g,'ϯ');
    this.drawQuestion();
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

  }

}


