/**
 *  ProductService can be used to get the list from Json API.
 *  @param {function} getList : is a async function, which get the response from API;
 */

import axios from 'axios';

export default {

  getList: async function() {
    try {
      const url = "https://rainy-star.surge.sh/products.json";
      const response = await axios.get(url);
      return response.data;
    } catch(error) {
      throw error;
    }
  }
}