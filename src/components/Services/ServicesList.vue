<template>
      <v-row class="d-flex justify-center">
   
   <router-link v-for="item in items" :to="item.link">
   <div class="parallax-card-wrapper">
 <v-card rounded class="card" >
   <v-img  class="card-bg"
   :src="item.image"
   height="220px"
   cover
 ></v-img>
 </v-card>
</div>
</router-link>
 


</v-row>





</template>

<script>

export default {
  props: ["dataImage"],
  data: () => ({
    show: false,
    dialog: false,
    items: [
      { title: 'Tiktok', link:'/services/tiktok'  , image: 'https://icones.pro/wp-content/uploads/2021/03/logo-icone-tiktok-simbolo.png' },
      { title: 'Instagram',link:'/services/instagram'  , image: 'https://i.postimg.cc/SsksG1Rg/kisspng-computer-icons-logo-instagram-5abe0fd9d350d3-5015052415224053378656.webp'},
      { title: 'Twitter', link:'/services/youtube', image: 'https://i.postimg.cc/j5V2fYKb/kisspng-united-states-youtube-logo-youtube-play-button-transparent-png-5ab1be08946c16-88898959152159.png' },
    ],
 
  }),
mounted(){
  window.localStorage.removeItem('vuex')

}
}
</script>

<style lang="scss">


$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);
body {
  -webkit-font-smoothing: antialiased;
}

p {
  line-height: 1.5em;
}

h1+p, p+p {
  margin-top: 10px;
}

.container {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.parallax-card-wrapper {
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  //background-color: #fff;
  &:hover{
    .card-info {
      transform: translateY(0);
    }
    .card-info p {
      opacity: 1;
    }
    .card-info, .card-info p {
      transition: 0.6s $hoverEasing;
    }
    .card-info:after {
      transition: 5s $hoverEasing;
      transform: translateY(0);
    }
    .card-bg {
      transition: 
        0.6s $hoverEasing,
        opacity 5s $hoverEasing;
      opacity: 1;
    }
    .card {
      transition:
        0.6s $hoverEasing,
        box-shadow 2s $hoverEasing;
      box-shadow:
        rgba(#FFA500, 0.7) 0 0 40px 5px,
        rgba(#FFA500, 1) 0 0 0 1px,

    }
  }
}

.card {
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 220px;
  overflow: hidden;
  border-radius: 10px;

  transition: 1s $returnEasing;
} 

.card-bg {
  position: absolute;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  transition:
    1s $returnEasing,
    opacity 1s 0.1s $returnEasing;
}




</style>