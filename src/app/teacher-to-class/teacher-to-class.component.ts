import { Component, OnInit } from '@angular/core';
import { RequestOptions,Request,RequestMethod,Http,Response,Headers } from '@angular/http';

@Component({
  selector: 'app-teacher-to-class',
  templateUrl: './teacher-to-class.component.html',
  styleUrls: ['./teacher-to-class.component.css']
})
export class TeacherToClassComponent implements OnInit {

  constructor( private http:Http) { 
  }
  private headers =new Headers({'ContentType':'application/json'})
   teacher=[];
   class=[];
   section=[];
   subjects=[];
   fetchDate=function()
   {

     this.http.get("http://10.10.5.54:3002/fetch").subscribe (
       (res:Response) =>{
         this.teacher=res.json();
           // var teacherslist=this.teacher[0].First_Name;
         console.log(this.teacher)

         console.log(this.teacherslist)

      
       }
  )
   }
fetchclass=function()
{
  this.http.get("http://10.10.5.4:5000/getclass").subscribe (
    (res:Response) =>{
      this.class=res.json();

       // var classes=this.class[0].classname;

     // console.log("vsjfbvckjs "+this.teacherslist)

   
    }
)
}
fetchsection=function(pro)
{
  var hash={};
  hash['one']='onellll';
  console.log(hash['one'])
  this.http.get("http://10.10.5.4:5000/getclass").subscribe (
    (res:Response) =>{
      this.class=res.json();
       // var classes=this.class[0].classname;
       var data = this.class;

       for(var i in data)
       {
            var id = data[i].classes.classid;
          hash[data[i].classes.classname]=data[i].classes.sections
       }
  
this.section=hash[pro]
      
    }
  )
}

fetchsubjects=function(pro)
{
  var hash={};
  
  this.http.get("http://10.10.5.4:5000/getclass").subscribe (
    (res:Response) =>{
      this.class=res.json();
       // var classes=this.class[0].classname;
       var data = this.class;

       for(var i in data)
       {
            var id = data[i].classes.classid;
          hash[data[i].classes.sections[i]]=data[i].classes.subjects
       }
  
this.subjects=hash[pro]
      
    }
  )
}


  ngOnInit() {
    this.fetchDate();
   this.fetchclass();
  // this.fetchsection(var pro);
  }

}
