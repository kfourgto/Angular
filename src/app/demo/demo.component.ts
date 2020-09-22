import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo", //id, class, .... tagname(Sử dụng selector như tag name của component)
  templateUrl: "./demo.component.html", //Nơi hiển thị nội dung ui của component(giống hàm render)
  styleUrls: ["./demo.component.scss"], // Phần css của component này(component khác k sử dụng đc)
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
