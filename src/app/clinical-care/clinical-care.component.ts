import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuideService } from 'src/services/guide-service/guide.service';
import { StoryService } from 'src/services/story-service/story.service';
import { Guideline } from '../models/guideline';

@Component({
  selector: 'app-clinical-care',
  templateUrl: './clinical-care.component.html',
  styleUrls: ['./clinical-care.component.scss']
})
export class ClinicalCareComponent implements OnInit, AfterViewInit {

  guidelines: Guideline[] = [];
  displayedGuidelines: Guideline[] = [];

  storyData = [
    {
      title: 'ISPAD',
      redirectUrl: 'ispad'
    },
    {
      title: 'IDF/ISPAD',
      redirectUrl: 'idf-ispad'
    },
    {
      title: 'ISPAD/IDF',
      redirectUrl: 'ispad-idf'
    },
    {
      title: 'Latest HB A1C',
      redirectUrl: 'latest-hb-a1c'
    }
  ]

  constructor(
    private guideService: GuideService,
    private router: Router,
    private storyService: StoryService
  ) { }

  ngOnInit(): void {
    this.getGuides();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.setStory();
    }, 0)
  }

  onGuideSelect(guide: Guideline) {
    if (guide.id) {
      this.router.navigateByUrl(`clinical-care-detail/${guide.id}`)
    }
  }

  setStory() {
    this.storyService.isStoryVisible.next(true);
    this.storyService.storyData.next(this.storyData);
  }

  getGuides() {
    this.guidelines = this.guideService.getGuidelines();
    this.displayedGuidelines = this.guidelines;
  }

  onGuideSearch(searchText: string) {
    this.displayedGuidelines = this.guidelines.filter(item => item.title?.toLowerCase().includes(searchText.toLowerCase().trim()));
  }

}
