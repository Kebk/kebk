<template>
  <div class="pagination-container">
    <el-pagination :background="background"
                   :total="total"
                   :current-page.sync="currentPage"
                   :page-size.sync="pageSize"
                   :pageSizes="pageSizes"
                   :layout="layout"
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    total: { type: Number, required: true },
    page: { type: Number, required: true, default: 1 },
    size: { type: Number, required: true, default: 10 },
    pageSizes: { type: Array, default () { return [10, 20, 30, 50] } },
    layout: { type: String, default: 'total, sizes, prev, pager, next, jumper' },
    background: { type: Boolean, default: true },
    autoScroll: { type: Boolean, default: true }
  },
  computed: {
    currentPage: {
      get () { return this.page },
      set (val) { this.$emit('update:page', val) }
    },
    pageSize: {
      get () { return this.size },
      set (val) { this.$emit('update:size', val) }
    }
  },
  methods: {
    handleSizeChange (val) {
      this.$emit('pagination', { page: this.currentPage, limit: val })
      if (this.autoScroll) { scrollTo(0, 800) }
    },
    handleCurrentChange (val) {
      this.$emit('pagination', { page: val, limit: this.pageSize })
      if (this.autoScroll) { scrollTo(0, 800) }
    }
  }
}
</script>

<style scoped lang="stylus">
.pagination-container
  background #fff
  padding 16px
</style>
