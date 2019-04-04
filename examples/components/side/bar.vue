<template>
  <div class="side-bar">
    <div class="sidebar-inner">
      <div class="list">
        <div v-for="(one, idx1) in sidebar" :key="idx1">
          <div>{{ one.title }}</div>
          <div v-for="(two, idx2) in one.childrens" :key="idx2">
            <div>{{ two.title }}</div>
            <div v-for="(three, idx3) in two.childrens" :key="idx3">
              <div>{{ three.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebar: [
        {
          title: "基础",
          url: "/",
          childrens: [
            {
              title: "安装",
              url: ""
            },
            {
              title: "介绍",
              url: "",
              childrens: [
                {
                  title: "起步",
                  url: ""
                },
                {
                  title: "渲染",
                  url: ""
                }
              ]
            }
          ]
        },
        {
          title: "深入了解",
          url: "/",
          childrens: [
            {
              title: "注册",
              url: ""
            },
            {
              title: "自定义",
              url: ""
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.side-bar {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  width: 340px;
  background-color: #fff;
  .sidebar-inner {
    padding: 40px 20px 60px 60px;
  }
}
</style>
