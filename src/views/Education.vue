<template>
  <div
    align="left"
    style="margin-top: 50px; margin-left: 0px; margin-right: 100px"
  >
    <div>
      <h1 class="section">Education</h1>
      <br />
      <h2>Degree programs</h2>
      <h3>Hong Kong University of Science and Technology (2017 – 2021)</h3>
      <ul>
        <li>BSc in Computer Science & Applied Mathematics</li>
        <li>Minor in Robotics</li>
        <li>Graduated with First Class Honors</li>
        <li>GPA: 3.663/4.3</li>
        <li>
          Diploma:
          <a
            href="https://drive.google.com/file/d/1wWU0dek0SwMT0kqLxD26QRBuyklX-0sv/view?usp=sharing"
          >
            here</a
          >
          , Official Transcript:
          <a
            href="https://drive.google.com/file/d/1gdayikZR0cJQ3Tmho1ZrNywIb5wmfzha/view?usp=sharing"
            >here</a
          >
        </li>
      </ul>

      <br />
      <h2>Exchange and visiting programs</h2>
      <p>Georgia Institute of Technology (Georgia, Fall 2019)</p>
      <ul>
        <li>GPA: 3.8/4.0</li>
        <li>
          Official Transcript:
          <a
            href="https://drive.google.com/file/d/1rLrk2meU8b1A4Dx8RArvk6g1EyVHaCDD/view?usp=sharing"
            >here</a
          >
        </li>
      </ul>
    </div>
    <br />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Education",
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
