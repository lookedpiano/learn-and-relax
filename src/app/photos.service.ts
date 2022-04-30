import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse {
  urls: {
    small: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<UnsplashResponse>(
      "https://api.unsplash.com/photos/random?query=cats", {
      headers: {
        Authorization: "Client-ID 6lNWTIBN-3FfecHm7-GHD5gbPZvlgravYdkMfzDrw_k"
      }
    })
  }
}
