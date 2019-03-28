<template>
  <div class="container">
    <ul>
      <li v-for="site in sites" :key="site.url">
        <a :href="site.url" target="_blank">
          {{ site.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sites: [
        {
          name: '9gag.com',
          url: 'https://9gag.com/'
        },
        {
          name: 'Laravel',
          url: 'https://laravel.com/'
        },
        {
          name: 'GitLab',
          url: 'https://gitlab.com/'
        },
        {
          name: 'Facebook NewsFeed',
          url: 'https://newsfeed.fb.com/?lang=en'
        },
        {
          name: 'laracasts.com',
          url: 'https://laracasts.com/'
        },
        {
          name: 'Wizzair',
          url: 'https://wizzair.com/'
        },
        {
          name: 'FontAwesome',
          url: 'https://fontawesome.com/'
        },
        {
          name: 'Netflix internal apps'
        },
        {
          name: 'Adobe Portfolio'
        },
        {
          name: 'Xiaomi'
        }
      ]
    }
  }
}
</script>