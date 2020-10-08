import { Component, OnInit, ViewChild } from "@angular/core";
import { DanhSachSanPhamComponent } from "../danh-sach-san-pham/danh-sach-san-pham.component";

@Component({
  selector: "app-demo-input-output",
  templateUrl: "./demo-input-output.component.html",
  styleUrls: ["./demo-input-output.component.scss"],
})
export class DemoInputOutputComponent implements OnInit {
  constructor() {}
  @ViewChild("tagDSSP") tagDSSP: DanhSachSanPhamComponent;
  ngOnInit(): void {}

  themSanPham = (sp: any) => {
    console.log(sp);
    this.tagDSSP.mangSanPham.push({
      ...sp,
      hinhAnh: "https://picsum.photos/200",
    });
  };
}
