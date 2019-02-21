import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  observedParams: string;
  snapshotParams: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(qp => {
      console.log('observing params');
      this.observedParams = JSON.stringify(qp);
    });
  }

  ionViewWillEnter() {
    const qp = this.activatedRoute.snapshot.queryParams;
    this.snapshotParams = JSON.stringify(qp);
  }
}
