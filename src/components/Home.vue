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
  width: calc(100% - 22px);
  max-width: 480px;
  box-sizing: border-box;
  text-align: center;
  font-size: 16px;
}
.website {
  list-style: none;
  padding-left: 0px;
  color: white;
  font-size: 10px;
  --thumbnail-size: 90px;
  --padding: 16px;
}
.website li {
  display: inline-block;
  width: var(--thumbnail-size);
  height: var(--thumbnail-size);
  margin: calc((100vw - var(--thumbnail-size)*4 - var(--padding)*2)/8);
  margin-bottom: 10px;
}
@media only screen and (min-width: 640px) {
  .website li {
    margin: calc((640px - var(--thumbnail-size)*4 - var(--padding)*2)/8);
    margin-bottom: 10px;
  }
}
.website .website-thumbnail {
  width: calc(var(--thumbnail-size) * .5);
  height: calc(var(--thumbnail-size) * .5);
  background: #000;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
