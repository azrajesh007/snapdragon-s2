import {RESTClient} from '../utils/rest';
let instance;
export default class Groups extends RESTClient{
    static async getAll(){
        return this.getInstance().get('groups');
    }

    static getInstance(){
        if(!instance){
            instance = new Groups();
        }
        return instance;
    }
}