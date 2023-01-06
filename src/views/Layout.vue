<template>
  <a-layout class="layout">
    <a-layout-header>
      <a-menu mode="horizontal" :style="{ lineHeight: '64px' }">
        <router-link :to="{ name: 'home' }">
          <a-menu-item key="1">Mu-Ruei, Tseng</a-menu-item>
        </router-link>
        <router-link :to="{ name: 'projects' }">
          <a-menu-item key="2">Projects</a-menu-item>
        </router-link>
        <router-link :to="{ name: 'experience' }">
          <a-menu-item key="3">Experience</a-menu-item>
        </router-link>
        <router-link :to="{ name: 'education' }">
          <a-menu-item key="4">Education</a-menu-item>
        </router-link>
        <router-link :to="{ name: 'honors' }">
          <a-menu-item key="5">Honors</a-menu-item>
        </router-link>
        <router-link :to="{ name: 'others' }">
          <a-menu-item key="6">Others</a-menu-item>
        </router-link>
      </a-menu>
    </a-layout-header>
    <hr style="margin: 0px; opacity: 0" />
  </a-layout>
  <div class="container" style="max-width: unset; margin: 0px">
    <div class="row" v-if="collapse" style="margin-top: 25px">
      <div class="col-3" style="margin: auto; text-align: center">
        <img
          src="../assets/profilePic.jpg"
          style="border-radius: 50%; width: 70%"
        />
      </div>
      <div class="col" style="margin: auto">
        <div>
          <p style="margin-bottom: 0px"><b>Mu-Ruei Tseng (Morris)</b></p>
          <p style="font-size: 10px">
            <b>BS COSC+AM/ROBO student at HKUST (2017~2021)</b>
          </p>
          <p style="font-size: 10px">
            <b>MS Computer Science at Texas A&M (2023~)</b>
          </p>

          <p
            style="
              font-size: 12px;
              display: flex;
              align-items: center;
              margin-bottom: 0px;
            "
          >
            <MailOutlined />
            <a href="mailto: morris88826@gmail.com" style="margin-left: 5px"
              >Email</a
            >
          </p>
          <p
            style="
              font-size: 12px;
              display: flex;
              align-items: center;
              margin-bottom: 0px;
            "
          >
            <GithubOutlined />
            <a href="https://github.com/Morris88826/" style="margin-left: 5px"
              >GitHub</a
            >
          </p>
          <p
            style="
              font-size: 12px;
              display: flex;
              align-items: center;
              margin-bottom: 0px;
            "
          >
            <LinkedinOutlined />
            <a
              href="https://www.linkedin.com/in/morris-mu-ruei-tseng/"
              style="margin-left: 5px"
              >LinkedIn</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-3" v-if="!collapse">
        <div class="row">
          <img
            src="../assets/profilePic.jpg"
            style="
              margin-top: 50px;
              margin-left: auto;
              margin-right: auto;
              border-radius: 50%;
              width: 70%;
            "
          />
        </div>
        <div style="margin-top: 20px; margin-left: 20px">
          <p style="margin-bottom: 0px"><b>Mu-Ruei Tseng (Morris)</b></p>
          <p style="font-size: 10px">
            <b>BS Computer Science and Mathematics, minor Robotics at HKUST (2017~2021)</b>
          </p>
          <p style="font-size: 10px">
            <b>MS Computer Science at Texas A&M (2023~)</b>
          </p>

          <br />
          <p
            style="
              font-size: 12px;
              display: flex;
              align-items: center;
              margin-bottom: 0px;
            "
          >
            <MailOutlined />
            <a href="mailto: morris88826@gmail.com" style="margin-left: 5px"
              >Email</a
            >
          </p>
          <p
            style="
              font-size: 12px;
              display: flex;
              align-items: center;
              margin-bottom: 0px;
            "
          >
            <GithubOutlined />
            <a href="https://github.com/Morris88826/" style="margin-left: 5px"
              >GitHub</a
            >
          </p>
          <p
            style="
              font-size: 12px;
              display: flex;
              align-items: center;
              margin-bottom: 0px;
            "
          >
            <LinkedinOutlined />
            <a
              href="https://www.linkedin.com/in/morris-mu-ruei-tseng/"
              style="margin-left: 5px"
              >LinkedIn</a
            >
          </p>
        </div>
      </div>
      <div class="col" style="margin-left: 25px" v-if="collapse">
        <slot />
      </div>
      <div class="col" style="margin-left: 0px" v-else>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from "vue";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
  components: { GithubOutlined, LinkedinOutlined, MailOutlined },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },

      gridsize: {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
      },
    };
  },
  setup() {
    return {};
  },
  computed: {
    collapse: function () {
      return this.window.width <= this.gridsize.lg ? true : false;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },

  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
});
</script>

<style scoped>
[data-theme="dark"] .site-layout-content {
  background: #141414;
}

.ant-layout-header {
  padding: 0px;
}

a {
  color: black;
}
</style>
