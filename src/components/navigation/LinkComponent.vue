<script>
import { Icon } from '@iconify/vue';
export default{
  name: "LinkComponent",
  props: {
    icon: String,
    linkName: String,
    linkview: String,
  },
  components: {
    Icon,
  },
}

</script>

<template>
    <div class="link">
      <icon :icon="icon"/>
      <span>{{linkName}}</span>
    </div>
</template>

<style scoped lang="scss">

/*si je pase ma sourie au dessue de mon a il s'agrandi est lesse apparaire le text*/

.link{
  align-items: center;
  justify-content: center;
  display: flex;
  width: 32px;
  height: 32px;
  overflow: hidden;
  transition: width 0.5s;
  background: #2A3138;
  color: #ffff;
  transition: width 0.5s;
  border-radius: 8px;
  box-shadow: -4px -1px 4px 0px rgba(0, 0, 0, 0.25);
  span {
    display: none;
  }

}
.link:hover{
  left: 50%;
  border-radius:16px;
  border: #E94F35 solid 1px;
  padding: 8px 16px;
  width: 180px;
  justify-content: space-between;
  align-items: center;
  span{
    display: block;
  }


}


@media screen and (max-width: 910px) {
  .link{
    left: 50%;
    border-radius:16px;
    border: #E94F35 solid 1px;
    padding: 8px 16px;
    width: 200px;
    justify-content: space-between;
    align-items: center;
    span{
      display: block;
    }
  }
  &:hover{
    justify-content: space-between;
    align-items: center;
    span{
      display: block;
    }

  }


}

</style>