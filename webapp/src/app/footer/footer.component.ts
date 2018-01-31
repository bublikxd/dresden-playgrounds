import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ddp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear: number = new Date(Date.now()).getFullYear();

  constructor() { }

  ngOnInit() { }

}
