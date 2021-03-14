<template>
  <div class="container">
    <Header></Header>
    <hr />
    <div class="row">
      <Servers></Servers>
    </div>
    <hr />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Servers from "./components/Server/Servers";

export default {
  components: {
    Header,
    Footer,
    Servers,
  },
};
</script>

<style>
</style>
