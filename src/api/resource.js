import Vue from 'vue'
import VueResource from 'vue-resource'


Vue.use(VueResource)
export const post = (url, params)
    => Vue.http.post(url, params);
export const get = (url)
    => Vue.http.get(url)
