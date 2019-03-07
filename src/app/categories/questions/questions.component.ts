import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material';
import { QuestionsAndAnswersComponent } from '../questions-and-answers/questions-and-answers.component';
import {QuestionModel} from './questionModel';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Array<any>;
  questions1: Array<any>;
  sub;
  selectedOption: string;
  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
  }
  setData(){
    if(this.sub === "Angular5"){
      this.questions =  [new QuestionModel({question: "What is angular?"}),
      new QuestionModel({question:"How is angular5 different from angular 1.x?"})];
    }else if(this.sub === "ReactJs"){
      this.questions =  [new QuestionModel({question:"What is ReactJs?"}),
      new QuestionModel({question:"How is angular5 different from ReactJs?"})];
    } else if(this.sub === "Vue.js"){
      this.questions =  [new QuestionModel({question:"What is Vue.js?"}),
      new QuestionModel({question:                                                                     "How is angular5 different from Vue.js?"})];
    }
  }
  openDialog(question) {
    // let dialogRef = this.dialog.open(QuestionsAndAnswersComponent, {
    //   height: '400px',
    //   width: '600px',
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = false;
    dialogConfig.width = "500px";
    dialogConfig.data= { dataKey : question };
    let dialogRef = this.dialog.open(QuestionsAndAnswersComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
       //console.log(this.questions, result);
       function findObject(sample){
         if(sample.question==result.actualQuestion){
           return sample.answer = result.answerInput;
         }
       }
       this.questions.find(findObject);
     });
  }
  ngOnInit() {
    this.route
    .data
    .subscribe((title) => {this.sub = title.title; });
    this.setData();
  }

}
