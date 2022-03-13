import http from '../http-common';

class EntryService{
    apiUrl = '/titles';

    getAllEntries(search){
        return http.get(this.apiUrl + search).then(
            (result) => console.log(result)
        );
    }
}

export default new EntryService();