<template>
    <div id="main-content" class="container">
    <Navbar></Navbar>
        <div class="row  my-4">
            <div class="col-6">
                <Chatbox></Chatbox>
                <Transcript class="mt-3"></Transcript>
            </div>
            <div class="col-6">
                <Suggestions></Suggestions>
            </div>
        </div>
    </div>
        
</template>

<script>

import { defineComponent } from 'vue';
import Chatbox from './chatbox.vue';
import Suggestions from './suggestions.vue';
import Transcript from './transcript.vue';
import Navbar from './navbar.vue';

export default defineComponent({
    name: 'Aspp',
    components: {
        Chatbox,
        Suggestions,
        Transcript,
        Navbar
    }
});

</script>

<style scoped>
.main-content {

}
</style>