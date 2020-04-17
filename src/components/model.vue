<template>
  <div class="pageModel">
    <div id="viewer" />
  </div>
</template>

<script>
import Autodesk from 'forge-viewer'
// import THREE from 'three'

let t = {}
export default {
  name: 'pageModel',
  components: {},
  beforeCreate () {
    t = this
  },
  data () {
    return {
      viewer: null,
      options: {
        src: '/static/model/3d.svf',
        env: 'Local'
      }
    }
  },
  watch: {},
  mounted () {
    t.loadViewer()
  },
  methods: {
    loadViewer () {
      t.viewer = new Autodesk.Viewing.Private.GuiViewer3D(document.getElementById('viewer'), {})
      Autodesk.Viewing.Initializer(t.options, function () {
        t.viewer.initialize()
        t.viewer.setLightPreset(8) // 使用第八个环境背景
        t.viewer.setReverseZoomDirection(true) // 反转滚轮缩放方向

        t.viewer.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, function (e) {
          console.log('材质加载完毕！')
        })
        t.viewer.addEventListener(Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, function (e) {
          console.log('模型树加载完毕！')
        })
        t.viewer.addEventListener(Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT, function (e) {
          // getAggregateSelection和getSelection方法是得到当前选择集的对象集合（DbId数组），前者是获取多个模型中的选择集，后者是获取单个模型。
          const sel = t.viewer.getSelection()
          console.log(sel)
          // 也可使用e里的数据
          // console.log(e)
        })

        t.viewer.loadModel(t.options.src)
      })
    }
  }
}
</script>

<style lang="scss">
.pageModel {
  #viewer {
    width: 100vw;
    height: 100vh;
  }
}
</style>
