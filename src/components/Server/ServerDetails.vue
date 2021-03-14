<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="isStatusReflesh">
      Sunucu Bilgisi Güncellendi [eventBusla Güncellendi.]! {{ status }}
    </p>
    <p v-else>Sunucu Bilgisi güncel değil!!</p>
    <p v-if="isStatusReflesh">
      Sunucu Bilgisi Güncellendi [Vuex ile Güncellendi] ! {{ returnVuex }}
    </p>
    <p v-else>Sunucu Bilgisi güncel değil!!</p>
    <p v-if="isStatusReflesh">
      Sunucu Bilgisi Güncellendi [Props ile Güncellendi] ! {{ propsStatus }}
    </p>
    <p v-else>Sunucu Bilgisi güncel değil!!</p>
  </div>
</template>
 
<script>
import { eventBus } from "../../main";
export default {
  data() {
    return {
      isStatusReflesh: false,
      status: "",
    };
  },
  props: {
    propsStatus: String,
  },
  computed: {
    returnVuex() {
      return this.$store.getters.returnServerStatus;
    },
  },
  created() {
    eventBus.$on("status", (statusText) => {
      this.status = statusText;
      this.isStatusReflesh = true;
    });
  },
};
</script>
 
<style>
</style>