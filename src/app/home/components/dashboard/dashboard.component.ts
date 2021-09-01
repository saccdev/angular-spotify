import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';

import { SearchDialogComponent } from '../search-dialog/search-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  animal: string;
  name: string;

  singerName: FormControl = new FormControl();

  constructor(public dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit(): void {
  }

  openDialog(artists: Array<any>): void {
    let dialogRef = this.dialog.open(SearchDialogComponent, {
      width: 'auto',
      data: { artists }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  findSingerByName() {
    console.log(this.singerName.value);
    this.apiService.getSingerByName(this.singerName.value)
      .subscribe(arg => {
        this.openDialog(arg.artists);
      });
  }
}
