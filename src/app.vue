<template>
    <div class="daily">
        <div class="daily-menu">
            <div class="daily-menu-item"
            :class="{on:type==='recommend'}">每日推荐</div>
            
            <div class="daily-menu-item"
            :class="{on:type==='daily'}"
            @click="showThemes =!showThemes">主题日报</div>

            <ul v-show="showThemes">
                <li v-for="item in themes">
                    <a :class="{on:item.id===themeId&&type==='daily'}">{{item.name}}</a>
                </li>
            </ul>
        </div>


        <div class="daily-list">

        </div>
    </div>
</template>
<script>
import $ from "./lib/util";
export default {
  data() {
    return {
      themes: [],
      showThemes: false,
      type: "recommend",
      themeId: 0
    };
  },
  methods: {
    getThemes() {
      $.ajax.get("themes").then(res => {
        this.themes = res.others;
      });
    }
  },
  mounted() {
    this.getThemes();
  }
};
</script>

<style scoped>
.daily-menu ul {
  list-style-type: none;
}
.daily-menu ul li a {
  display: block;
  color: inherit;
  text-decoration: none;
  padding: 5px 0;
  margin: 5px 0;
  cursor: pointer;
}
.daily-menu ul li a:hover,
.daily-menu ul li a.on {
  color: #3399ff;
}
</style>

