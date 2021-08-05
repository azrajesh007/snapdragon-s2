import {RESTClient} from '../utils/rest';
import { writable } from 'svelte/store';
import {User} from './user';
import Modal from '../utils/modal';
import InviteModal from '../components/modal/InviteModal.svelte'

export const TeamStore = writable({
    name: '',
    code: ''
});

let instance;
export class Team extends RESTClient{
    
    async createTeam(team){
        let teamItem = await this.post('team', team);
        if(teamItem && !teamItem.error){
            TeamStore.update(u => ({...u, ...teamItem}));
            //this.getTeam();
            window.location.href = '/dashboard/team';
        }
        return teamItem;
    }

    async requestToJoin(code){
        let team = await this.post('team/join-request', {code});
        TeamStore.update(u => ({...u, ...team}));
        return team;
    }

    async sendInvite(emails){
        return this.post('team/invite', {emails});
    }

    async cancelRequest(){
        let res = await this.delete('team/request');
        await this.getTeam();
        return res;
    }

    async leaveTeam(){
        let res = await this.delete('team/leave');
        await this.getTeam();
        return res;
    }

    async kickPlayer(id){
        let res = await this.delete('team/kick/'+id);
        await this.getTeam();
        return res;
    }
    async makeLeader(id){
        let res = await this.post('team/make-leader/'+id);
        await this.getTeam();
        return res;
    }

    async deleteTeam(){
        let res = await this.delete('team');
        await this.getTeam();
        return res;
    }

    async showTeam(){
        let res = await this.post('team/public', {show: true});
        await this.getTeam();
        return res;
    }

    async hideTeam(){
        let res = await this.post('team/public', {show: false});
        await this.getTeam();
        return res;
    }

    async getRequests(){
        await this.getTeam();
        return this.get('team/requests');
    }

    async approveRequest(request){
        return this.get(`team/request/${request.id}/approve`);
    }

    async rejectRequest(request){
        return this.get(`team/request/${request.id}/reject`);
    }

    async getStats(){
        return this.get('team/stats');
    }
    async downloadMatch(match){
        return this.get(`team/download-match/${match}`);
    }
    
    async export(){
        return this.get('team/export');
    }

    async getTeam(){
        let team  = await this.get('my-team');
        if(team)
        TeamStore.update(u => ({...u, ...team}));
        TeamStore.update(t => ({...t, loaded: true}));
        return team;
    }

    async getPendingTeams(query='', page=0){
        return this.get('teams?query='+query+'&page='+page);
    }

    static getInstance(){
        if(!instance){
            instance = new Team();
            instance.getTeam();
        }
        return instance;
    }

    static restTeam(){
        TeamStore.update(u => ({
            name: '',
            code: ''
        }));
    }

}