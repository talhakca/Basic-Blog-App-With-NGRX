import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoryService } from 'src/services/story-service/story.service';
import { TitleService } from 'src/services/title-service/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'bau-ispad';
  dragToggleDistance = 5;
  isFirstOpen = true;
  storyVisible = false;

  menuData = [
    {
      title: 'Home',
      value: 'home',
      isLeaf: true
    },
    {
      title: 'Hot Topics',
      value: 'hot-topics'
    },
    {
      title: 'Clinical Care Resources',
      value: 'clinical-care-resources',
      isLeaf: false,
      child: [
        {
          title: `Guidelines`,
          value: 'clinical-care'
        },
        {
          title: 'Diabetes Teaching Toolkit',
          value: 'diabetes-teaching-toolkit'
        },
        {
          title: 'Under Resourced Countries',
          value: 'under-resourced-countries'
        },
        {
          title: 'Useful Links',
          value: 'useful-links'
        }
      ]
    },
    {
      title: 'E-learning',
      value: 'e-learning'
    },
    {
      title: 'Webinars & Videos',
      value: 'webinars-videos'
    }
  ];

  lowerSidebarData = [
    {
      title: 'Favorites',
      value: 'favorites'
    },
    {
      title: 'Contact',
      value: 'contact'
    }
  ];

  menuValue = [];

  storyData: any[] = [];

  onOpenChange() {
    this.state.open = !this.state.open;
  }

  onListItemClick(data: { icon: string, redirectUrl: string }) {
    this.router.navigateByUrl(data.redirectUrl);
    this.state.open = false;
  }

  constructor(
    private router: Router,
    private titleService: TitleService,
    private storyService: StoryService
  ) {

  }

  ngOnInit(): void {
    this.setStoryVisible();
    this.subscribeAppState();
  }

  subscribeAppState() {
    this.titleService.isAppOpenedBefore.subscribe((appState: boolean) => {
      this.isFirstOpen = !appState;
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.getStoryData();
      this.getStoryVisible();
      this.titleService.isAppOpenedBefore.next(true);
    }, 0);
    console.log('hi');
  }

  height: number = document.documentElement.clientHeight;
  nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  state = {
    open: false
  };

  isAuthenticated() {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  navigatePage(menu: any) {
    localStorage.setItem('title', menu.title);
    if (menu.value === 'home') {
      this.setStoryVisible();
    }
    this.state.open = false;
    this.router.navigateByUrl(menu.value);
  }

  getTitle() {
    return this.titleService.getActiveTitle() || 'HOME';
  }

  getStoryData() {
    this.storyService.storyData.subscribe((storyData: any[]) => {
      this.storyData = storyData;
      console.log(this.storyData)
    });
  }

  getStoryVisible() {
    this.storyService.isStoryVisible.subscribe((visibility: boolean) => {
      this.storyVisible = visibility;
    });
  }

  setStoryVisible() {
    this.storyService.isStoryVisible.next(false);
  }
}
