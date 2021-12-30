import { Injectable } from '@angular/core';
import { Region } from '../_model/region';
import { HttpClient } from '@angular/common/http';
import { ApisURI } from "../../../shared/apis-uri";

@Injectable({
  providedIn: 'root'
})

export class RegionService {

  private apiURI = ApisURI.dwf20221apiURI;
  private resource = "/region";

  constructor(
    private http: HttpClient
  ) { }

  getRegions(){
    return this.http.get<Region[]>(this.apiURI+ this.resource);
  }

  getRegion(id_region:number){
    return this.http.get<Region>(this.apiURI+this.resource+"/"+id_region);
  }

  createRegion(region:Region){
    return this.http.post(this.apiURI+this.resource,region);
  }

  updateRegion(region:Region){
    return this.http.put(this.apiURI+this.resource+"/"+region.id_region,region);
  } 

  deleteRegion(id_region:number){
    return this.http.delete(this.apiURI+this.resource+"/"+id_region);
  }
}
