import axios from "axios";

const SERVER_URL = "http://localhost:9000";

class Api {
    getBelepes(email, jelszo) {
        return axios.get(`${SERVER_URL}/belepes`, { params: { email, jelszo } });
    }
    postUjFelhasznalo(felhasznalo) {
        axios.post(`${SERVER_URL}/felhasznalok`,
            felhasznalo
        )
            .then((response) => {
                console.log("Felhasználó hozzáadva: " + response);
                alert("Sikeres regisztráció");
            }, (error) => {
                console.log("Hiba: " + error);
                alert("Nem sikerült");
            });
    }

}
export default new Api();