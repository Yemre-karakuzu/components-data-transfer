<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item" v-for="index in servers" :key="index.id">
        <button @click="refleshServers(index.status)">
          Sunucu#{{ index.id }} Status:{{ index.status }}
        </button>
      </li>
    </ul>
    <ServerDetails v-bind:propsStatus="status"></ServerDetails>
  </div>
</template>
 
<script>
import { eventBus } from "../../main";
import ServerDetails from "./ServerDetails";
export default {
  components: {
    ServerDetails,
  },
  data() {
    return {
      status: "",
      servers: [
        { id: 1, status: "Kritik" },
        { id: 2, status: "Normal" },
        { id: 3, status: "Tehlikede" },
        { id: 4, status: "Bilinmiyor" },
      ],
    };
  },

  methods: {
    refleshServers(statusInfo) {
      // ! props için kullanılacak proportyi tanımlıyoruz sadece child componente gönderimde kullanılır.
      this.status = statusInfo;

      // ! api gibi durumlar olmadığında vuex kullanmak istediğimizde direk mutations'a etki etmemiz gerekir. Büyük projelerde kullanılması önerilir.
      this.$store.commit("addServerStatus", statusInfo);
      // ! action sadece api ile kullanılır onun dışında direk mutations kullanabiliriz.
      // * this.$store.dispatch("actionServerStatus", statusInfo);

      // ! eventBus gönderilen veriyi bir tane dinlenicek key ile birlikte gönderir.
      // !Ondan dolayı küçük yada orta düzeyli projelerde karmaşası az ortamlarda kullanılır.Çünkü verinin kullanılacağı yerde eventBus'ın keyi dinlenmesi gerekir.
      eventBus.$emit("status", statusInfo);

      // !  this.$emit("status",statusİnfo)  kullanmak için child=>parent olarak kullanmamız gerekir propsun tam tersi.
      // ! parent da <ServerDetails @status="eventStatus=$event" ></ServerDetails> şeklinde dinleyip datayı elde edebiliriz.
    },
  },
};
</script>

<style>
</style>