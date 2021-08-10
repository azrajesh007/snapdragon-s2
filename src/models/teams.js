import {RESTClient} from '../utils/rest';
let instance;
export default class Teams extends RESTClient{
    static async getById(id){
        return getInstance().get(`/teams/${id}`)
    }

    static getInstance(){
        if(!instance){
            instance = new Groups();
        }
        return instance;
    }
}