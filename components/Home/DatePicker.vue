<template>
    <div class="container p-5 w-9/12 mx-auto border my-5 rounded-md shadow-xl">
        <div class="stepper mb-6" :data-steps="steps.length" :data-current-step="currentStep">
            <div class="steps">
                <div v-for="(step, index) in steps" :key="index" class="step">
                    <div class="step-item">
                        <div class="step-circle">{{ index + 1 }}</div>
                        <div class="step-title">{{ step.title }}</div>
                    </div>
                    <div class="step-line"></div>
                </div>
            </div>
        </div>

        <div v-show="currentStep === 1">
            <h2>Step 1: Your Name</h2>
            <div class="form-control">
                <label for="name">Name</label>
                <input id="name" type="date" v-model="formData.name" placeholder="Enter your name"
                    class="block w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500" />
            </div>
            <button @click="nextStep"
                class="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Next</button>
        </div>

        <div v-show="currentStep === 2">
            <h2>Step 2: Your Email</h2>
            <div class="form-control">
                <label for="email">Email</label>
                <input id="email" type="email" v-model="formData.email" placeholder="Enter your email"
                    class="block w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div class="buttons mt-4">
                <button @click="prevStep"
                    class="mr-2 px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Back</button>
                <button @click="nextStep"
                    class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Next</button>
            </div>
        </div>

        <div v-show="currentStep === 3">
            <h2>Step 3: Your Message</h2>
            <div class="form-control">
                <label for="message">Message</label>
                <textarea id="message" v-model="formData.message" placeholder="Enter your message"
                    class="block w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <div class="buttons mt-4">
                <button @click="prevStep"
                    class="mr-2 px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Back</button>
                <button @click="submitForm"
                    class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
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

const steps = [
    { title: 'Name' },
    { title: 'Email' },
    { title: 'Message' }
];

const currentStep = ref(1);
const formData = ref({
    name: '',
    email: '',
    message: ''
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
    // You can implement the form submission logic here
    // For this example, we'll just display a success message
    successMessage.value = 'Form submitted successfully!';

    // Reset the form data after successful submission
    formData.value = {
        name: '',
        email: '',
        message: ''
    };

    // Reset the current step to the first step
    currentStep.value = 1;
}
</script>
  