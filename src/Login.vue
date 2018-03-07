<template>
  <div class="m-5 card">
    <div class="card-body">
      <h5 class="card-title">Вход</h5>
      <input type="text" class="form-control mb-2" placeholder="Email" v-model="email" />
      <input type="password" class="form-control mb-2" placeholder="Password" v-model="password" @keyup.enter="Auth" />
      <button @click="Auth" class="btn btn-primary float-right">Войти</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {},
  mounted() {
    this.email = localStorage["Cards.email"];
    this.$root.uid = sessionStorage["Cards.uid"];
  },
  methods: {
    Auth() {
      localStorage["Cards.email"] = this.email;
      sessionStorage["Cards.uid"] = this.$root.uid;
      
      let link = this;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(r => {
          link.$root.uid = firebase.auth().currentUser.uid;
          localStorage["Cards.uid"] = link.$root.uid;
          link.LoadData();
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(error.message);
        });
    },
    LoadData() {
      let link = this;
      firebase
        .database()
        .ref(`Cards/API/${this.$root.uid}`)
        .once("value")
        .then(function(snapshot) {
          link.$parent.List = snapshot.val();
          link.$router.push({path: "/"})
        })
        .catch(e => alert("Ошибка загрузки данных"));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>