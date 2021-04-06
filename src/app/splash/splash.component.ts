import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoryService } from 'src/services/story-service/story.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private storyService: StoryService
  ) { }



  ngOnInit(): void {
    setTimeout(() => {
      localStorage.setItem('isFirstOpen', 'false');
      this.router.navigateByUrl('home');
    }, 1000)
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.storyService.isStoryVisible.next(true);
    });
  }
}
