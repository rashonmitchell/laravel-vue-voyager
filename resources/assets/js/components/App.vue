<template>
  <div>


    <transition name="fade">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
  export default {
    name: 'App',

    metaInfo: {
      title: 'Blog',

      htmlAttrs: {
        charset: 'utf-8',
        lang: 'es',
        amp: undefined
      },
    },

    created() {},

    mounted () {},

    destroyed () {},

    data() {
      return {
        csrf_token: window.csrf_token
      }
    },

    methods: {},

    components: {}
  }
</script>

