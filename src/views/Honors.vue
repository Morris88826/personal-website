<template>
  <div
    align="left"
    style="margin-top: 50px; margin-left: 0px; margin-right: 100px"
  >
    <div>
      <h1 class="section">Honors</h1>
      <br />
      <h2>Tech</h2>
      <ul>
        <li>
          The Third Price of the 13th NXP Cup Intelligent Car Racing Competition
          in the “Dual Car” category. (South China Region, July 2018)
        </li>
        <li>
          Qualified to enter the National Round of the 14th NXP Cup Intelligent
          Car Racing Competition in the “Creative” category. (August, 2019)
        </li>
        <li>
          Google Hash Code Online Qualifications: 400th Place. (Feburary, 2020)
        </li>
      </ul>
      <br />
      <h2>Non-Tech</h2>
      <ul>
        <li>Recipient of HKUST Admission Scholarship (2017~2018).</li>
        <li>
          Talent Development Scholarship (2018/2019): Awarded to talented
          students. From Hong Kong SAR Government.
        </li>
        <li>
          Dean’s List, HKUST (2018, 2020, 2021): Awarded to students who achieve
          a Term GPA > 3.7, which is arouond top 6% university-wide. From The
          Hong Kong University of Science and Technology.
        </li>
        <li>
          High Flyers Program Scholarship (2020/2021): Designated to students
          who have obtained excellent performance in Game Programming, Computer
          Music, or Creative Sound Design. From HKUST Alumni Endowment Fund.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Honors",
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
h2 {
  font-size: 18px;
}
h3 {
  font-size: 16px;
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
</style>
