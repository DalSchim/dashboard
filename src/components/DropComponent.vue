<template>
    <div>
        <button class="dropdown-button" @click="toggleDropdown">
            <span>{{ title }}</span>
            <iconify-icon icon="ic:round-arrow-forward-ios"></iconify-icon>
        </button>

        <Transition name="slide-fade">
            <ul v-if="isActive" class="dropdown">
                <slot></slot>
            </ul>
        </Transition>
    </div>
</template>

<script>
export default {
    name: 'DropdownMenu',
    props: {
        title: String,
        isActive: Boolean,
    },
    methods: {
        toggleDropdown() {
            this.$emit('toggle-dropdown');
        },
    },
};
</script>
<style scoped>

ul{
    color: #eeeeee;
}

.dropdown {
    border-radius:8px ;
    padding: 8px 16px;
    margin-top: 6px;
    width: 200px;
    background-color: #f0f0f0;
    transform: translatex(0);
    transition: transform 0.2s;
    flex-direction: column;
    display: flex;
    gap: 16px;

}



.slide-fade-enter-from{
    transform: translatex(-110%);
}

.slide-fade-leave-to {
    transform: translatex(-110%);
}

.slide-fade-enter-active{
    transition: transform 0.2s ease-in-out;
}

 button{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    border: none;
    color: white;
    background : none;
    padding: 8px 0;
   &:hover, router-link-active{
     cursor: pointer;
     color: #E94F35;
   }
}



</style>
