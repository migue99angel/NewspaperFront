import http from '../http-common';

class EntryService{
    apiUrl = '/titles';

    getSearchedEntries(search){
        return http.get(this.apiUrl + '/?terms=' + search).then(
            (result) => console.log(result)
        );
    }
}

export default new EntryService();