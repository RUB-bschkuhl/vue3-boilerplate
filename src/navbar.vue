<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">Projektname</a>
            <form class="container-fluid justify-content-start">
                <button class="btn btn-outline-secondary me-2" type="button">Get suggestions</button>
                <button class="btn btn-outline-danger" type="button">Record</button>
            </form>
        </div>
    </nav>

</template>

<script>

import { defineComponent } from 'vue'; 

export default defineComponent({
    name: 'Navbar',
});

</script>

<style scoped>

</style>