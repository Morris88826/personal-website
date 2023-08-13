<template>
  <div
    align="left"
    style="margin-top: 50px; margin-left: 0px; margin-right: 100px"
  >
    <div>
      <h1 class="section">About me</h1>
      <br />
      <p>
        I am a BSc graduate from Hong Kong University of Science and Technology, majoring in Computer Science and Applied Mathematics with a minor in Robotics. 
        My research interests span Computer Vision, Image Processing, Artificial Intelligence, and Robotics.
      </p>
      <p>
        My fascination with Computer Vision and Robotics originated during my first year of college when I joined the HKUST Robotics team's Intelligence Car Racing project. 
        This experience ignited my passion for developing efficient algorithms to create autonomous vehicles that utilized camera information to navigate the track. 
        It was during this time that I realized the potential of image processing and feature extraction in enabling computers to perceive the world and make decisions akin to humans. 
        Motivated by this realization, I actively sought opportunities to further deepen my knowledge in these domains. 
        This led me to participate in various undergraduate research programs and intern at Lilee Systems, where I worked with their self-driving car team, contributing to the development of intelligent transportation solutions.
      </p>

      <p>
        During the final year of my undergraduate studies, I collaborated with Professor Chi-Keung Tang to conduct research on efficient algorithms for human action recognition. 
        Human action recognition in the field of computer vision aims to accurately classify the actions performed by individuals in video footage.
        <!--Numerous approaches have been explored, including RGB-based methods with traditional CNN or LSTM based techniques or 2D+T approaches, involving the encoding of 2D skeletons across time, known as 2D temporal skeletons, into a latent space for supervised learning.-->
        In our research, we proposed the utilization of 3D skeletons due to their advantageous properties of photometric, geometric, and viewpoint invariance. As a result, a single 3D+T (4D) skeleton proved sufficient for learning the relevant action class.
        We undertook the creation of a new dataset called HAA4D, which contains broader number of action classes (300), and designed it to be easily expandable and further proposed a few-shot architecture capable of distinguishing additional actions with limited training data per action class. 


        <!--State-of-the-art 3D skeleton-based models, such as ST-GCN or Shift-GCN, typically require substantial amounts of training data to effectively train the network. 
        However, there is a scarcity of 3D+T datasets encompassing a wide range of diverse action classes with most prominent dataset, NTU RGB+D 120, features merely 120 distinct actions. 
        Therefore, to address this limitation, we undertook the creation of a new dataset called HAA4D, which contains broader number of action classes (300), and designed it to be easily expandable. 
        Furthermore, we proposed a few-shot architecture capable of distinguishing additional actions with limited training data per action class. -->

        For more detailed information, please refer to the provided link <a href="https://cse.hkust.edu.hk/haa4d/">here</a>. Our aspirations for the HAA4D dataset are to inspire and facilitate fruitful future research endeavors in the domain of skeletal human action recognition. We hope that
        HAA4D will spawn fruitful future works on skeletal human action
        recognition.
      </p>
      <p>
        Beyond research, I find immense joy in programming and application development. 
        I have collaborated with friends to develop games using Unity, built user-focused applications with Swift to enhance crowdsourcing experiences, and assisted companies in website development using Vue.js. 
        I thrive on continuous learning, always seeking to expand my knowledge and become a versatile individual. 
        My ultimate aspiration is to contribute to the realization of the high-tech society depicted in sci-fi movies like Blade Runner. 
        I aim to be among those individuals who actively contribute to this remarkable future.
      </p>
      <p>
        Here is my
        <a
          href="https://drive.google.com/file/d/1bPc4VpecCHwViR9Sj_7yezgX284OsMlS/view?usp=share_link"
          >resume</a
        >.
      </p>
    </div>
    <br />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
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
</style>
