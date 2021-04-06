import { Injectable } from '@angular/core';
import { Guideline } from 'src/app/models/guideline';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  guidelines: Guideline[] = [
    {
      id: '1',
      title: 'ISPAD Clinical Practice Consensus Guidelines 2018: Stages of type 1 diabetes in children and adolescents',
      writers: 'Jennifer J. Couper1,2 | Michael J. Haller3 | Carla J. Greenbaum4 | Anette-Gabriele Ziegler5 | Diane K. Wherrett6 | Mikael Knip7 | Maria E. Craig',
      content: `<ul>Individuals with a first-degree relative with type 1 diabetes have an approximately 15-fold increased relative risk of type 1 diabetes1–3 A </ul>
      <ul> Individuals with two or more islet antibodies are classified as hav- ing the first stage of type 1 diabetes4 and the American Diabetes
      Association A </ul>
      <ul> The majority of children at risk of type 1 diabetes with multiple
      islet antibodies progress to diabetes within the next 15 years,
      compared to ~10% who have a single islet antibody.5 A </ul>
      <ul> Screening and intervention before the symptoms of type 1 diabe- tes should be conducted within the context of defined research
      </ul>
      `
    },
    {
      id: '2',
      title: 'Searchable title',
      writers: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim nisl et augue dapibus,',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim nisl et augue dapibus, vitae dictum quam consequat. Etiam finibus pellentesque ex ut placerat. Sed molestie leo malesuada, hendrerit leo dignissim, convallis elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec dui leo, iaculis in mollis rhoncus, efficitur vitae justo. Praesent ac nisl sed lorem efficitur malesuada. Aenean et nunc suscipit mauris venenatis ultrices eget nec enim. Curabitur metus velit, consectetur nec lacinia et, faucibus a justo. Aliquam vel blandit magna. In vel ipsum in ex pharetra ultricies ac ut lacus. Duis eget justo molestie, tempus sem suscipit, ultricies ipsum. Integer aliquet dapibus sollicitudin.'
    }
  ]

  constructor() { }

  getGuidelines() {
    return this.guidelines;
  }

  getGuidelineById(id: string) {
    return <Guideline>this.guidelines.find(item => item.id == id);
  }
}
