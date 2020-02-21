import axios from 'axios'


export const getPhones = () => dispatch => {

    axios.get('http://localhost:5000/phones')
    .then(res=>{ console.log('getting phones', res.status);
      dispatch({
      type: 'GET_PHONES',
      phones: res.data
      })

  });


};
