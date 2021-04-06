import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuideService } from 'src/services/guide-service/guide.service';
import { Guideline } from '../models/guideline';

@Component({
  selector: 'app-clinical-care-detail',
  templateUrl: './clinical-care-detail.component.html',
  styleUrls: ['./clinical-care-detail.component.scss']
})
export class ClinicalCareDetailComponent implements OnInit {

  guideId = '';
  guideline: Guideline = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private guideService: GuideService,
    private http: HttpClient
  ) { }

  isPageFavorited = false;
  loadPage = false;
  favoriteKey: null | string = null;

  ngOnInit(): void {
    this.getGuideIdFromUrl();
    this.getFavorites();
  }

  getGuideIdFromUrl() {
    this.guideId = this.activatedRoute.snapshot.params['id'];
    this.getGuideById();
  }

  getGuideById() {
    if (this.guideId) {
      this.guideline = this.guideService.getGuidelineById(this.guideId);
    }
  }

  addToFavorites() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const postBody = { userId: userId, favoritedGuideId: this.guideId }
      this.http.post('https://bau-ispad-default-rtdb.firebaseio.com/favorites.json', postBody).subscribe(res => {
        this.isPageFavorited = true;
      });
    }
  }

  getFavorites() {
    this.http.get('https://bau-ispad-default-rtdb.firebaseio.com/favorites.json').subscribe((favorites: any) => {
      for (const key in favorites) {
        if (favorites[key].userId === localStorage.getItem('userId')) {
          this.isPageFavorited = true;
          this.favoriteKey = key;
        }
      }
      this.loadPage = true;
    });
  }

  removeFromFavorites() {
    if (this.favoriteKey) {
      this.http.delete(`https://bau-ispad-default-rtdb.firebaseio.com/favorites/${this.favoriteKey}.json`).subscribe(res => {
        this.isPageFavorited = false;
      });
    }
  }

}
