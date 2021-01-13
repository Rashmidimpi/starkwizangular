import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateQuizService } from "src/app/shared/create-quiz.service";

@Component({
  selector: 'app-review-quiz',
  templateUrl: './review-quiz.component.html',
  styleUrls: ['./review-quiz.component.css']
})
export class ReviewQuizComponent implements OnInit {

  constructor(public CreateQuizService: CreateQuizService, private route: ActivatedRoute) { }
  test_id = null;
  testdetails: any;
  questionlist: any;
  is_avilable = false;


  ngOnInit(): void {
    
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.test_id = params.test_id;
        console.log(this.test_id); 
        this.getTestdetails(this.test_id);
        
      }
    );

  }

  // getTestdetails(id) {
  //   this.CreateQuizService.getTestDetails(id).subscribe(
  //     res => {
  //       console.log(res);
  //       this.testdetails=res.testdeatils[0];
  //       this.questionlist=res.questionlist;
        
  //     }
  //   )
  // }

  getTestdetails(id) {
    this.CreateQuizService.getTestDetails(id).subscribe(
      res => {
        console.log(res);
        this.testdetails=res.testdeatils[0];
        this.questionlist=res.questionlist;
        console.log("tes details :: ",);
        
        if(this.testdetails.is_avilable == 'YES'){
          this.is_avilable= true;
        }
        
      }
    )
  }

  submitTest(test_id) {
    var action = "YES"
    this.CreateQuizService.submitTest(test_id, action).subscribe(
      res => {
        console.log(res);
        
      }
    )
  }

}
