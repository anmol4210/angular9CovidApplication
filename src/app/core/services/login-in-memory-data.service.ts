import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Login } from '../../shared/interfaces/login';
import { News } from '../../shared/interfaces/news';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginInMemoryDataService implements InMemoryDbService {
  createDb() {
    const loginDetail: Login[] = [
      { id: 1, username: 'anmol', password: 'anmol' },
      { id: 2, username: 'admin', password: 'admin' },
    ];

    const newsDetails: News[] = [
      {
        id: 1,
        title:
          'Coronavirus cases in India near 40,000, highest jump in 24 hours.',
        description: 'States recorded 2,644 new cases in 24 hours.',
        summary:
          'According to an Indian Council of Medical Research, the India has conducted over one million RT-PCR test for detection of COVID-19. This test facility is now available in 292 government and 97 private facilities across the country.',
        full_news:
          'The tally of confirmed coronavirus cases in India is approaching 40,000, with a record 2,644 new cases detected in the last 24 hours. The death toll from Covid-19 has gone up to to 1,301 after 83 coronavirus-linked deaths were reported in 24 hours. Recoveries from Covid-19 infection has also crossed 10,600. Authorities across states will ease some lockdown restrictions from tomorrow, including opening of more categories of shops and business establishments, in areas with limited or zero infection cases.',
        image_url: 'assets/covid19.jpg',
      },
      {
        id: 2,
        title:
          'Spain reports lowest daily coronavirus death toll in nearly 7 weeks',
        description:
          'Confirmed cases of the virus rose to 217,466, from 216,582 on Saturday, the ministry said.',
        summary:
          "Spain's death toll from the new coronavirus rose by 164 to 25, 264 on Sunday, health ministry data showed, marking the lowest one- day increase since March 18.Confirmed cases of the virus rose to 217, 466, from 216, 582 on Saturday, the ministry said.",
        full_news:
          'Madrid and Catalonia remain the two worst affected regions, with 8,332 and 5,185 fatalities respectively. The declining death rate is an encouraging sign for Spain, which on Saturday took a large step towards unwinding its stiff lockdown by allowing adults to exercise outdoors for the first time in seven weeks.',
        image_url: 'assets/covid19.jpg',
      },
    ];
    return { loginDetail, newsDetails };
  }

  genId(newsDetails: News[]): number {
    return newsDetails.length > 0
      ? Math.max(...newsDetails.map((news) => news.id)) + 1
      : 11;
  }
  // genId(loginDetail: newsDetails[]): number {
  //   return loginDetail.length > 0
  //     ? Math.max(...loginDetail.map((user) => user.id)) + 1
  //     : 11;
  // }
  constructor() {}
}
