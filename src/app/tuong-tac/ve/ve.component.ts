import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-ve",
  templateUrl: "./ve.component.html",
  styleUrls: ["./ve.component.scss"],
})
export class VeComponent implements OnInit {
  @Input() gheInput: any = [];
  dangDat: Boolean = false;
  constructor() {}

  @Output("gheDuocDat") gheDuocDat = new EventEmitter<Object>();

  ngOnInit(): void {}
  datVe = (gheClick: any) => {
    this.dangDat = !this.dangDat;
    this.gheDuocDat.emit(gheClick);
  };
}
