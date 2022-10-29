<template>

    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">
        Vuetify
      </h1>
      <v-col justify="space-around">
      <v-card width="400">
        <v-img
          height="200"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
          cover
          class="text-white"
        >
          <v-toolbar
            color="rgba(0, 0, 0, 0)"
            theme="dark"
          >
            <template v-slot:prepend>
              <v-btn icon="$menu"></v-btn>
            </template>

            <v-toolbar-title class="text-h6">
              Messages
            </v-toolbar-title>

            <template v-slot:append>
              <v-btn icon="mdi-dots-vertical"></v-btn>
            </template>
          </v-toolbar>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-1 mb-2">
            Today
          </div>

          <v-timeline density="compact" >
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :dot-color="message.color"
              size="x-small"
            >
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> @{{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-col>

  <v-timeline direction="horizontal">
    <v-timeline-item rounded icon="mdi-store" size="x-large"  dot-color="orange">
      <template v-slot:opposite>
        <div class="text-h6">Choose a Service</div>

      </template>
      <div>
        <p>
          Choose a social media service from SocialManager's variety of offerings that meets every need.        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item rounded icon="mdi-store" size="x-large"  dot-color="blue">
      <template v-slot:opposite>
      
        <div class="text-h6">Enter Your Profile and Email</div>
      </template>
      <div>
        <p>
          No password or permission is needed! All you have to do is to enter your profile link or your username.        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item rounded icon="mdi-store" size="x-large"  dot-color="green">
      <template v-slot:opposite>
        <div class="text-h6"> Watch your profile grow</div>
       
      </template>
      <div>
        <p>
          You can pay via any bank card. We will proceed with the order and inform you once its done via email. You can also track your order status from the client area
       </p>
      </div>
    </v-timeline-item>
  
  </v-timeline>
    </div>




</template>

<script>
import logo from '../assets/logo.svg'

export default {
  name: 'HelloWorld',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader/tree/next',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify/tree/next',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    logo,
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Roadmap',
        href: 'https://vuetifyjs.com/introduction/roadmap/',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
}
</script>
