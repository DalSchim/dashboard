<template>
  <!--creation d'une galerie qui vas afficher les image importer par le drop fill qui est envois en bdd et recupére a l'aide d'un api-->

  <div class="galerie">
    <div class="galeri-wrapeur">
      <div class="galeri-contain">
        <div class="galeri-image">
          <img src="https://picsum.photos/200/300" alt="">
        </div>
        <div class="galeri-image">
          <img src="https://picsum.photos/200/300" alt="">
        </div>
        <div class="galeri-image">
          <img src="https://picsum.photos/200/300" alt="">
        </div>
        <div class="galeri-image">
          <img src="https://picsum.photos/200/300" alt="">
        </div>
        <div class="galeri-image">
          <img src="https://picsum.photos/200/300" alt="">
        </div>
        <div class="galeri-image">
          <img src="https://picsum.photos/200/300" alt="">
        </div>
        <div class="galeri-image">
          <img src="https://picsum.photos/200/300" alt="">
        </div>
        <div class="galeri-image">
          <img src="https://picsum.photos/200/300" alt="">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ImageGalery',
}
</script>

<style scoped lang="scss">
.galerie {
  width: 100%;
  height: 100%;
  background: #F8F8F8;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .galeri-wrapeur {
    width: 80%;
    height: 80%;
    background: #FFFFFF;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .galeri-contain {
      width: 100%;
      height: 100%;
      display: flex;
      padding: 12px;
      flex-wrap: wrap;
      justify-content: start;
      align-items: center;
      overflow: scroll;
      gap: 16px;

      .galeri-image {
        width: 200px;
        height: 200px;
        background: #E94F35;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
          transition: 0.3s;

          &:hover {
            cursor: pointer;
            transform: scale(1.1);
            object-fit: cover;
          }

          &:active {
            transform: scale(1.2);
            object-fit: cover;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .galerie {
    width: 100%;
    height: 100%;
    background: #F8F8F8;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .galeri-wrapeur {
      width: 100%;
      height: 100%;
      background: #FFFFFF;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      .galeri-contain {
        width: 100%;
        height: 80%;
        display: flex;
        padding: 12px;
        flex-wrap: wrap;
        justify-content: start;
        align-items: center;
        overflow: scroll;
        gap: 16px;

        .galeri-image {
          width: 200px;
          height: 200px;
          background: #E94F35;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
            transition: 0.3s;

            &:hover {
              cursor: pointer;
              transform: scale(1.1);
              object-fit: cover;
            }

            &:active {
              transform: scale(1.2);
              object-fit: cover;
            }
          }
        }
      }
    }
  }
}


</style>