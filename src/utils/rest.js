//const baseURL = 'http://localhost:3000/';
const baseURL = '';
// const baseURL = 'https://api.snapdragonconquest.com/';
//const baseURL = 'https://api.conquestesports.in/';

import Toast from './toast';
import { saveAs } from 'file-saver';
import moment from 'moment';
export class RESTClient{
    async get(url){
        let result = await fetch(baseURL+url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.auth()
            }
        })
        if(result.headers.get('content-type').indexOf('application/json') == 0){
            result = await result.json();
            if(!result.error) {
                return result;
            }else{
                Toast.error(result.error);
            }
        }else{
            // result = await result.blob();
            // saveAs(result, moment().format('YYYY-MM-DD-HH-mm')+'.xlsx');
            // return true;
        }
    }

    async post(url, data){
        let result = await fetch(baseURL+url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.auth()
            },
            body: JSON.stringify(data)
        })
        result = await result.json();
        if(!result.error) {
            return result;
        }else{
            if(Array.isArray(result.error))
            return result;
            else
            Toast.error(result.error);
        }
    }

    async delete(url){
        let result = await fetch(baseURL+url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                ...this.auth()
            }
        })
        result = await result.json();
        if(!result.error) {
            return result;
        }else{
            if(Array.isArray(result.error))
            return result;
            else
            Toast.error(result.error);
        }
    }

    auth(){
        if(window.localStorage.getItem('token')){
            return {
                'Authorization': 'Bearer '+window.localStorage.getItem('token')
            }
        }else if(this.authToken){
            return {
                'Authorization': 'Bearer '+this.authToken
            }
        }else
        return {};
    }
}