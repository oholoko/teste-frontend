<template>
  <div id="Navigation">
    <table>
      <tr>
        <th v-for="key in fields"
          :key="key">
          {{key}}
        </th>
        <th v-for="key in adress"
          :key="key">
          {{key}}
        </th>
        <th v-for="key in geoLoc"
          :key="key">
          {{key}}
        </th>
      </tr>
      <tr v-for="user in users"
          :key="user.id">
        <th v-for="key in fields"
            :key="key">
          {{ user[key] }}
        </th>
        <th v-for="key in adress"
            :key="key">
          {{ user.address[key] }}
        </th>
        <th v-for="key in geoLoc"
            :key="key">
          {{ user.address.geo[key] }}
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
  created() {
    this.$store.dispatch('getUserList'); 
  },
  computed: {
    users() {
      return this.$store.getters.sort_field('id',this.$store.state.currentPage);
    },    
    pages() {
      return this.$store.getters.pages();
    },
    fields() {
      return ['id','firstName','lastName','email','phone']
    },
    adress() {
      return ['zipCode','city','streetAddress','country','state']
    },
    geoLoc() {
      return ['latitude','longitude']
    }
  },
  methods: {    
    setPage(page_num){
      if (page_num % 1 === 0)
      {
        this.$store.dispatch('changePage',page_num)
        return this.$store.getters.pages()
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
