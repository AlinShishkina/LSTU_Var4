<template>
  <div class="headbar">
    <div class="var-4">
      <Star />
      <p class="num-var">Вариант 4</p>
    </div>
    <div class="search">
      <input type="text" class="input-search" placeholder="Поиск" />
    </div>
  </div>

  <div class="navigation">
    <ul class="nav">
      <Button class="but-news" label="Все новости" />
      <Button class="button" label="Спорт" />
      <Button class="button" label="Общество" />
      <Button class="button" label="Экономика" />
    </ul>
  </div>
</template>

<script setup>
import Star from "/assets/icons/Star.vue";
import "/assets/main.css";
import Button from "primevue/button";

</script>

<style scoped>
.headbar {
  display: flex;
  padding: 2rem 1.5rem 0rem 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  align-self: stretch;
}

.var-4 {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.num-var {
  color: var(--primary-dark-gray, #354153);

  /* 24-32, Subheader/Semi Bold */
  font-family: "Inter-Bold";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2rem;
  width: 100%;
}

.search {
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  width: 14.5rem;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 1px solid var(--primary-stroke-or-disabled-gray, #eaecf0);
  background: var(--primary-white, #fff);
}
.input-search {
  flex: 1 0 0;
  color: var(--primary-gray, #667085);

  /* 14-20, Text S/Regular */
  font-family: "Inter-Regular";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 142.857% */
}

.nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
  margin-left: 1rem;
}

.but-news {
  display: flex;
  padding: 0.375rem 0.5rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0.5rem;
  background: #f2f4f7;
  width: 100%;
  width: 15.5rem;
  font-family: 'Inter-Regular';
  font-weight: 500;
  color: var(--primary-black, #0D1421);
/* 16-24, Text M/Medium */
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: 1.5rem; 
}

.button { 
  display: flex;
padding: 0.5rem 0.5rem 0.5rem 1.5rem;
align-items: center;
gap: 0.5rem;
align-self: stretch;
border-radius: 0.5rem;
color: var(--primary-black, #0D1421);
font-family: 'Inter-Regular';
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: 1.5rem; 
}
</style>
