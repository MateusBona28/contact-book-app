import axios from 'axios';
import { defineStore } from 'pinia'
import VueJwtDecode from 'vue-jwt-decode';

export const useUserStore = defineStore('user', {
    state: () => {
      return {
          user: {},
          token: localStorage.getItem('CONTACT_BOOK_TOKEN')  || "",
          id: "",
      }
    },
    actions: {
      getToken(token) {
        this.token = token

        const decoded = VueJwtDecode.decode(token)

        this.id = decoded.sub
      },
      getUser() {
        axios.get(`http://localhost:3000/accounts/${this.id}`, {
          headers: {
            "Authorization": `Bearer ${this.token}`
          }
        })
        .then((res) => this.user = res.data)
        .catch((err) => { console.log(err) })
      },
    },
    getters: {
      getUserInfo() {
        return this.user
      }
    }
})