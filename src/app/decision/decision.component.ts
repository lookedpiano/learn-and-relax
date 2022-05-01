import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {

  mathRoute: string = '/equation';

  mathCompShown: boolean = true;

  mathCompShownFun() {
    this.mathCompShown = !this.mathCompShown;
    this.mathRoute = this.mathCompShown? 'equation': '';
    return this.mathRoute;
  }

  photoRoute: string = '/photos';

  photoCompShown: boolean = true;

  photoCompShownFun() {
    this.photoCompShown = !this.photoCompShown;
    this.photoRoute = this.photoCompShown? 'photos': '';
    return this.photoRoute;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
