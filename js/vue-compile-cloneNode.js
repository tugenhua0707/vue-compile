
Vue.component('vue-compile', {
  template: '#vue-compile',
  props: {
    data: {
      type: Array,
      required: true
    },
    opera: String
  },
  data() {
    return {
      
    }
  },
  created() {

  },
  beforeMount() {
    console.log(this.data);
    console.log(this.opera);
  },
  mounted() {
    this.$nextTick(() => {
      this.compile();
    });
  },
  methods: {
    compile() {
      let methods = {};
      const $parent = this.$parent;
      //var template = '<div @click="clickFunc()">我是来测试vue-compile的使用，请点击我~</div>';
      var template = this.opera;
      const cell = document.createElement('div');
      cell.innerHTML = template;
      Object.keys($parent).forEach(key => {
        const func = $parent[key];
        if (typeof(func) === 'function' && (func.name  === 'boundFn' || func.name === 'n')) {
          methods[key] = func;
        }
      });
      const res = Vue.compile(cell.outerHTML);
      // 获取组件使用的局部 component
      const components = {};
      Object.getOwnPropertyNames($parent.$options.components).forEach(item => {
        components[item] = $parent.$options.components[item];
      });
      const component = new Vue({
        render: res.render,
        staticRenderFns: res.staticRenderFns,
        methods: methods,
        data () {
          return $parent._data;
        },
        components: components
      });
      const Cell = component.$mount();
      this.$refs.cloneNode.appendChild(Cell.$el);
    }
  }
})