<template>
  <q-layout view="lHh Lpr lFf">
    <div
      style="height: 7vh; width: 100%; z-index: 100"
      class="navBackdrop"
    ></div>
    <q-header elevated class="bg-transparent text-white z-max fixed navBar" style="height: 0;">
      <q-toolbar>
        <div class="col">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
            class="float-left"
          />
        </div>

        <div class="col text-center">
          <router-link to="/" class="headHome" tag="button">Ocean Data Project</router-link>
        </div>

        <div class="loginSignup col text-right column">
          <!-- <input
            type="text"
            class="bg-transparent navSearch"
            placeholder="  search . . ."
          /> -->
          <router-link to="/login" class="loginButton" tag="button" >Log In</router-link>
          <router-link to="/signup" class="signupButton" tag="button" >Sign up</router-link>
        </div>
      </q-toolbar>
    </q-header> -->

    <q-drawer v-model="leftDrawerOpen" show-if-below bordered class="bg-blue-grey-9 text-white EL">
       <div class="col text-center">
          <router-link to="/" class="headHome" tag="button">Ocean Data Project</router-link>
        </div>
      
      <q-list>

        <!-- <q-item-label header
          ><div style="height: 2vh; width: 100%"></div
        ></q-item-label> -->

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          style="height: 4rem; width: 100%; border-bottom: 1.5px solid rgba(255,255,255,0.4);"
        />
        <div class="EL_loginSignup col column">
          <!-- <input
            type="text"
            class="bg-transparent navSearch"
            placeholder="  search . . ."
          /> -->
          <router-link to="/login" class="loginButton" tag="button" >Log In</router-link>
          <router-link to="/signup" class="signupButton" tag="button" >Sign up</router-link>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style>
.navBackdrop {
  position: fixed;
  background: rgb(17, 24, 39);
  background: linear-gradient(
    180deg,
    rgba(17, 24, 39, 0.8) 0%,
    rgba(16, 24, 39, 0.3) 70%,
    rgba(252, 255, 255, 0) 100%
  );
}

.navBar {
  background: rgb(17, 24, 39);
  background: linear-gradient(
    180deg,
    rgba(17, 24, 39, 0.5) 0%,
    rgba(16, 24, 39, 0.3) 50%,
    rgba(17, 24, 39, 0.15) 75%,
    rgba(252, 255, 255, 0) 100%
  );
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  /* box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.5); */
  color: white;
}

.navSearch {
  /* background: none; */
  outline: 2px white;
  border: none;
  border-bottom: solid 1.5px;
  border-color: rgba(255, 255, 255, 0.6);
  color: white;
  padding: 0.25rem;
  height: 100%;
}

.navSearch :focus {
  background-color: white;
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid 2px;
  border-color: white;
}

input {
  background: rgba(255, 255, 255, 1);
  border: none;
  position: relative;
  display: block;
  outline: none;
  height: 60%;
  width: 25vw;
  /* margin: 0 auto; */
  padding: 0.5rem;
  color: white;
  /* -webkit-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.5); */
  /* box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.5); */
}
::-webkit-input-placeholder {
  color: #fff;
}
:-moz-placeholder {
  color: #fff;
}
::-moz-placeholder {
  color: #fff;
}
:-ms-input-placeholder {
  color: #fff;
}
.EL_loginSignup,
.loginSignup {
  padding: 1rem;
  display: inline-block;
  text-transform: uppercase;
  font-weight:normal;
}

.EL_loginSignup .loginButton,
.loginSignup .loginButton {
  color: #00e2b9;
  padding-inline: 1rem;
  padding-block: 0.6rem;
  text-decoration: none;
  border-radius: 0.25rem;
  text-shadow: 0 0 8px rgba(0, 5, 17, 1);
  transition: 400ms;
}
.EL_loginSignup .loginButton:hover,
.loginSignup .loginButton:hover {
  background-color: #00e2b9;
  color: #000;
  box-shadow: 0 0 2px #00ba98d1,
              0 0 10px #00ba98d1,
              0 0 25px #00ba98d1,
              0 0 50px #00ba98d1;
  
}

.EL_loginSignup .signupButton,
.loginSignup .signupButton {
  color: #fff;
  padding-inline: 1rem;
  padding-block: 0.6rem;
  text-decoration: none;
  border-radius: 0.25rem;
  text-shadow: 0 0 8px rgba(0, 5, 17, 1);
  transition: 400ms;
  margin-left: 1rem;
}

.EL_loginSignup .signupButton:hover,
.loginSignup .signupButton:hover {
  color: #ffa442;
  text-shadow: 0 0 2px #c46f00d1,
              0 0 10px #c46f00d1,
              0 0 25px #c46f00d1,
              0 0 50px #c46f00d1;
}

.headHome {
  font-size: 22px;
  text-decoration: none;
  color: #fff;
}


@media screen and (max-aspect-ratio: 3/4) {
  .loginSignup {
  display: none;
}

.headHome {
  font-size: 16px;
  text-align: left;
}

.navBar {
  display: flex;
  flex-direction: row-reverse;
 
}

.EL .headHome {
  margin-top: 4rem;
}

}

</style>
