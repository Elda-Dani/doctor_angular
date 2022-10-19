import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  doctorname=""
  department=""
  hospital=""
  address=""
  doj=""
 phone=""
  email=""
status:boolean=false

  readValues=()=>{
    let data={
      "doctorname":this.doctorname,
    "department":this.department,
    "hospital":this.hospital,
    "address":this.address,
    "doj":this.doj,
   "phone":this.phone,
     "email":this.email

    }
    console.log(data)
this.myapi.addData(data).subscribe(
  (response)=>{
    console.log(response)
    alert("successfully added")
    this.doctorname=""
  this.department=""
  this.hospital=""
  this.address=""
 this.doj=""
 this.phone=""
  this.email=""
  this.status=true

  }
)
  }


  ngOnInit(): void {
  }

}
