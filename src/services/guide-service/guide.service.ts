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
      title: 'ISPAD Clinical Practice Consensus Guidelines 2018: The delivery of ambulatory diabetes care to children and adolescents with diabetes',
      writers: 'Catherine Pihoker1 | Gun Forsander2 | Bereket Fantahun3 | Anju Virmani4 | Sarah Corathers5 | Paul Benitez-Aguirre6 | Junfen Fu7 | David M. Maahs8',
      content: `From the outset, the child or adolescent with diabetes and relevant family members should receive care from a multidisciplinary diabetes team comprised of specialists with training and expertise in both dia- betes and pediatrics, and knowledgeable of child and adolescent development (E). The diabetes care team should emphasize that the family and child are the central members of the care team (E). Clear and consistent communication around education and the treatment plan is essential. The treatment plan should integrate current technol- ogies commensurate with available resources and the individual child's/family's needs. (E) A multidisciplinary team is unlikely to be available in areas of low population density and where childhood dia- betes rarely occurs.`
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
