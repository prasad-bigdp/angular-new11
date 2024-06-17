import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private hc: HttpClient) { }
  getData()
  {
    return this.hc.get('http://localhost:3000/movies');
  }
  putData(id:number,data:any)
  {
    return this.hc.put(`http://localhost:3000/movies/${id}`,data);
  }
  deleteData(id:any)
  {
    return this.hc.delete(`http://localhost:3000/movies/${id}`);
  }
  createData(data:Object)
  {
    return this.hc.post('http://localhost:3000/movies',data);
  }
}
