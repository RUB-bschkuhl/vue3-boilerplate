<template>
    <div class="card">
        <div class="card-header">
            Prompt
        </div>
        <div class="card-body pb-0">
            <div id="collapse-card">
                <form>
                    <div class="form-group">
                        <textarea class="form-control" rows="5" id="prompt-input" placeholder="Add your prompt here..."></textarea>
                    </div>
                </form>
            </div>
            <button type="button" class="btn mb-1 mt-2 w-100" data-toggle="collapse" data-target="#collapse-card" aria-expanded="true" aria-controls="card">^</button>
        </div>
    </div>

</template>

<script>

import { defineComponent } from 'vue'; 

export default defineComponent({
    name: 'Chatbox',
});

</script>

<style scoped>

</style>