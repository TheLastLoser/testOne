import { HttpClient } from '@angular/common/http';


export class JsonService {

  public HttpClient: HttpClient;

  constructor(private http: HttpClient) {
  }
  public getJSON(file): Observable<any> {
      return this.http.get("./assets/configs/" + file + ".json");
  }
  public getSetting(){
      // use setting here
  }
}
