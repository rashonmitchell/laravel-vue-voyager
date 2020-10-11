<template>
  <page :classes="{'c-page--padded-top': false}">


    <router-link :to="{ name: 'home' }">Go back</router-link>

    <article>

      <img :src="post.image" alt="">

      <h1>{{ post.title }}</h1>

      <div v-html="post.body"></div>

    </article>


  </page>
</template>

<script>

  import Page from './../components/Page';


  export default {
    name: 'TheHomePage',

    metaInfo () {
      return {
        title: this.seo.title
      }
    },

    created() {},

    mounted () {},

    destroyed () {},

    props: [],

    data() {
      return {
        ui: {},
        dataLayer: window.laravelDataLayer,
      }
    },

    computed: {
      post() {
        // const thisPost = this.$store.getters.getPost(this.$route.params.slug)
        // if (thisPost) return thisPost;
        // this.$router.push({ name: 'home' })
        // return false;
        return this.$store.getters.getPost(this.$route.params.slug)
      },

      seo() {
        return this.$store.state.views['post'].seo;
      },
    },

    methods: {},

    components: {
      Page
    }
  };
</script>
