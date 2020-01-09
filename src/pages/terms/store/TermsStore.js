import { observable, action } from 'mobx';
import axios from 'axios';

class TermsStore {
    @observable termsList = [];

    @action 
    setTerms = (termsList) => { this.termsList = [...termsList]; }

    @action 
    getTerms() {
        axios.get('https://api.example.com')
            .then(response => {
                this.setTerms(response.data)
            });
    }
}

const store = new TermsStore();

export default store;