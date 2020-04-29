import { Component, OnInit } from '@angular/core';
import { StateService } from '../../core/services/state.service';
import { State } from '../../shared/interfaces/state';
@Component({
  selector: 'app-statelist',
  templateUrl: './statelist.component.html',
  styleUrls: ['./statelist.component.css'],
})
export class StateListComponent implements OnInit {
  constructor(private stateService: StateService) {}
  loaddingData: boolean = true;
  states: State[];

  ngOnInit(): void {
    this.stateService.getStateList().subscribe((data: any) => {
      this.states = data['statewise'];
      this.loaddingData = false;
    });
  }

  // getDetails(state: String) {
  //   console.log(state);
  //   this.stateService.getStateDetailsList().subscribe((data: any) => {});
  // }
}
