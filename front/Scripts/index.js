//Open a new window with sonarr
function GoToSonarr() {
    window.open("https://snkstream.com/sonarr/addseries");
}

//Open a new window with jellyfin
function GoToJellyfin() {
    window.open("https://snkstream.com/jellyfin");
}

const Counter = {
    data() {
      return {
        counter: 0
      }
    }
  }
  
  Vue.createApp(Counter).mount('#counter')  