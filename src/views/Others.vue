<template>
  <div
    align="left"
    style="margin-top: 50px; margin-left: 0px; margin-right: 100px"
  >
    <div>
      <h1 class="section">Others</h1>
      <br />
      <h2>Skills</h2>
      <h3>Programming Languages</h3>
      <ul>
        <li>Python, C++/C (Proficient)</li>
        <li>JavaScript, HTML, MySQL (Upper intermediate)</li>
        <li>Java, C#, Swift (Intermediate)</li>
      </ul>
      <h3>Libraries & Frameworks</h3>
      <ul>
        <li>PyTorch, Tensorflow 2, tkinter</li>
        <li>Vue, Unity</li>
      </ul>
      <h3>Natural Languages</h3>
      <ul>
        <li>Mandarin (Native)</li>
        <li>English (TOEFL 109, 2021) (GRE 321, 2021)</li>
      </ul>

      <br />
      <h2>Extracurricular Activities</h2>
      <h3>Cabinet of HKUST Band Society</h3>
      <p>Hong Kong, 02/2018 ~ 02/2019</p>
      <ul>
        <li>Position: Promotion Secretary</li>
        <li>
          Design poster, society t-shirt, logo, leaflets, and other promotion
          materials
        </li>
      </ul>
      <br />
      <h2>Coursework</h2>
      <h3>Computer Science</h3>
      <ul>
        <li>Machine Learning</li>
        <li>Computer Vision</li>
        <li>Computer and Communication Security</li>
        <li>Data Visualization</li>
        <li>Game Programming</li>
        <li>Deep Learning in Computer Vision</li>
        <li>Fundamentals of Artificial Intelligence</li>
        <li>Database Management Systems</li>
        <li>Honors Discrete Mathematical Tools for Computer Science</li>
        <li>Design and Analysis of Algorithms</li>
        <li>Object-Oriented Programming and Data Structures</li>
        <li>Software Engineering</li>
        <li>Operating Systems</li>
      </ul>
      <h3>Mathematics</h3>
      <ul>
        <li>Introduction to Mathematics of Image Processing</li>
        <li>Game Theory</li>
        <li>Numerical Analysis</li>
        <li>Real Analysis</li>
        <li>Mathematical Analysis</li>
        <li>Matrix Computation</li>
        <li>Probability</li>
        <li>Applied Statistics</li>
        <li>Differential Equations</li>
        <li>Linear Algebra</li>
        <li>Multivariable Calculus</li>
        <li>Calculus</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Others",
  components: {},
  data() {},
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
