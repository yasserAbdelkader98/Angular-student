import { Component, OnInit } from '@angular/core';
import { Speaker } from 'src/_models/speaker';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css'],
})
export class SpeakerComponent implements OnInit {
  newSpeaker = new Speaker(0, '', '', '', '');

  allSpeakers = [
    {
      Speaker: new Speaker(
        1,
        'yasser',
        'alexandria',
        'speaker',
        './assets/images/1.jpg'
      ),
    },
    {
      Speaker: new Speaker(
        2,
        'mohamed',
        'alexandria',
        'Admin',
        './assets/images/2.jpg'
      ),
    },
  ];

  hideDiv: boolean = false;

  showDetails(
    id: number,
    name: string,
    address: string,
    role: string,
    image: string
  ) {
    this.hideDiv = !this.hideDiv;
    this.newSpeaker.id = id;
    this.newSpeaker.name = name;
    this.newSpeaker.address = address;
    this.newSpeaker.role = role;
    this.newSpeaker.image = image;
  }

  showEditButton: boolean = false;
  showAddButton: boolean = true;

  edit(id: number, name: string, address: string, role: string, image: string) {
    this.showEditButton = true;
    this.showAddButton = false;

    for (let index = 0; index < this.allSpeakers.length; index++) {
      if (this.allSpeakers[index].Speaker.id == id) {
        this.newSpeaker.id = id;
        this.newSpeaker.name = name;
        this.newSpeaker.address = address;
        this.newSpeaker.role = role;
        this.newSpeaker.image = image;
      }
    }
  }

  confirmEdit() {
    for (let index = 0; index < this.allSpeakers.length; index++) {
      if (this.allSpeakers[index].Speaker.id == this.newSpeaker.id) {
        this.allSpeakers[index].Speaker.name = this.newSpeaker.name;
        this.allSpeakers[index].Speaker.address = this.newSpeaker.address;
        this.allSpeakers[index].Speaker.role = this.newSpeaker.role;
        this.allSpeakers[index].Speaker.image = this.newSpeaker.image;
      }
    }

    return [
      (this.showEditButton = false),
      (this.showAddButton = true),
      (this.newSpeaker.id = 0),
      (this.newSpeaker.name = ''),
      (this.newSpeaker.address = ''),
      (this.newSpeaker.role = ''),
      (this.newSpeaker.image = ''),
    ];
  }

  remove(n: number) {
    for (let i = 0; i < this.allSpeakers.length; i++) {
      if (this.allSpeakers[i].Speaker.id == n) {
        this.allSpeakers.splice(i, 1);
      }
    }
  }

  save() {
    this.allSpeakers.push({
      Speaker: new Speaker(
        this.newSpeaker.id,
        this.newSpeaker.name,
        this.newSpeaker.address,
        this.newSpeaker.role,
        this.newSpeaker.image
      ),
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
