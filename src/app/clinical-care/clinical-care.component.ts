import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuideService } from 'src/services/guide-service/guide.service';
import { Guideline } from '../models/guideline';

@Component({
  selector: 'app-clinical-care',
  templateUrl: './clinical-care.component.html',
  styleUrls: ['./clinical-care.component.scss']
})
export class ClinicalCareComponent implements OnInit {

  guidelines: Guideline[] = [];
  displayedGuidelines: Guideline[] = [];

  constructor(
    private guideService: GuideService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getGuides();
  }

  onGuideSelect(guide: Guideline) {
    if (guide.id) {
      this.router.navigateByUrl(`clinical-care-detail/${guide.id}`)
    }
  }

  getGuides() {
    this.guidelines = this.guideService.getGuidelines();
    this.displayedGuidelines = this.guidelines;
  }

  onGuideSearch(searchText: string) {
    this.displayedGuidelines = this.guidelines.filter(item => item.title?.toLowerCase().includes(searchText.toLowerCase().trim()));
  }

}
