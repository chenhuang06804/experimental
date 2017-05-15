import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { DialogOneComponent } from './dialog-one/dialog-one.component';
import { DialogTwoComponent } from './dialog-two/dialog-two.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public dialogRef: MdDialogRef<any>;
  public dialogConf: MdDialogConfig = {
    disableClose: false,
    hasBackdrop: true,
    backdropClass: '',
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    },
    data: {
    }
  };

  constructor(public dialog: MdDialog) {

  }

  openModalDlg() {
    this.dialogConf.disableClose = true;

    this.dialogRef = this.dialog.open(DialogOneComponent, {disableClose: true});
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('ModalDlg closed: data ' + JSON.stringify(result));
    });
  }
  openModalLessDlg() {
    this.dialogConf.disableClose = false;
    this.dialogRef = this.dialog.open(DialogTwoComponent, {disableClose: false});
    this.dialogRef.afterClosed().subscribe(result => {
            console.log('ModalLessDlg closed');

    });
  }
}
