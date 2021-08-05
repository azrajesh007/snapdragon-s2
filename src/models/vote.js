import {RESTClient} from '../utils/rest';
import { writable } from 'svelte/store';

export const VoteStore = writable({
    votedTeam: false,
    votedPlayer: false
});

let instance;
export class Vote extends RESTClient{

    constructor(){
        super()
        VoteStore.update(u => ({
            votedTeam: window.localStorage.getItem('votedTeam') ? window.localStorage.getItem('votedTeam') : false,
            votedPlayer: window.localStorage.getItem('votedPlayer') ? window.localStorage.getItem('votedPlayer') : false
        }))
    }

    store(){
        return VoteStore;
    }

    async votePlayer(id){
        let status = await this.post(`vote/player/${id}`);
        if(status.status == 'OK'){
            VoteStore.update(u => ({
                ...u,
                votedPlayer: id
            }));
            window.localStorage.setItem('votedPlayer', id);
        }
    }

    async voteTeam(id){
        let status = await this.post(`vote/team/${id}`);
        if(status.status == 'OK'){
            VoteStore.update(u => ({
                ...u,
                votedTeam: id
            }));
            window.localStorage.setItem('votedTeam', id);
        }
    }

    static getInstance(){
        if(!instance){
            instance = new Vote();
        }
        return instance;
    }
}