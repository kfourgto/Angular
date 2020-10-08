import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { SanPhamComponent } from "../san-pham/san-pham.component";

@Component({
  selector: "app-danh-sach-san-pham",
  templateUrl: "./danh-sach-san-pham.component.html",
  styleUrls: ["./danh-sach-san-pham.component.scss"],
})
export class DanhSachSanPhamComponent implements OnInit {
  sanPhamChiTiet: any = {
    ma: 1,
    ten: "Iphone",
    gia: 1000,
    hinhAnh: "https://picsum.photos/200",
  };

  sanPham: any = {
    ma: 1,
    ten: "Iphone",
    gia: 1000,
    hinhAnh: "https://picsum.photos/200",
  };

  mangSanPham: any = [
    { ma: 1, ten: "Iphone", gia: 1000, hinhAnh: "https://picsum.photos/202" },
    { ma: 2, ten: "IphoneX", gia: 2000, hinhAnh: "https://picsum.photos/2004" },
    {
      ma: 3,
      ten: "Iphone Pro Max",
      gia: 3000,
      hinhAnh: "https://picsum.photos/2300",
    },
  ];

  @ViewChildren(SanPhamComponent) dsAppSanPham: QueryList<SanPhamComponent>;

  constructor() {}

  ngOnInit(): void {}

  xemCT = (spClick: any) => {
    this.sanPhamChiTiet = spClick;
  };
  thayDoiGia = () => {
    this.dsAppSanPham.toArray()[0].sanPham.gia = 5000;
    this.dsAppSanPham.forEach((tagSp: SanPhamComponent, index: number) => {
      tagSp.sanPham.ten = "Cybersoft";
    });
  };
}
