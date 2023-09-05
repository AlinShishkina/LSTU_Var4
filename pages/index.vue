<template>
  <div class="page">
    <div class="sidebar">
      <Sidebar />
    </div>
    <Header />
   </div>

   <div class="cards">
    <Card v-for="card in Cards"
    :key="card.id"
    :title="card.title"
    :text="card.text"
    :time="card.time"
    :category="card.category"
    
    />
    
   </div>

  
</template>

<script>
import Sidebar from "~/components/Sidebar.vue";
import Header from "~/components/Header.vue";
import Card from "~/components/Card.vue";
import '~/static/image1.png';

export default {
  components: {
    Card,
  },
data() {
  return {
    Cards: [
      {
        id: 1,
        category: 'Общество',
        time: 'сегодня в 18:30',
        title: 'Изготовленный Зурабом Церетели памятник Тихону Хренникову открыли в Ельце',
        text: 'Новая достопримечательность появилась в Ельце. Здесь открыли памятник композитору Тихону Хренникову. В этом году ...',
        url: '/static/image1.png'

      },
      {
        id: 2,
        category: 'Спорт',
        time: 'сегодня в 18:30',
        url: '/static/image1.png',
        title: 'Липецк признан беговой столицей России 2023 года',
        text: 'Липецк признан беговой столицей России 2023 года по итогам полумарафона «Забег.рф». В Липецке было 4000 участников забега, которые показали лучший...',
      

      },
      {
        id: 3,
        category: 'Экономика',
        time: 'сегодня в 18:30',
        url: '/static/image1.png',
        title: 'Электрокар EVOLUTE из Липецкой области признан электромобильным брендом № 1 в России',
        text: 'Электрокар под маркой EVOLUTE вновь подтвердил звание «Электромобиля № 1» в России...',
      

      },
      {
        id: 4,
        category: 'Общество',
        time: 'сегодня в 18:30',
        url: '/static/image1.png',
        title: 'Изготовленный Зурабом Церетели памятник Тихону Хренникову открыли в Ельце',
        text: 'Губернатор Липецкой области Игорь Артамонов, как и обещал ранее, посетил пункт временного размещения, в котором сейчас...',
      

      }
    ]
    
      }
    }
}


</script>

<style scoped>

.page {
 display: flex;
 align-items: flex-start;
 
}

.sidebar {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid var(--primary-stroke-or-disabled-gray, #EAECF0);
background: var(--primary-white, #FFF);

  
  
}

.header {
    display: flex;
  
}

.hed {
  
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.cards {
  display: flex;
  width: 23.125rem;
  gap: 2rem;
  justify-content: space-between;
  margin-left: 19.5rem;
}

</style>
