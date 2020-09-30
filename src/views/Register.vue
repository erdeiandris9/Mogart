  <template>
  <div>
    <Nav />
    <div class="container text-center tavolsag" @submit.stop.prevent>
      <div class="card text-center w-100">
        <div class="card-header">
          <h2 class="text-monospace">Regisztráció</h2>
        </div>
        <div class="card-body text-center">
          <form class="form-horizontal">
            <div class="row">
              <div class="col">
                <label class="col-4 control-label text-center">
                  <span class="textformat input-group-text text-center"
                    >Email</span
                  >
                </label>
              </div>
              <div class="col-6">
                <input
                  type="email"
                  class="form-control"
                  placeholder
                  v-model="felhasznalo.email"
                  style="width: 500px"
                />
              </div>
            </div>

            <div class="row">
              <div class="col">
                <span class="input-group-text">Vezeték és keresztnév </span>
              </div>
              <div class="col col-lg-1">
                <input
                  class="form-control"
                  placeholder
                  v-model="felhasznalo.vezetekNev"
                />
              </div>
              <div class="col">
                <input
                  class="form-control"
                  type="text"
                  placeholder
                  v-model="felhasznalo.keresztNev"
                />
              </div>
            </div>

            <div class>
              <label class="col-sm-10 control-label text-center">
                <span class="textformat">Jelszó</span>
              </label>
              <div class>
                <input
                  type="password"
                  class="form-control"
                  placeholder
                  v-model="password"
                  @input="
                    checkNumber(), checkUpperCase(), checkChar(), checkLength()
                  "
                />
                <div v-if="passwordWidth != ''">
                  <br />
                  <div class="progress">
                    <div
                      class="progress-bar bg-dark"
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      :style="{ width: passwordWidth + '%' }"
                    >
                      {{ passwordWidth + "%" }}
                    </div>
                  </div>
                </div>
                <div>
                  <div v-if="containsChar">
                    <img src="../assets/check.jpg" width="15px" /> Kisbetű
                  </div>
                  <div v-if="containsUpperCase">
                    <img src="../assets/check.jpg" width="15px" /> Nagybetű
                  </div>
                  <div v-if="containsNumber">
                    <img src="../assets/check.jpg" width="15px" /> Szám
                  </div>
                  <div v-if="lengthCheck">
                    <img src="../assets/check.jpg" width="15px" /> Legalább 8
                    karakter
                  </div>
                </div>
              </div>
            </div>

            <div class>
              <label class="col-sm-10 control-label text-center">
                <span class="textformat">Jelszó újra</span>
              </label>
              <div class>
                <input type="password" class="form-control" placeholder />
              </div>
            </div>
            <div class>
              <label class="col-sm-10 control-label text-center">
                <span class="textformat">Telefonszám</span>
              </label>
              <div class>
                <input
                  type="email"
                  class="form-control"
                  placeholder
                  v-model="felhasznalo.telefonszam"
                />
              </div>
            </div>
            <div class="input-group">
              <div class="input-group-prepand">
                <span class="input-group-text">Irányítószám és város</span>
              </div>
              <input
                width="30px"
                class="form-control"
                v-model.number="felhasznalo.iranyitoszam"
              />
              <input
                type="text"
                class="form-control"
                v-model="felhasznalo.varos"
              />
            </div>
            <div class="input-group">
              <div class="input-group-prepand">
                <span class="input-group-text">Utca és házszám </span>
              </div>
              <input
                type="text"
                class="form-control"
                v-model="felhasznalo.utcannev"
              />
              <input
                type="text"
                class="form-control"
                v-model.number="felhasznalo.hazszam"
              />
            </div>

            <div class="text-center">
              <div class>
                <div class="align-items-center">
                  <div class="checkbox">
                    <label> <input type="checkbox" /> Jegyezz meg </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <div class>
                <div class="align-items-center">
                  <button class="btn btn-dark" @click="ujFelhasznalo()">
                    Regisztráció
                  </button>
                </div>
              </div>
            </div>
          </form>
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
      passwordWidth: 0,
      password: "",
      containsNumber: false,
      containsUpperCase: false,
      containsChar: false,
      lengthCheck: false,
      felhasznalo: {},
    };
  },
  methods: {
    ujFelhasznalo() {
      api.postUjFelhasznalo(this.felhasznalo);
      setTimeout(() => {
        this.$router.push("/Bejelentkezes");
      }, 1500);
    },
    checkNumber() {
      this.felhasznalo.jelszo = this.password;
      if (/\d/.test(this.password) && !this.containsNumber) {
        this.passwordWidth += 25;
        this.containsNumber = true;
        console.log("Szám " + this.passwordWidth);
      } else if (!/\d/.test(this.password) && this.containsNumber) {
        this.passwordWidth -= 25;
        this.containsNumber = false;
      }
    },
    checkUpperCase() {
      if (/[A-Z]/.test(this.password) && !this.containsUpperCase) {
        this.passwordWidth += 25;
        this.containsUpperCase = true;
        console.log("Nagy betű " + this.passwordWidth);
      } else if (!/[A-Z]/.test(this.password) && this.containsUpperCase) {
        this.passwordWidth -= 25;
        this.containsUpperCase = false;
      }
    },
    checkChar() {
      if (/[a-z]/.test(this.password) && !this.containsChar) {
        this.passwordWidth += 25;
        this.containsChar = true;
        console.log("Kis betű " + this.passwordWidth);
      } else if (!/[a-z]/.test(this.password) && this.containsChar) {
        this.passwordWidth -= 25;
        this.containsChar = false;
      }
    },
    checkLength() {
      if (this.password.length >= 8 && !this.lengthCheck) {
        this.passwordWidth += 25;
        this.lengthCheck = true;
      } else if (this.password.length < 8 && this.lengthCheck) {
        this.passwordWidth -= 25;
        this.lengthCheck = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card-header {
  background-color: white;
  border-bottom: none;
}
input {
  margin-bottom: 15px;

  width: 100%;
}
.input-group {
  margin-bottom: 15px;
  width: 100%;
  right: 0%;
}
.form-control {
  width: 100px;
}
</style>