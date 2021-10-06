import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/services/authenService/authen.service';

@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.css']
})
export class AuthenComponent implements OnInit {

  messageHealthCheck = '';

  constructor(private authenService: AuthenService) { }

  ngOnInit(): void {
    this.authenService.getHealthCheck().subscribe(result => {
      this.messageHealthCheck = result.message;
    })
  }

}
