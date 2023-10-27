<template>
  <div class="w-10/12 mx-auto">
    <h2 class="text-2xl font-bold mb-3">Select a Date:</h2>
    <DatePicker v-model="date" :available-dates="availableDates" expanded />
    <p class="text-green-600">{{ date }}</p>
  </div>
</template>

<script>
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css'; // Make sure to import the CSS file

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      date: new Date(),
    };
  },
  computed: {
    today() {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return today;
    },
  },
};
</script>
