<template>

    <v-row class="d-flex justify-center" >
    <v-card max-width="100vh" id="borderDemo" rounded >
      <v-sheet class="d-flex flex-wrap justify-center " ><h1>FAQ:</h1> </v-sheet>
      <v-expansion-panels variant="popout" class="my-4" >

        <v-expansion-panel
          v-for="question in questions"
          :title="question.question"
          :text="question.answer"
        ></v-expansion-panel>
      </v-expansion-panels>
    </v-card>

</v-row>
  </template>

  
<script>
export default {
  props:['Component'],
  data(){
    return {
      questions: [{question : 'Can I get banned for buying followers/likes?',  answer: "Absolutely not. It's not different than asking for a friend to follow your account. No one of our customers came to us with a complaint regarding their account's status on Instagram."},
                  {question : "I'm buying bots or real profile ?",  answer: 'When you use our services, you pay for real profile! Profiles on our packages are high quality and real accounts are included.'},
                  {question : "Why am I going to pay for bot followers, though?",  answer: "When you're paying for our services, you are guaranteed to receive targeted, real and active followers who will contribute to your visibility and make your payment worth it. Consider us the best place to buy Instagram followers."},
                  {question : "Is having many followers on my profile help to attract organic engagement?",  answer: "Yes! When you have many real and active followers on your profile, it appears like you're a local celebrity, and people notice that. For this reason, a user who has many followers that are legit will attract the attention of potential organic followers."},
                  {question : "How long will it take for me to receive my followers?",  answer: "That depends on stock conditions and how many followers you wish to get. While typing in the number you want to receive, you will see the estimated time beside it."},
                  {question : "What should I do after I place my order?",  answer: "Literally nothing! Let our social media experts do the worrying for you and compile your service package together. Before you know it, your profile will begin to be followed/liked."},
                  {question : "How can I contact you?",  answer: "You can reach us in two ways: by clicking the live chat feature found at the bottom right corner of this page, or, if we are unavailable via chat, you can fill out a contact form page."},
                  {question : "What information do I need to provide?",  answer: "In order to provide you with followers/likes, all we ask is that you give us your Instagram username or photo URL and an email address where we can reach you. It’s a quick, hassle-free experience. The process of sending you followers/likes will begin within, at a maximum, 30 minutes after payment."},
                  {question : "Is it possible to be issued a refund?",  answer: "The only circumstance in which you will receive a refund is when we do not deliver your order within the given time in which you first placed your order. However, if your order has been delivered promptly and completely, we will not issue a refund."},
                  {question : "Why is it that my account needs to be set to public?",  answer: "To successfully send you followers, likes, and comments, our system must have access to your profile and can only have that access if it is set to public."},
                  {question : "What a are the account requirement ? ",  answer: "1) You must have a live account with a profile photo and at least 1 post on the wall. 2) The profile must be open (Not Private). 3) Before receiving a message about the complete fulfillment of your order and during the entire warranty period:a. DO NOT CLOSE THE PROFILE (DO NOT INCLUDE 'PRIVACY');b. DO NOT CHANGE LOGIN (NICK = URL);c. DO NOT CHANGE THE INFORMATION IN THE PROFILE (description, contacts, links);d. DO NOT CHANGE THE THEME OF YOUR PUBLICATIONS;e. DO NOT ORDER SUBSCRIBERS IN OTHER SERVICES."},
                  {question : "It has been a few hours since I placed my order but I am not receiving any of the followers/likes. What should I do?",  answer: "For first don't worry , we deliver all our orders. You must do is verify whether your account is set to public or private. If you discover that your account is set to private, it cannot receive followers/likes. Once you have set your profile to public, send us an email to notify us of the change. If your account is set to public, but you still do not receive your order, please contact us directly to help you solve this issue quickly."},

                  {question : "Where can I follow all my orders ?",  answer: "You can follow all yours order by clicking on the top right icon"}

                
      
                 
      ],
    }
  }
}
</script>
<style lang="css">

.fade-enter-active, .fade-leave-active {
  display: none;

  transition: opacity .5s;

}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
