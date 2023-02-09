<template>
  <q-layout view="lHh Lpr lFf">
    <div
      style="height: 8vh; width: 100%; z-index: 100"
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

        <q-toolbar-title class="col text-center">
          Ocean Data Project
        </q-toolbar-title>

        <div class="col text-right column">
          <input
            type="text"
            class="bg-transparent navSearch"
            placeholder="  search . . ."
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-below bordered class="">
      <q-list>
        <q-item-label header
          ><div style="height: 3vh; width: 100%"></div
        ></q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          style=""
        />
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
    rgba(16, 24, 39, 0.6) 25%,
    rgba(17, 24, 39, 0.3) 50%,
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
</style>
