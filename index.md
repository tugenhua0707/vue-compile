
一：如下使用slot接收<template></template>中的内容是正常，事件也可以传递过来；如下代码：
HTML代码如下：
<!DOCTYPE html>
<html>
  <head>
    <title>演示Vue</title>
    <script src="./libs/vue.js"></script>
    <link rel="stylesheet" href="./css/index.css" />
    <script src="./js/vue-compile.js"></script>
  </head>
  <body>
    <div id="app">
      <h3>vue-compile编译模板</h3>
      <vue-compile>
        <template>
          <div @click="clickFunc()">我是来测试vue-compile的使用，请点击我~</div>
        </template>
      </vue-compile>
    </div>
    <script id="vue-compile" type="text/x-template">
      <div>
        <slot></slot>
      </div>
    </script>
    <script type="text/javascript">
      new Vue({
        el: '#app',
        data() {
          return {
            
          }
        },
        methods: {
          clickFunc() {
            console.log(111);
          }
        }
      });
    </script>
  </body>
</html>

JS代码如下：
Vue.component('vue-compile', {
  template: '#vue-compile',
  props: {
    
  },
  data() {
    return {

    }
  },
  beforeMount() {

  },
  mounted() {

  },
  methods: {
    
  }
});


