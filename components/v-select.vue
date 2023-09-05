<template>
  <div class="v-select">
    <p class="title" @click="areOptionsVisible = !areOptionsVisible">
      По умолчанию 
      <div class="arrow">
        <Arrow />
      </div>
    </p>
   
    <div v-if="areOptionsVisible" class="options">
      <p v-for="option in options" :key="option">
        {{ option.name }}
      </p>
    </div>
    
  </div>

</template>

<script>
import Arrow from '~/assets/icons/Arrow.vue';
export default {
    name: "v-select",
    props: {
        options: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    data() {
        return {
            areOptionsVisible: false,
        };
    },
    computed: {},
    components: { Arrow }
};
</script>

<style>
.v-select {
  position: relative;
  left: 0;
  cursor: pointer;
  top: 0.5rem;
  flex-direction: column;
}
.v-select p {
  margin: 0;
  padding: 0.5rem 1rem;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column-reverse;
  gap: 0.5rem;
  
}

.options {
  border: 1px solid #aeaeae;
  display: flex;
  position: absolute;
  padding: 0.375rem;
  flex-direction: column-reverse;
  align-items: center;
  width: 14.375rem;
  gap: 0.25rem;
  color: var(--primary-dark-gray, #354153);
font-family: 'Inter-Regular';
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--primary-stroke-or-disabled-gray, #eaecf0);
  background: var(--primary-white, #fff);
  margin: 0.25rem -3.25rem ; 
}

.title {
  border-radius: 0.5rem;
  border: 1px solid var(--primary-stroke-or-disabled-gray, #eaecf0);
  background: var(--primary-white, #fff);
  color: var(--primary-dark-gray, #354153);
  /* 16-24, Text M/Semi Bold */
  font-family: "Inter-Bold";
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 150% */
  position: relative;
  width: 11.125rem;
  
}

.options p:hover {
  display: flex;
  flex: 1 0 0;
  display: flex;
padding: 0.375rem 1rem;
align-items: center;
gap: 0.5rem;
align-self: stretch;
border-radius: 0.375rem;
background: #F2F4F7;
 /* 150% */

}

.arrow {
  display: flex;
  flex-direction: column;
  
  
}
</style>
