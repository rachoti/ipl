import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  message="";
  constructor(private router: Router,public authService: AuthService) { }

  ngOnInit() {
    console.log(localStorage.getItem('token'));
  }
  onClickSubmit(){
      this.router.navigate(['/homepage']);
  //  }
    
  }
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
