<template>
    <div>
        <label for="txtTitle">Title <span class="optional">(Optional)</span></label>
        <input class="u-full-width" id="txtTitle" type="text" v-model="title" @input="valChange">
    </div>
</template>

<script>

export default {
    data () {
        return {
            title: null
        }
    },
    methods: {
        valChange() {
            this.$emit('changed', this.title);
        },
        resetSelected() {
            this.title = null;
        }
    }
}
</script>

<style scoped>
    .optional {
    font-size: 0.8em;
    font-style: italic;
    color: #a9a9a9;
    }
</style>
