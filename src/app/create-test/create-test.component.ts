import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  no_question: any;
  no_question_added = 0;
  addQuestion = false;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,
    // public CreateQuizService: CreateQuizService
    ) { }

  ngOnInit(): void {
  }

  createtestform = this.fb.group({
    test_name: [''],
    board: [''],
    class: [''],
    subject: [''],
    no_of_question: [''],
    level: ['']
  });

  addQuestionForm = this.fb.group({
    question: [''],
    correctanswer: [''],
    wronganswer1: [''],
    wronganswer2: [''],
    wronganswer3: [''],
    explanation: ['']
  });

  onCreateTest() {
    console.log(this.createtestform.value);

    this.no_question = this.createtestform.value.numberofquestion;

    this.createtestform.disable();
    this.addQuestion = true;
    this.openSnackBar("Test Created. Please add questions", "Ok");
    // this.CreateQuizService.createTest(this.createtestform.value).subscribe(res => {
    //   console.log(res);
    // });

    // this.creatAddForm(this.createtestform.value.numberofquestion);
  }
  onAddQuestion() {
    this.no_question_added = this.no_question_added + 1;
    if (this.no_question_added == this.no_question) {
      alert("all question added successfully")
    }
    else {
      this.addQuestionForm.reset();

      this.openSnackBar("Question " + this.no_question_added + " added successfully. Please add another questions", "Ok");

    }
    // throw new Error('Method not implemented.');
  }

  // snack bar code
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }
}
