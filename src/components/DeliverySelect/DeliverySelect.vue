<template>
    <div id="deliverySelect" class="dropdown">
        <label for="deliverySelect">Delivery Methods</label>
        <select class="u-full-width" v-model="selected" @change="changed">
            <option :value="null">All Methods</option>
            <option v-for="item in items" v-bind:value="item">{{ item }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        props: ['items'],
        data() {
            return {
                selected: null
            }
        },
        methods: {
            changed() {
                this.$emit('changed', this.selected, "delivery");
            },
            resetSelected() {
                this.selected = null;
            }
        }
    }
</script>
