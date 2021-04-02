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
    private guideService: GuideService
  ) { }

  ngOnInit(): void {
    this.getGuideIdFromUrl();
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

}