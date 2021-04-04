import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuideService } from 'src/services/guide-service/guide.service';
import { StoryService } from 'src/services/story-service/story.service';
import { Guideline } from '../models/guideline';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, AfterViewInit {

  guides: any[] = [];
  userId: string | null = null;

  constructor(
    private storyService: StoryService,
    private http: HttpClient,
    private guideService: GuideService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.getFavorites();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.storyService.isStoryVisible.next(false);
    })
  }

  getFavorites() {
    if (this.userId) {
      this.http.get('https://bau-ispad-default-rtdb.firebaseio.com/favorites.json').subscribe((res: any) => {
        const favoriteIds: any[] = [];
        for (const key in res) {
          if (res[key].userId === localStorage.getItem('userId')) {
            favoriteIds.push(res[key].favoritedGuideId)
          }
        }
        this.guides = this.guideService.getGuidelines().filter(item => favoriteIds.includes(item.id));
        console.log(this.guides);
      });
    }
  }

  onGuideSelect(guide: Guideline) {
    if (guide.id) {
      this.router.navigateByUrl(`clinical-care-detail/${guide.id}`)
    }
  }

  getUserId() {
    this.userId = localStorage.getItem('userId');
  }
}
