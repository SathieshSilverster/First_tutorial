import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  data: any;

  constructor() { }

  ngOnInit() {
    this.data = localStorage.getItem('data') 
  }

}
