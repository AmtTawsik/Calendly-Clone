<template>
    <div class="container p-5 md:w-9/12 mx-auto border my-5 rounded-md shadow-xl h-[400px] overflow-y-scroll hide-scrollbar bg-white">
        <div v-show="currentStep !== 4" class="text-center mb-5">
            <h6 class="font-bold text-gray-600">Qualyval = Quality + Value</h6>
            <h3 class="text-3xl font-bold my-2">Discovery Call</h3>
            <div class="md:flex justify-center">
                <p class="text-gray-600 font-bold text-center md:mb-0 mb-2 mr-5">30 min</p>
                <p class="text-gray-600 font-bold text-center">3:00am - 3:30am, Friday, July 21, 2023</p>
            </div>
            <p class="text-gray-600 font-bold mt-2 mb-5">Asia/Dhaka</p>
            <p class="mt-2 md:w-8/12 mx-auto">Ready to Unlock Your Business's Full Potential? Discover How AI and Automation
                Can Scale and Supercharge Productivity! Schedule a Complimentary, No Obligation 30-Minute meeting</p>
        </div>

        <div v-show="currentStep === 1">
            <div class="md:w-10/12 mx-auto">
                <h2 class="text-2xl font-bold mb-3">Select a Date:</h2>
                <DatePicker v-model="formData.date" :available-dates="availableDates" expanded />
                <p class="text-green-600">{{ date }}</p>
            </div>
            <div class="flex justify-center">
                <button @click="nextStep"
                    class="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Next</button>
            </div>
        </div>

        <div v-show="currentStep === 2">
            <h2 class="text-2xl font-bold mb-3">Select a Date:</h2>
            <div class="form-control">
                <input id="time" type="time" v-model="formData.time" placeholder="Enter your time"
                    class="block w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div class="buttons mt-4 flex justify-center">
                <button @click="prevStep"
                    class="mr-2 px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Back</button>
                <button @click="nextStep"
                    class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Next</button>
            </div>
        </div>

        <div v-show="currentStep === 3">
            <h2 class="text-2xl font-bold mb-3">Enter Details:</h2>

            <div>
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        Name</label>
                    <input type="name" id="name" v-model="formData.details.name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Md. Asif">
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        email</label>
                    <input type="email" id="email" v-model="formData.details.email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="example@gmail.com" required>
                </div>

                <div class="mb-6">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        message</label>
                    <textarea id="message" rows="4" v-model="formData.details.detail"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your thoughts here..."></textarea>
                </div>
            </div>

            <div class="flex mt-4 justify-center">
                <button @click="prevStep"
                    class="mr-2 px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Back</button>
                <button @click="submitForm"
                    class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Schedule
                    Event</button>
            </div>
        </div>

        <div v-show="currentStep === 4" class="py-10">
            <h2 class="text-center text-2xl font-bold mb-2">Confirmed</h2>
            <p class="text-lg text-center mb-4">You are scheduled with Qualyval = Quality + Value.</p>
            <div class="md:w-9/12 mx-auto">
                <hr class="mb-2">
                <p class="text-xl font-bold mb-2">Discovery Call</p>
                <p class="text-gray-600 font-bold mb-2">12:30am - 1:00am, Saturday, July 29, 2023</p>
                <p class="text-gray-600 font-bold mb-2">Asia/Dhaka</p>
                <p class="text-gray-600 font-bold mb-2">Meeting link will be shared</p>
                <p class="font-bold">A calendar invitation has been sent to your email address.</p>
            </div>
        </div>

        <div v-if="successMessage" class="mt-4 text-green-500">
            <p>{{ formData }}</p>
            {{ successMessage }}
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
import '../../assets/css/custom.css';

const steps = [
    { title: 'Select a Date:' },
    { title: 'time' },
    { title: 'details' },
    { title: 'Submitad' }
];

const currentStep = ref(1);
const formData = ref({
    date: '',
    time: '',
    details: {
        name: '',
        email: '',
        detail: '',
    }
});
const successMessage = ref('');

function nextStep() {
    if (currentStep.value < steps.length) {
        currentStep.value += 1;
    }
}

function prevStep() {
    if (currentStep.value > 1) {
        currentStep.value -= 1;
    }
}

function submitForm() {
    successMessage.value = 'Form submitted successfully!';

    nextStep();
}


// export default {
//   components: {
//     DatePicker,
//   },
//   data() {
//     return {
//       date: new Date(),
//     };
//   },
//   computed: {
//     today() {
//       const today = new Date();
//       today.setHours(0, 0, 0, 0);
//       return today;
//     },
//   },
// };
</script>
  