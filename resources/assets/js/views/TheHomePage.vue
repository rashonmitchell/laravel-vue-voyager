<template>
  <page :classes="{'c-page--padded-top': false}">

  <h1>
    Home
  </h1>

  <ul v-if="postsSummary">
    <li v-for="post in postsSummary">
      <router-link :to="{ name: 'post', params: { slug: post.slug } }">
        {{ post.title }}
      </router-link>
    </li>
  </ul>

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
      postsSummary() {
        return this.$store.getters.getPostSummary
      },

      seo() {
        return this.$store.state.views['home'].seo;
      },
    },

    methods: {},

    components: {
      Page
    }
  };
</script>
