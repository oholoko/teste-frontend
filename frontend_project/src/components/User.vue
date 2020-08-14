<template>
  <div id="User">
    <div id="Userdata" v-if="user.address">
      <h3 v-for="key in fields"
          :key="key">
        {{ Capitalize(key)}} : {{ user[key] }}
        <div v-if="key != 'id'">
          <input v-model="form[key]" type="text"/>
          <button @click="alterData(key)">
            Alter {{key}}
          </button>
        </div>
      </h3>

      <h3 v-for="key in adress"
          :key="key">
        {{Capitalize(key)}} : {{ user.address[key] }}
        <br>
        <input v-model="form[key]" type="text"/>
        <button @click="alterData(key)">
          Alter {{key}}
        </button>
      </h3>
      <h3 v-for="key in geoLoc"
          :key="key">
        {{Capitalize(key)}} : {{ user.address.geo[key] }} 
        <br>
        <input v-model="form[key]" type="text"/>
        <button @click="alterData(key)">
          Alter {{key}}
        </button>
      </h3>
      <button key="userDelete" @click="deleteUser(user.id)">
        deleteUser
      </button>
    </div>
    <div v-else>
      <h1>
        User Not found
      </h1>
    </div>
  </div>
</template>

<script>
export default {  
  name: 'User',
  data() {
    return {
      form: {},
      something: ''
    }
  },
  created() {
    const currentUser =  this.$route.params.id ? this.$route.params.id : this.$store.state.currentUser.id
    this.$store.dispatch('getUser',currentUser);
  },
  computed: {
    user() {
      return this.$store.getters.userData();
    },
    fields() {
      return ['id','firstName','lastName','email','phone']
    },
    adress() {
      return ['zipCode','city','streetAddress','country','state']
    },
    geoLoc() {
      return ['latitude','longitude']
    },
  },
  methods: {
    Capitalize(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    },
    deleteUser(id) {
      if(confirm("Do you really want to delete?")){
        this.$store.dispatch('deleteUser',id)
      }
      return this.$store.currentUser
    },
    alterData(key)
    {
      if(confirm("Do you really want to change? User with ID:" + this.$store.state.currentUser.id + " " + key+" to "+ this.$data.form[key]))
      {
        const values = {'key':key,'value':this.$data.form[key]}
        this.$store.dispatch('changeUserData',values)
      }
    }
  },
}
</script>

<style>
</style>
