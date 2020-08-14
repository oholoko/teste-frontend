<template>
  <div id="Registration">
      <h3 v-for="key in fields"
          :key="key">
        <div v-if="key != 'id'">
          <input v-model="form[key]" type="text"/>
          {{Capitalize(key)}}
        </div>
      </h3>
      <h3 v-for="key in adress"
          :key="key">
          <input v-model="form[key]" type="text"/>
          {{Capitalize(key)}}
      </h3>
      <h3 v-for="key in geoLoc"
          :key="key">
          <input v-model="form[key]" type="text"/>
          {{Capitalize(key)}}
      </h3>      
      <button @click="createUser()">
        Create User
      </button>
  </div>
</template>

<script>
export default {  
  name: 'Registration',
  data() {
    return {
      form: {},
      something: ''
    }
  },
  computed: {
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
    createUser(){
      const promise = this.$store.dispatch('registerUser',this.$data.form)
      promise.then((promise) => {
        alert("User created with ID: "+promise)})
    }
  },
}
</script>

<style>
</style>
