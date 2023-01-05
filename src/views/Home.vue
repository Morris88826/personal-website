<template>
  <div
    align="left"
    style="margin-top: 50px; margin-left: 0px; margin-right: 100px"
  >
    <div>
      <h1 class="section">About me</h1>
      <br />
      <p>
        I am a BSc student who graduated from Hong Kong University of Science
        and Technology. I majored in Computer Science and Applied Mathematics
        with a minor in Robotics. My research interests include Computer Vision,
        Image Processing, Artificial intelligence, and Robotics.
      </p>
      <p>
        My interest in Computer Vision and Robotics dated back to my first year
        in college when I joined the Intelligence Car Racing team in the HKUST
        Robotics team. I dedicated myself to developing efficient algorithms to
        build automated cars that used camera information to run along the
        track. This experience gave me the first glimpse of how by processing
        image information and extracting essential features, computers can
        perceive the world and make decisions like humans. Afterwards, I decided
        to further advance my knowledge in these realms by joining several
        undergraduate research programs and also interning at Lilee Systems
        under their self-driving car team, a team committed to providing smart
        transportation solutions to modern society.
      </p>

      <p>
        During my final year of undergraduate study, I worked with Professor
        Chi-Keung Tang and researched efficient algorithms for human action
        recognition. The goal of human action recognition in computer vision is
        to classify the person's action performed in a given video. Various
        approaches have been studied, such as RGB-based approaches, which
        utilize color images and use CNN-based or LSTM-based methods for
        classification, or 2D+T approaches that encode 2D skeletons into some
        latent space for traditional supervised learning. Our research proposed
        using 3D skeletons is more efficient as they are photometric, geometric,
        and viewpoint invariant, so that as few as one single 4D skeleton is
        sufficient to learn the pertinent action class. State-of-the-art 3D
        skeleton-based models such as ST-GCN or Shift-GCN required massive
        amounts of training data to train the network; however, there isn't much
        3D+T dataset with excessive diverse action classes. The most popular one
        is NTU RGB+D 120, with 120 different actions. Therefore, we decided to
        build a new HAA4D dataset that is easily expandable and proposed a
        few-shot architecture that can differentiate other actions under a small
        amount of training data. More details can be found
        <a href="https://morris88826.github.io/HAA4D/#/">here</a>. We hope that
        HAA4D will spawn fruitful future works on skeletal human action
        recognition.
      </p>
      <p>
        I enjoy programming, not only conducting research but also making
        applications. I have tried developing games with my friends using Unity,
        building an app using Swift that improves user experiences during
        crowdsourcing, and helping companies make their websites with Vue.js. I
        love learning new knowledge and making myself a more versatile person. I
        hope that one day we can achieve the high-tech society portrayed in
        sci-fi movies like Blade Runner, and by then, I hope that I had been one
        of those people that helped accomplish it.
      </p>
      <p>
        Here are my
        <a
          href="https://drive.google.com/file/d/1j_VRR2a5wJ6iVT4lngI9WLu5q2TC9AVM/view?usp=sharing"
          >CV</a
        >
        and
        <a
          href="https://drive.google.com/file/d/10yG4lR1LXQicNcTrLUXmBvBBoBnviArN/view?usp=sharing"
          >1-page resume</a
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
