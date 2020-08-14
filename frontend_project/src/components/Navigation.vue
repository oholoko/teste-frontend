<template>
  <div id="Navigation">
    <table>
      <tr>
        <th> User Data </th>
        <th class='titulo' v-for="key in fields"
          :key="key">
          <button @click="setOrder(key)">
            {{Capitalize(key)}}
          </button>
        </th>
      </tr>
      <tr v-for="user in users"
          :key="user.id">
        <th><router-link :to="'/User/'+user.id">User page</router-link></th>
        <th v-for="key in fields"
            :key="key">
          {{ user[key] }}
        </th>
      </tr>
    </table>
    <div>
      <button v-for="page in pages"
          :key="page" @click="setPage(page)">
          {{page}}
      </button>
    </div>
  </div>
</template>

<script>
export default {  
  name: 'Navigation',
  data () {
    return {
      ordenation: 'id'
    }
  },
  created() {
    this.$store.dispatch('getUserList'); 
  },
  computed: {
    users() {
      return this.$store.getters.sort_field(this.$data.ordenation,this.$store.state.currentPage);
    },    
    pages() {
      return this.$store.getters.pages();
    },
    fields() {
      return ['id','firstName','lastName']
    },
  },
  methods: {
    setOrder(type){
      this.$data.ordenation = type
    },
    Capitalize(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    },
    setPage(page_num){
      if (page_num % 1 === 0)
      { 
        this.$store.dispatch('changePage',page_num)
        return this.$store.getters.pages()
      }
    },
    userLink(userId){
      return '/User/' + userId
    }
  },
}
</script>

<style>
table {
  border-collapse: collapse;
  width: 500px;
}
table, th, td {
  border: 1px solid black;

}
th {
  text-align: center;
  font-weight: normal;
}

th[class=titulo] {
  text-align: center;
  font-weight: bold;
}
</style>
