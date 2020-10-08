import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-san-pham",
  templateUrl: "./san-pham.component.html",
  styleUrls: ["./san-pham.component.scss"],
})
export class SanPhamComponent implements OnInit {
  @Input() sanPham: any = {};

  @Output("suKienXCT") eventXemChiTIet = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  xemChiTiet = (spClick: any) => {
    this.eventXemChiTIet.emit(spClick);
  };
}
