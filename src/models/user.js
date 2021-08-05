import {RESTClient} from '../utils/rest';
import { writable, readable } from 'svelte/store';
import {Team} from './team';
const userInit = {
    first_name: "",
    last_name: "",
    dob: "",
    mobile: "",
    free_fire_id: "",
    loggedOut: true,
    role: ''
};
const teamStore = Team.getInstance();
function createUserStore() {
	const { subscribe, update, set } = writable(window.localStorage.getItem('user') ? JSON.parse(atob(window.localStorage.getItem('user'))) : {...userInit});

	return {
        subscribe,
        set,
		save: user => {
            if(user.token)
            window.localStorage.setItem('token', user.token);
            window.localStorage.setItem('user', btoa(JSON.stringify(user)));
            update(u => user);
        },
        logout: () => {
            window.localStorage.removeItem('user');
            window.localStorage.removeItem('token');
            update(u => ({...userInit}))
            Team.restTeam();
        }
	};
}

export const UserStore = createUserStore();
let instance;
export class User extends RESTClient{
    async getOTP(email){
        return this.post('otp', {email})
    }

    async getToken(email, otp){
        let data = await this.post('token', {email, otp});
        if(data){
            if(data.emailtoken){
                super.authToken = data.emailtoken;
                return { register: true};
            }else{
                if(window.localStorage.getItem('referral'))
                window.localStorage.removeItem('referral');
                UserStore.save(data);
                if(window.localStorage.getItem('enterContest') && !data.contest){
                    let res = await User.getInstance().enterContest();
                    if(!res.error){
                        window.localStorage.removeItem('enterContest')
                        window.localStorage.setItem('firstLogin', true)
                        UserStore.save(res)
                    }
                }else{
                    window.localStorage.removeItem('enterContest')
                }
                teamStore.getTeam();
                //window.localStorage.setItem('token', data.token);
                //window.localStorage.setItem('user', btoa(JSON.stringify(data)));
            }
        }
        return data;
    }

    async register(user){
        let usr = {...user};
        if(window.localStorage.getItem('referral')){
            usr.referral = parseInt(window.localStorage.getItem('referral'));
        }
        let result = await this.post('register', usr);
        if(result.token){
            UserStore.save(result);
            window.localStorage.removeItem('referral');
            //window.localStorage.setItem('token', result.token);
            //window.localStorage.setItem('user', btoa(JSON.stringify(result)));
        }
        return result;
    }

    async update(user){
        let result = await this.post('user/update', user);
        if(!result.error){
            UserStore.save(result);
            //window.localStorage.setItem('user', btoa(JSON.stringify(result)))
        }
        return result;
    }

    async enterContest(){
        let result = await this.post('user/contest');
        if(!result.error){
            UserStore.save(result);
            return true;
        }else{
            console.log("Failed to update");
        }
    }

    static getInstance(){
        if(!instance){
            instance = new User();
        }
        return instance;
    }

    static getUser(){
        return UserStore;
    }

    static logout(){
        UserStore.logout();
    }

}