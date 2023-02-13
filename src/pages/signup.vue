<template>
  <q-page class="flex flex-center" style="width: 100%;">
    <section id="header" style="width: 100%; top: 0; ">
      <div class="overlay"></div>
        <video poster="oceanVideo.mp4" autoplay loop muted>
          <source type="video/mp4" src="oceanVideo.mp4" />
        </video>

        <div class="login-box">
          <h2>Sign up</h2>
          <form>
            <div class="user-box">
              <input type="text" name="" required="">
              <label>Username</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required="">
              <label>email</label>
            </div>
            <div class="user-box">
              <input type="password" name="" required="">
              <label>Password</label>
            </div>
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
        </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { computed } from "vue";
// import loginForm from ".components/loginForm.vue";

// app.component('loginForm', loginForm)

export default {
  name: "signup",

//   components: {
//     loginForm: loginForm
//   }
}
  // name: "LoginPage",

  // const $q = useQuasar()
  // const buttonColor = computed(() => {
  //   return $q.screen.lt.sm ? "secondary" : "primary";
  // });

  // return { buttonColor };
</script>

<style>

#header video {
  position: absolute;
  /* top: -31vh; */
  /* left: 0; */
  width: 100%;
  height: 100vh;
  margin-top: 0;
  object-fit: cover;
  z-index: -1;
}
#header {
  width: 100%;
  height: 100vh;
}

.main-page {
  height: 100vh;
  width: 100%;
  position: relative;
}
#main {
  height: 100vh;
  width: 100%;
  background: linear-gradient(rgb(35, 35, 45), rgb(55, 55, 60));
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    to right,
    rgba(34, 35, 46, 0.6),
    rgba(0, 194, 203, 0.2)
  );
  z-index: 1;
}

#oceanVideo {
  position: fixed;
}

@media screen and (max-aspect-ratio: 3/4) {
  /* body {
    background-color: white;
  } */

  video {
    width: auto;
    height: 100%;
  }


  .login-box {
    width: 90vw;
  }

  .login-box form button {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 4px;
  background: none;
  border: none;
}
}
@media screen and (min-aspect-ratio: 3/4) {
  body {
    /* background: -webkit-linear-gradient(rgb(35, 35, 45), rgb(55, 55, 60));
    background: -o-linear-gradient(rgb(35, 35, 45), rgb(55, 55, 60));
    background: -moz-linear-gradient(rgb(35, 35, 45), rgb(55, 55, 60));
    background: linear-gradient(rgb(35, 35, 45), rgb(55, 55, 60)); */
    font-family: sans-serif;
    margin:0;
    padding:0;
  }

  video {
    width: 100%;
    height: auto;
  }

  html {
  height: 100%;
  }

  .login-box {
  width: 400px;
  }

}
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 4vh;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
  z-index: 10;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  font-size: 36px;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top:0;
  left: 0.5rem;
  padding: 10px 0;
  font-size: 16px;
  color: #ffffff97;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #00e2b9;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  width: 100%;
  text-align: center;
  color: #00e2b9;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box a:hover {
  background: #00e2b9;
  color: #000;
  border-radius: 5px;
  box-shadow: 0 0 5px #00ba98d1,
              0 0 25px #00ba98d1,
              0 0 50px #00ba98d1,
              0 0 100px #00ba98d1;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00e2b9);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #00e2b9);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #00e2b9);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #00e2b9);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}

</style>
