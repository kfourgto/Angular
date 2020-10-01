import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-structural",
  templateUrl: "./structural.component.html",
  styleUrls: ["./structural.component.scss"],
})
export class StructuralComponent implements OnInit {
  status: Boolean = true;
  color: String = "ogrange";
  fontSize: Boolean = false;
  fontColor: Boolean = false;
  numSize: number = 20;

  num: number = 2;

  userList: any = [
    {
      id: 1,
      name: "Van A",
      avatar: `https://api.adorable.io/avatars/225/VanA`,
    },
    {
      id: 2,
      name: "Van b",
      avatar: `https://api.adorable.io/avatars/225/Vanb`,
    },
    {
      id: 3,
      name: "Van c",
      avatar: `https://api.adorable.io/avatars/225/Vanc`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  anHien(): void {
    this.status = !this.status;
  }
  setNumber(): void {
    this.num += 1;
  }

  changeColor(color): void {
    this.color = color;
  }

  handleSize = () => {
    this.fontSize = !this.fontSize;
  };
  handleColor = () => {
    this.fontColor = !this.fontColor;
  };

  sizeup = () => {
    this.numSize += 1;
  };

  sizedown = () => {
    this.numSize -= 1;
  };

  userResult = [...this.userList];
  search = (txt: string) => {
    txt = txt.toLowerCase().trim();

    this.userResult = this.userList.filter(
      (user) => user.name.toLowerCase().trim().search(txt) !== -1
    );
  };
}
