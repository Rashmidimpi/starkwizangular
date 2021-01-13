import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CreateQuizService {
  API_URL ='https://rentopool.com/starkwiz/api/auth/';

  constructor(private http: HttpClient) { }

  createTest(testform): Observable <any> {
    var data = {
      test_name: testform.test_name,
      board: testform.board,
      subject: testform.subject,
      class: testform.class,
      no_of_question: testform.no_of_question,
      level: testform.level,
      created_by: 'user01'
    };
    return this.http.post(this.API_URL+'createTest21/', data);
  }

  addQuestion(questionForm, test_id): Observable <any>{

    var data = {
      test_id : test_id,
      question : questionForm.question,
      correct_answer : questionForm.correctanswer,
      wrong_answer_1 : questionForm.wronganswer1,
      wrong_answer_2 : questionForm.wronganswer2,
      wrong_answer_3 : questionForm.wronganswer3,
      explanation : questionForm.explanation,
    };
    return this.http.post(this.API_URL+'addQuestion21/', data);
  }

  getTestDetails(id: any) : Observable <any> {
    return this.http.get(this.API_URL+'getTestDetails21/'+id);
  }

  submitTest(test_id: any, action) {
    var data = {
      test_id : test_id,
      action : action
    }
    return this.http.post(this.API_URL+'submitTest21/', data);
  }
}
