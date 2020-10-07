import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss'],
  providers: [NgbDropdownConfig] // add NgbDropdownConfig to the component providers
})
export class Dashboard2Component implements OnInit {


  constructor(config: NgbDropdownConfig ) {
      config.autoClose = false;
  }
  ngOnInit(): void {
  }

}
