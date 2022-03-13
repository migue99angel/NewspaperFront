import http from '../http-common';

const apiUrl = '/titles';
  
export const getSearchedEntries = (search) => {
    return http.get(apiUrl + '/?terms=' + search)
}

