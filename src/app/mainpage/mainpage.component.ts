import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  message="";
  constructor(private router: Router) { }

  ngOnInit() {
    $('#button').on('click', () => {
      $('#button').text('Coming soon!')
    })

    $('#button2').on('click', () => {
      $('#button2').text('Coming soon!')
    })
    var $item = $('.full_page'); 

    var $wHeight = $(window).height();
    $(window).on('resize', function (){
      $wHeight = $(window).height();
      $item.height($wHeight);

    }); 
    console.log(localStorage.getItem('token'));
  }
  onClickSubmit(){
      this.router.navigate(['/homepage']);
  //  }
    
  }
  
}
