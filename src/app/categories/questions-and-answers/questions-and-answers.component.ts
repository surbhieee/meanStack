import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-questions-and-answers',
  //template: '<p> Pop Up </p>',
  templateUrl: './questions-and-answers.component.html',
  styleUrls: ['./questions-and-answers.component.css']
})
export class QuestionsAndAnswersComponent implements OnInit {
question;
answer;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
this.question = data.dataKey;
   }

  ngOnInit() {
  }


}
