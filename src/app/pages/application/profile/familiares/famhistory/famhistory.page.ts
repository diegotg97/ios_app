import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-famhistory',
  templateUrl: './famhistory.page.html',
  styleUrls: ['./famhistory.page.scss'],
})
export class FamhistoryPage implements OnInit {


  public diseasesFormData = this.fb.group({
    diabetes: false,
    hypertension: false,
    heartDisease: false,
    epilepsy: false,
    prevSurgeries: false,
    others: 'false'
})

  constructor( public userservice: UserserviceService,
    private fb: FormBuilder ) {  }

  ngOnInit() {

    this.userservice.getMemberData( this.userservice.userView._id ).subscribe( (member:any) =>{
        this.diseasesFormData = this.fb.group({
          diabetes: (member.diseases.diabetes)? member.diseases.diabetes : false,
          hypertension: (member.diseases.epilepsy)?  member.diseases.epilepsy : false,
          heartDisease: (member.diseases.heartDisease)? member.diseases.heartDisease : false,
          epilepsy: (member.diseases.hypertension)? member.diseases.hypertension : false,
          prevSurgeries: (member.diseases.prevSurgeries)? member.diseases.prevSurgeries : false,
          others: (member.diseases.others)? member.diseases.others : false
        })
    })
  }

  hMedicalSave(){

    setTimeout(() => { 
      this.userservice.updateUserDataDiseases( this.userservice.userView._id, this.diseasesFormData.value ).subscribe();
    }, 200);

  }


}
