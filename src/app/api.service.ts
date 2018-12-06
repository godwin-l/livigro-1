import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
API_URL  =  window.location.origin;

constructor(private  http:  HttpClient) { }

getPackages(){
    return  this.http.get(`${this.API_URL}/api/package/listpackages`);
}

getTopPackages(){
  return  this.http.get(`${this.API_URL}/api/package/listtoppackages`);
}

createPackage(data){
  return  this.http.post(`${this.API_URL}/api/package/`,data);
}

searchPackage(data){
  return  this.http.post(`${this.API_URL}/api/package/searchpackage`,{'term': data });
}
register(mobile){
  return  this.http.post(`${this.API_URL}/api/user/register`,{'mobile':mobile});
}
verifyOTP(otp,mobile){
  return  this.http.post(`${this.API_URL}/api/user/verifyOtp`,{'otp':otp,'mobile':mobile});
}
registerUser(password,mobile){
  return  this.http.post(`${this.API_URL}/api/user/registeruser`,{'password':password,'mobile':mobile});
}

login(password,mobile){
  return  this.http.post(`${this.API_URL}/api/user/login`,{'password':password,'mobile':mobile});
}

editProfile(mobile,name,gender,dob,email,city,door,street,postcode){
  return  this.http.post(`${this.API_URL}/api/user/editprofile`,{'mobile':mobile,'name':name,'gender':gender,'dob':dob,'email':email,'city':city,'door':door,'street':street,'postcode':postcode});
}

viewProfile(mobile){
  return  this.http.post(`${this.API_URL}/api/user/viewprofile`,{'mobile':mobile});
}

bookPackage(userId,packageId,name,mobile,address){
  return  this.http.post(`${this.API_URL}/api/booking/bookpackage`,{'userId':userId,'packageId':packageId,'name':name,'mobile':mobile,'address':address});
}

}