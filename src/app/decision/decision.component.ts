import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {

  mathRoute: string = '/equation';
  mathCompShown: boolean = true;
  photoRoute: string = '/photos';
  photoCompShown: boolean = true;
  homeRoute: string = '/home';
  homeCompShown: boolean = true;

  mathCompShownFun() {
    this.mathCompShown = !this.mathCompShown;
    this.mathRoute = this.mathCompShown ? '/equation' : '';
    return this.mathRoute;
  }

  photoCompShownFun() {
    this.photoCompShown = !this.photoCompShown;
    this.photoRoute = this.photoCompShown ? '/photos' : '';
    return this.photoRoute;
  }

  homeCompShownFun() {
    this.homeCompShown = !this.homeCompShown;
    this.homeRoute = this.homeCompShown ? '/home' : '';
    return this.homeRoute;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
