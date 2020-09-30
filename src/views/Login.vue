<template>
  <div>
    <Nav />
    <div class="container text-center tavolsag">
      <div class="card text-center w-100">
        <div class="card-header">
          <h2 class="text-monospace">Bejelentkezés</h2>
        </div>
        <div class="card-body">
          <b-form class="form-horizontal" @submit.stop.prevent>
            <div class="form-group">
              <label for="email" class="col-sm-10 control-label text-center">
                <span class style="font-size: 30px">Email</span>
              </label>
              <div class="align-items-center">
                <b-input
                  v-model="email"
                  :state="emailVal"
                  type="email"
                  class="form-control input"
                  id="email"
                  placeholder
                />
                <b-form-invalid-feedback :state="emailVal"
                  >Hibás email</b-form-invalid-feedback
                >
                <b-form-valid-feedback :state="emailVal"
                  >Email rendben</b-form-valid-feedback
                >
              </div>
            </div>
            <div class="form-group">
              <label for="jelszo" class="col-sm-10 control-label text-center">
                <span class style="font-size: 30px">Jelszó</span>
              </label>
              <div class="align-items-center">
                <b-input
                  v-model="jelszo"
                  :state="passVal"
                  type="password"
                  class="form-control"
                  id="jelszo"
                  placeholder
                />
                <b-form-invalid-feedback :state="passVal"
                  >Hibás jelszó</b-form-invalid-feedback
                >
                <b-form-valid-feedback :state="passVal"
                  >Jelszó rendben</b-form-valid-feedback
                >
              </div>
            </div>
            <div class="form-group">
              <div class="align-items-center">
                <div class="checkbox text-center">
                  <label> <input type="checkbox" /> Jegyezz meg </label>
                </div>
                <div class="text-center spec">
                  <router-link to="/login"
                    >Elfelejtette a jelszavát?
                  </router-link>
                </div>
              </div>
            </div>
            <div class="text-center">
              <div class="form-group">
                <div class="align-items-center">
                  <button
                    type="submit"
                    class="btn btn-dark"
                    @click="bejelentkezes"
                  >
                    Bejelentkezés
                  </button>
                </div>
              </div>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../Api.js";
import Nav from "../components/Nav";
export default {
  components: {
    Nav,
  },
  data() {
    return {
      email: "",
      jelszo: "",
      felhasznalo: null,
    };
  },
  computed: {
    passVal() {
      if (this.jelszo.length == 0) {
        return null;
      }
      var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
      return reg.test(this.jelszo);
    },
    emailVal() {
      if (this.email.length == 0) {
        return null;
      }
      var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      return reg.test(this.email);
    },
  },
  methods: {
    bejelentkezes() {
      api.getBelepes(this.email, this.jelszo).then((response) => {
        this.felhasznalo = response.data;
        if (this.felhasznalo != null && this.felhasznalo != "") {
          this.$emit("belepve", true);
          this.$emit("felhasznalo", this.felhasznalo);
          this.$router.push({ name: "Banner" });
        } else {
          alert("Hibás adatok");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.spec {
  text-decoration: none;
  color: black;
}
a {
  color: black;
}
.card-header {
  background-color: white;
  border-bottom: none;
}
</style>