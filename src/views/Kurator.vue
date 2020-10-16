<template>
  <div>
    <Nav />
    <div class="container">
      <div class="row">
        <div class="col">
          <img src="../assets/kurator1.jpg" class="card-img" alt="..." />
        </div>
        <div class="col">
          <div class="card-body">
            <h5 class="card-title">Sinkó István (1951-)</h5>
            <p class="card-text">
              Képzőművész, művészeti író, tanár 34 évig általános iskolában
              tanított rajzot, művészettörténetet, majd 2006-2020 –ig a Képző-és
              Iparművészeti Szakgimnázium, rajz és festőtanára (a festő szak
              vezetője). Szakköröket vezet, szakmai lapokban publikál 30 éve.
              Képzőművészként 41 önálló kiállítása volt hazai és külföldi
              kiállítótermekben. Munkái megtalálhatóak magyarországi és külföldi
              múzeumokban és magángyűjteményekben.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img src="../assets/kurator2.jpg" class="card-img" alt="..." />
        </div>
        <div class="col">
          <div class="card-body">
            <h5 class="card-title">Makói Juhász István (1962-)</h5>
            <p class="card-text">
              Jelenleg a Magyar Képzőművészeti Egyetem gyakorló iskolájában a
              Kisképzőben dolgozom festés-technika és rajz tanárként a
              festőszakon. Korábban a Magyar Nemzeti Galéria Régi Magyar
              Osztályának restaurátor műhelyében voltam osztályvezető
              főrestaurátor 23 éven keresztül. A restaurálás mellett, festek,
              alkotok, fotózom, és grafikákat is készítek. Munkáimat kiállítások
              keretén belül mutatom be a nagyközönség számára. Tagja vagyok a
              Magyar Alkotóművészek- és a Magyar Restaurátorok Országos
              Egyesületének.
            </p>

            <p><a href="https://makoi-juhasz.eoldal.hu/">Weboldal</a></p>
            <p>
              <a
                href="http://archiv.restauratorkamara.hu/portfolio/portfolio.php?show_user_id=577"
                >Restaurátor kamara</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img src="../assets/kurator3.jpeg" class="card-img" alt="..." />
          <img src="../assets/kurator4.jpg" class="card-img" alt="..." />
        </div>
        <div class="col">
          <div class="card-body">
            <h5 class="card-title">Veres-Vancsai Lilla (1996-)</h5>
            <p class="card-text">
              A művészet mindig is a lételemem volt. Kisgyermekkorom óta festek,
              rajzolok, és azon szerencsések közé tartozom, akik ebben az
              irányban tudtak továbbtanulni. 2019-ben végeztem a Kaposvári
              Egyetem Rippl-Rónai Művészeti Karán festő szakon. Egyetemi
              tanulmányaim mellett már dolgoztam a szakmai tapasztalat
              megszerzésén, így 2017 óta szervezem a Vad Art rendezvényeket,
              különböző kiállításokat, workshopokat. A rendezvények adottságából
              kifolyólag már a kezdetektől meghatározó feladatom a zsűrizés és a
              kurátori munka. Minden pályázat után izgalmas alkotások sokasága
              tárul elénk, ebből pedig nem egyszerű feladat egy harmonikus,
              mégis sokszínű kiállítást megvalósítani. Az elmúlt évek során
              egyre tapasztaltabb lettem csapattársaimmal együtt és úgy gondolom
              változatos tárlatokat hoztunk létre. A Vad Art főszervezőjeként
              már számos rendezvényt szerveztem, számomra a megvalósulásuk egy
              igazi mámoros pillanat. Felemelő élmény látni, ahogy a programok,
              a hangulat és a szellemiség együtt munkálkodik, üzenetet közvetít
              és a résztvevők kapcsolódni tudnak mindehhez. A művészeti
              rendezvények szervezése ugyanolyan alkotási folyamat számomra,
              mintha egy képet festenék, csupán ehhez kell egy szuper csapat is,
              akikkel öröm együtt dolgozni.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";

export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}
.col {
  height: 100%;
  vertical-align: middle;
}
.card-img {
  margin-bottom: 40px;
}
</style>