<template>
  <div class="kebk-container">
    <p class="tips">请填写代理商信息</p>
    <form class="kebk-form">
      <div class="kebk-form-item">
        <label>姓名</label>
        <input type="text"
               placeholder="请输入姓名">
      </div>
      <div class="kebk-form-item">
        <label>上传证件照片</label>
        <a href="javascript:;" class="upload">选择文件<input type="file">
        </a>
      </div>
      <div class="kebk-form-item">
        <label>备注</label>
        <input type="text"
               placeholder="请输入备注信息">
      </div>
      <div class="kebk-form-item">
        <label>邀请码</label>
        <input type="text"
               placeholder="请输入姓名">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'apply-sup'
}
</script>

<style scoped lang="stylus">
.kebk-container
  padding 100px 0
  .tips
    line-height 100px
    font-size 24px
    text-align center
</style>
