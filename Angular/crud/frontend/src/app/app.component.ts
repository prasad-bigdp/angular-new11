import { Component } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myMovies: any;
  name = "";
  url=""
  constructor(private cr:CrudService)
  {
      this.cr.getData().subscribe((res)=>this.myMovies=res)
  }
  deleteMovie(id:any)
  {
    this.cr.deleteData(id).subscribe((res:any)=>this.myMovies=this.myMovies.filter((d:any)=>d.id!=res.id))
  }
  addData()
  {
    let data = {
      id: Math.round(Math.random() * 100000).toString(),
      title: this.name,
      poster:this.url
    }
    this.cr.createData(data).subscribe((res)=>window.location.reload())
  }
}
