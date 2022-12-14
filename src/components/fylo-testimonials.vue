<template>
  <div class="testimonials main-container main-layout full">
    <div v-if="cards" class="testimonials inner-container flex ">
      <div
        class="testimonial-card"
        v-for="(card, idx) in cards.slice(0, 3)"
        :key="idx">
        <div class="testimonial-content container">
          <p class="testimonial-content">{{ card.txt }}</p>
        </div>
        <div class="testimonial-title flex align-center">
          <img class="testimonial-user-img" :src="getSrc(idx)" alt="" />
          <div class="testimonial-title content flex">
            <span class="testimonial-user-name"> {{ card.fullName }}</span>
            <span class="testimonial-user-title">{{ card.jobTitle }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cards: [
          {
            txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            imgUrl: '../../src/assets/images/profile-1.jpg',
            fullName: 'Satish Patel',
            jobTitle: 'Founder & CEO, Huddle',
          },
          {
            txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            imgUrl: '../../src/assets/images/profile-2.jpg',
            fullName: 'Iva Boyd',
            jobTitle: 'Founder & CEO, Huddle',
          },
          {
            txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            imgUrl: '../../src/assets/images/profile-3.jpg',
            fullName: 'Bruce McKenzie',
            jobTitle: 'Founder & CEO, Huddle',
          },
        ],
      }
    },
    methods: {
      getSrc(idx) {
        return this.cards[idx].imgUrl
      },
    },
  }
</script>
