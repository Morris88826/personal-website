<template>
  <div
    align="left"
    style="margin-top: 50px; margin-left: 0px; margin-right: 100px"
  >
    <div>
      <h1 class="section">Recent Projects</h1>
      <br />
      <p>
        Recent GitHub repositories that I have built. For more information,
        click <a href="https://github.com/morris88826">here</a>!
      </p>

      <div class="row">
        <div class="col" style="margin-top: 20px">
          <a href="https://github.com/Morris88826/HAA4D"
            ><img src="https://gh-card.dev/repos/Morris88826/HAA4D.svg"
          /></a>
        </div>
        <div class="col" style="margin-top: 20px">
          <a href="https://github.com/Morris88826/HAA_3D-T"
            ><img src="https://gh-card.dev/repos/Morris88826/HAA_3D-T.svg"
          /></a>
        </div>
        <div class="col" style="margin-top: 20px">
          <a href="https://github.com/Morris88826/STM32_Live_Stream_Car"
            ><img
              src="https://gh-card.dev/repos/Morris88826/STM32_Live_Stream_Car.svg"
          /></a>
        </div>
        <div class="col" style="margin-top: 20px">
          <a href="https://github.com/Morris88826/yolo-depth-estimation"
            ><img
              src="https://gh-card.dev/repos/Morris88826/yolo-depth-estimation.svg"
          /></a>
        </div>
        <div class="col" style="margin-top: 20px">
          <a href="https://github.com/Morris88826/crowdsource_screenlocker"
            ><img
              src="https://gh-card.dev/repos/Morris88826/crowdsource_screenlocker.svg"
          /></a>
        </div>
        <div class="col" style="margin-top: 20px">
          <a href="https://github.com/Morris88826/waste_item_classification"
            ><img
              src="https://gh-card.dev/repos/Morris88826/waste_item_classification.svg"
          /></a>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Project",
  components: {},
  data() {
    return {};
  },
  methods: {},
});
</script>

<style scoped>
p {
  font-size: 16px;
}

h1 {
  font-size: 20px;
}

.section {
  font-size: 25px;
}

table {
  width: 100%;
}

td {
  border-style: solid;
  border-width: 1px;
  width: 20%;
}

.card {
  margin: 20px;
  width: 50%;
}
</style>
