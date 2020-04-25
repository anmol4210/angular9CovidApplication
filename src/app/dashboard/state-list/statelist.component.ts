import { Component, OnInit } from '@angular/core';
import { StateService } from '../../core/services/state.service';
import { State } from '../../shared/interfaces/state';
@Component({
  selector: 'app-statelist',
  templateUrl: './statelist.component.html',
})
export class StateListComponent implements OnInit {
  constructor(private stateService: StateService) {}

  states: State[];

  ngOnInit(): void {
    this.stateService.getStateList().subscribe((data: any) => {
      // console.log('Getting Details');
      // console.log(data['statewise']);
      this.states = data['statewise'];
    });
  }

  getDetails(state: String) {
    console.log(state);
    this.stateService.getStateDetailsList().subscribe((data: any) => {});
  }
}
