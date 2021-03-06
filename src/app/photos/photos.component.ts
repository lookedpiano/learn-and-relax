import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  url: string = "";

  constructor(private photoService: PhotosService) {
    this.fetchPhoto();
  }

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoService.getPhoto().subscribe((response) => {
      this.url = response.urls.small;
    });
  }

  ngOnInit(): void {

  }

}
