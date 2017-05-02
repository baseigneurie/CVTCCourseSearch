<template>
    <div :id="namelabel + 'Select'" class="dropdown">
        <label :for="namelabel + 'Select'">{{ namelabel }}</label>
        <select class="u-full-width" v-bind:class="disabled" :disabled="changing" v-model="selected" @change="changed">
            <option :value="null">All {{ namelabel + 's'}}</option>
            <option v-for="item in items" v-bind:value="item[itemvalue]">{{ item[itemname] }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        props: ['items', 'itemvalue', 'itemname', 'namelabel', 'disabled', 'changing'],
        data() {
            return {
                selected: null
            }
        },
        methods: {
            changed() {
                this.$emit('changed', this.selected, this.namelabel.toLowerCase());
            },
            resetSelected() {
                this.selected = null;
            }
        }
    }
</script>

<style scoped>
    .grayed {
        color: gray;
    }
</style>
