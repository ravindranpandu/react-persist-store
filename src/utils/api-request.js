class ApiRequest {
  static headers () {
    let headers = { 'Content-Type': 'application/json' };    
    return headers;
  }

  static async error(message, status) {
    if (status === 401) { 
     // take the user to login screen and clear session/localStorage 
    }    
    // show error notification
  }

  static fetch(options) {
    let fetchOptions = {
      method: options.method
    };

    fetchOptions.headers = Object.assign(this.headers(), options.headers);

    if (options.method.toLowerCase() === 'get') {
      fetchOptions.search = new URLSearchParams(options.params);
    } else {
      fetchOptions.body = JSON.stringify(options.data);
    }
    
    return fetch(options.url, fetchOptions)    
      .then(response => response.json().then(json => ({
        headers: response.headers.map,
        status: response.status,
        data: json
      })))      
      .then(response => {
        if (response.status >= 400 && response.status < 600) {             
          const errors = response && response.data && response.data.errors;          
          const errorCode = response && response.status;
          this.error(errors, errorCode);
          throw errors;
        }
        return response;
      })
      .catch(errorResponse => {    
        throw errorResponse;
      });
  }
}

export { ApiRequest };