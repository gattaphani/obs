import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userData:object
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.getUserdata().then(data=>{
      this.userData=data;
      console.log(this.userData);
    })
  }

}
