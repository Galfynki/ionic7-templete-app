import { Component, OnInit } from '@angular/core';


interface News {
  title: string
  subTitle: string
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  news: News[]=[
    {title: "The fire at the Wildberries warehouse was localized",
  subTitle: "At 10:55, the fire in the Pushkinsky district of St. Petersburg was localized to an area of 70 thousand square meters,” the departmens press service said in a statement. It also clarified that no one was injured as a result of the emergency."
  },
  {title: "The prosecutor's office began an investigation due to a major fire at the Wildberries warehouse ",
  subTitle: "The supervisory agency is monitoring the establishment of all the circumstances and causes of the incident, the statement says. It also notes that the prosecutor's office intends to evaluate the fire safety measures of the warehouse. "
  },
  {title: "More than 30-degree frosts hit the Moscow region",
  subTitle: "On Saturday, January 13, in the Moscow region, thermometers dropped below minus 30 degrees Celsius. The chief specialist of the Moscow "
  }
  ]
}
