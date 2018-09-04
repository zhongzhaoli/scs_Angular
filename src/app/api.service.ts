import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Login } from './entity/Login';
import { Profile } from './entity/profile';
import { Role } from './entity/role';
import { Leader } from './entity/Leader';
declare var getCookie:any;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }
    upload_personal(data){
        var url = environment.url.comment + "/user_personal";
        return this.http.post(url,data);
    }
    admin_login(data){
        var url = environment.url.comment + "/admin_login";
        return this.http.post<Login>(url,data);
    }
    admin(){
        var url = environment.url.comment + "/admin/user";
        return this.http.get(url);
    }
    user_access_api(userid){
        var url = environment.url.comment + "/admin/user/access/" + userid;
        return this.http.get(url);
    }
    user_refuse_api(userid){
        var url = environment.url.comment + "/admin/user/refuse/" + userid;
        return this.http.get(url)
    }
    enterprise_access_api(userid){
        var url = environment.url.comment + "/admin/enterprise/access/" + userid;
        return this.http.get(url);
    }
    enterprise_refuse_api(userid){
        var url = environment.url.comment + "/admin/enterprise/refuse/" + userid;
        return this.http.get(url)
    }
    user_condition(a){
        var url = environment.url.comment + "/admin/user/condition";
        return this.http.post(url,a);
    }
    enterprise_condition(a){
        var url = environment.url.comment + "/admin/enterprise/condition";
        return this.http.post(url,a);
    }
    handle(a){
        var url = environment.url.comment + "/admin/user/handle/" + a;
        return this.http.get(url);
    }
    admin_search(status,value,type){
        var url = environment.url.comment + "/admin/user/search";
        return this.http.post(url,{"status":status,"value":value,"type":type})
    }
    find_examine_user(){
        var url = environment.url.comment + "/user";
        return this.http.get<Profile>(url);
    }
    user_job_status(now_class){
        var url = environment.url.comment + "/user_job_status";
        return this.http.post(url,{"job_status":now_class});
    }
    user_img_change(base64){
        var url = environment.url.comment + "/user_img_change";
        return this.http.post(url,{"img":base64});
    }
    user_nickname_change(nickname){
        var url = environment.url.comment + "/user_nickname_change";
        return this.http.post(url,{"nickname": nickname});
    }
    get_user_role(){
        var url = environment.url.comment + "/user_role";
        return this.http.get<Role>(url);
    }
    send_job(data){
        var url = environment.url.comment + "/send_job";
        return this.http.post(url,data);
    }
    find_job(){
        var url = environment.url.comment + "/job";
        return this.http.get(url);
    }
    find_type_job(type){
        var url = environment.url.comment + "/job/type";
        return this.http.post(url,{"type":type});
    }
    find_id_job(id){
        var url = environment.url.comment + "/job/" + id;
        return this.http.get(url);
    }
    admin_examine_job(){
        var url = environment.url.comment + "/admin/job";
        return this.http.get(url);
    }
    admin_access_job(job_id,change_money,leader_id){
        var url = environment.url.comment + "/admin/job/access/" + job_id;
        return this.http.post(url,{"change_money": change_money, "leader_id": leader_id});
    }
    admin_refuse_job(job_id){
        var url = environment.url.comment + "/admin/job/refuse/" + job_id;
        return this.http.get(url)
    }
    admin_condition_job(type){
        var url = environment.url.comment + "/admin/job/condition";
        return this.http.post(url,{"type": type});
    }
    admin_get_leader(){
        var url = environment.url.comment + "/admin/leader";
        return this.http.get<Leader>(url);
    }
    admin_user_leader(name){
        var url = environment.url.comment + "/admin/leader/user";
        return this.http.post(url,{"name": name});
    }
    admin_create_leader(a){
        var url = environment.url.comment + "/admin/leader";
        return this.http.post(url,{"user_id": a});
    }
    job_sign(job_id){
        var url = environment.url.comment + "/job-sign/" + job_id;
        return this.http.post(url,{});
    }
    admin_get_job_sign(job_id){
        var url = environment.url.comment + "/enterprise/job-sign/" + job_id;
        return this.http.get(url);
    }
    admin_adopt_student_sign_job(user_id,type,job_id,ref){
        var url;
        if(type === "adopt"){
            url = environment.url.comment + "/enterprise/job-sign/adopt/" + user_id + "/job/" + job_id;
        }
        if(type === "refuse") {
            url = environment.url.comment + "/enterprise/job-sign/refuse/" + user_id + "/job/" + job_id;
        }
        return this.http.post(url,{"ref":ref});
    }
    admin_sign_student_condition(job_id,type){
        var url = environment.url.comment + "/enterprise/job-sign/student/" + job_id;
        return this.http.post(url,{"type": type});
    }
    my_job(){
        var url = environment.url.comment + "/my-job";
        return this.http.get(url);
    }
    my_job_leader(job_id){
        var url = environment.url.comment + "/my-job-leader/" + job_id;
        return this.http.get(url);
    }
    job_feedback(job_id,value,title){
        var url = environment.url.comment + "/job-feedback/" + job_id;
        return this.http.post(url,{"value": value, "title": title});
    }
    admin_job_feedback(){
        var url = environment.url.comment + "/admin/job-feedback";
        return this.http.get(url);
    }
    user_personal_del(){
        var url = environment.url.comment + "/user_personal_del";
        return this.http.post(url,{});
    }
    send_qu(text){
        var url = environment.url.comment + "/customer";
        return this.http.post(url,{"text": text});
    }
    my_customer(){
        var url = environment.url.comment + "/my-customer";
        return this.http.get(url);
    }
    admin_all_customer(){
        var url = environment.url.comment + "/admin/customer";
        return this.http.get(url);
    }
    admin_an_customer(text,qu_id){
        var url = environment.url.comment + "/admin/customer-an";
        return this.http.post(url,{"text": text, "qu_id": qu_id});
    }
    enterprise_job(){
        var url = environment.url.comment + "/enterprise/job";
        return this.http.get(url);
    }
    find_enterprise_detail(){
        var url = environment.url.comment + "/enterprise";
        return this.http.get<Profile>(url);
    }
    upload_personal_enterprise(data){
        var url = environment.url.comment + "/personal_enterprise";
        return this.http.post(url,data);
    }
    enterprise_personal_del(){
        var url = environment.url.comment + "/personal_enterprise_del";
        return this.http.post(url,{});
    }
    admin_all_enterprise(){
        var url = environment.url.comment + "/admin/enterprise";
        return this.http.get(url);
    }
    job_index_sj(){
        var url = environment.url.comment + "/job_index";
        return this.http.get(url);
    }
    enterprise_job_over(job_id){
        var url = environment.url.comment + "/enterprise/job/" + job_id + "/over";
        return this.http.get(url);
    }
    enterprise_evaluate(job_id,type,text){
        var url = environment.url.comment + "/enterprise/evaluate/" + job_id;
        return this.http.post(url,{"type": type, "text": text});
    }
    admin_index_evaluate(){
        var url = environment.url.comment + "/admin/index_evaluate";
        return this.http.get(url);
    }
    admin_change_evaluate_index(arr){
        var url = environment.url.comment + "/admin/index_evaluate/change";
        return this.http.post(url,{"arr": arr});
    }
    evaluate_show_index(){
        var url = environment.url .comment + "/evaluate_show";
        return this.http.get(url);
    }
    evaluate_detail_show($id){
        var url = environment.url.comment + "/evaluate_detail/" + $id;
        return this.http.get(url);
    }
    admin_over_job(job_id){
        var url = environment.url.comment + "/admin/over_job/" + job_id;
        return this.http.post(url,{});
    }
    admin_treated(){
        var url = environment.url.comment + "/admin/treated";
        return this.http.get(url);
    }
}