<template>
  <div class="home">
    <h1 class="white"><strong>Firefox</strong> Rocket</h1>
    <input class="search" type="text" placeholder="Search or enter address" />
    <ul class="website">
      <li v-for="website in websites" :key="website.id">
        <div class="website-thumbnail">[]</div>
        <p class="website-name">{{website.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import data from '../data'
export default {
  name: 'Home',
  data () {
    return {
      'websites': data.websites
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  margin-top: 25vh;
}
h1{
  font-weight: 200;
  letter-spacing: -1px;
}
strong {
  font-weight: 600;
}
.white {
  color: white;
}
.search {
  margin: 30px auto 40px;
  height: 48px;
  width: 306px;
  max-width: 480px;
  box-sizing: border-box;
  text-align: center;
  font-size: 16px;
}
.website {
  list-style: none;
  margin: auto;
  max-width: 306px;
  padding-left: 0px;
  color: white;
  font-size: 10px;
  --thumbnail-size: 70px;
  --padding: 16px;
}
.website li {
  display: inline-block;
  width: var(--thumbnail-size);
  height: var(--thumbnail-size);
  margin: calc((306px - var(--thumbnail-size)*4 - var(--padding)*2)/8);
  margin-bottom: 22px;
}
.website .website-thumbnail {
  width: 48px;
  height: 48px;
  background: #000;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
