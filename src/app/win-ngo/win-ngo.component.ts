import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-win-ngo',
  templateUrl: './win-ngo.component.html',
  styleUrls: ['./win-ngo.component.css']
})
export class WinNGoComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
