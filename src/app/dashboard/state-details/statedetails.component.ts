import { Component, OnInit } from '@angular/core';
import { StateService } from '../../core/services/state.service';
import { State } from '../../shared/interfaces/state';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-statedetails',
  templateUrl: './statedetails.component.html',
})
export class StateDetailsComponent implements OnInit {
  constructor(
    private stateService: StateService,
    private activatedRoute: ActivatedRoute
  ) {}

  states: State[];
  stateName: string;

  ngOnInit(): void {
    this.stateName = this.activatedRoute.snapshot.params.stateName;
    // console.log(this.stateName);
    this.getDetails(this.stateName);
  }

  getDetails(stateName: string) {
    this.stateService.getStateDetailsList().subscribe((data: any) => {
      this.states = data[stateName]['districtData'];
      // console.log(this.states);
    });
  }

  // filterResults(filterBy: string, data: any): any[] {
  //   return data.filter((state) => state.statecode == filterBy);
  // }
}
