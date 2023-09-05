<template>
    <div class="contacts">
      <p class="contact">Все контакты</p>
      <div class="drop-down-list">
        <vSelectVue
        :options="options" 
        />
     </div>
    </div>
    
</template>

<script>
import vSelectVue from './v-select.vue';

export default {
  components: {
    vSelectVue
  },
  data() {
    return {
      options: [
        {name: 'По умолчанию'},
        {name: 'Сначала старые'},
        {name: 'Сначала новые'}
      ]
    }
  }
}
</script>

<style scoped>
.contact {
  color: var(--primary-black, #0d1421);
  font-family: "Inter-Bold";
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.contacts {
  display: flex;
  width: 102.5rem;
  padding: 2rem 2rem 1.5rem 2rem;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  border-bottom: 1px solid var(--primary-stroke-or-disabled-gray, #EAECF0);
  
}

.drop-down-list {
  display: flex;
}

</style>
