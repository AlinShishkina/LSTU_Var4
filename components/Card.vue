<template>
  <div class="card">
    <div class="category">
      <p>{{ category }}</p>
      <div class="time">
        <p>{{ time }}</p>
      </div>
    </div>

    <div class="image">
      <img v-for="image in images" :src="image.url" />
    </div>

    <div class="title">
      <p>{{ title }}</p>
    </div>
    <div class="text">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: { requered: true, type: String },
    time: { requered: true, type: String },
    title: { requered: true, type: String },
    text: { requered: true, type: String },
    id: { required: true, type: Number },
  },
};
</script>

<style scoped>
.category {
  display: flex;
  gap: 1rem;
  flex: 1 0 0;
  color: var(--primary-gray, #667085);

  /* 16-24, Text M/Regular */
  font-family: "Inter-Regular";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
}
.card {
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  border: 1px solid var(--primary-stroke-or-disabled-gray, #eaecf0);
  justify-content: center;
  width: 23.125rem;
  padding: 1.5rem;
  align-items: flex-start;
  gap: 1rem;
  flex: 1 0 0;
}

.text {
  font-family: "Inter-Regular";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 155.556% */
}

.title {
  color: var(--primary-black, #0d1421);
  /* 24-32, Subheader/Medium */
  font-family: 'Inter-Bold';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem; /* 133.333% */
}
</style>
