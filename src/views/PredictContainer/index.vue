<template>
  <div class="parent">
    <div class="div1">
      <small-title title="1" />啊啊啊
    </div>
    <div class="div2">
      <small-title title="2" />啊啊啊
    </div>
    <div class="div3">
      <small-title title="3" />啊啊啊
    </div>
  </div>
</template>

<script>
import smallTitle from "@/components/smallTitle";
export default {
  components: {
    smallTitle
  }
};
</script>

<style scoped>
.parent {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
}

.div1 {
  grid-area: 1 / 1 / 3 / 2;
  background-color: whitesmoke;
  box-shadow: 0 2px 2px 0 rgba(67, 67, 67, 0.2),
    0 6px 20px 0 rgba(80, 80, 80, 0.19);
  border-radius: 3px;
}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
  background-color: whitesmoke;
  box-shadow: 0 2px 2px 0 rgba(67, 67, 67, 0.2),
    0 6px 20px 0 rgba(80, 80, 80, 0.19);
  border-radius: 3px;
}
.div3 {
  grid-area: 2 / 2 / 3 / 3;
  background-color: whitesmoke;
  box-shadow: 0 2px 2px 0 rgba(67, 67, 67, 0.2),
    0 6px 20px 0 rgba(80, 80, 80, 0.19);
  border-radius: 3px;
}
</style>