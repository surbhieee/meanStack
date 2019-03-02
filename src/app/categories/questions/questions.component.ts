import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material';
import { QuestionsAndAnswersComponent } from '../questions-and-answers/questions-and-answers.component'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Array<any>;
  sub;
  selectedOption: string;
  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
  }
  setData(){
    if(this.sub === "Angular5"){
      this.questions =  ["What is angular?", "How is angular5 different from angular 1.x?"];
    }else if(this.sub === "ReactJs"){
      this.questions =  ["What is ReactJs?", "How is angular5 different from ReactJs?"];
    } else if(this.sub === "Vue.js"){
      this.questions =  ["What is Vue.js?", "How is angular5 different from Vue.js?"];
    }
  }
  openDialog() {
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
    this.dialog.open(QuestionsAndAnswersComponent, dialogConfig);
  }
  ngOnInit() {
    this.route
    .data
    .subscribe((title) => {this.sub = title.title; });
    this.setData();
  }
}
