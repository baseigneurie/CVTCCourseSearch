<template>
    <div id="termSelect" class="dropdown">
        <label for="termSelect">Terms</label>
        <select class="u-full-width" v-model="selected" @change="changed">
            <option v-for="item in items" v-bind:value="item.TermName">{{ item.TermName }}</option>
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
        created() {
            this.getDefault();
        },
        methods: {
            changed() {
                var code = '';
                this.items.forEach((item) => {
                    if (this.selected === item.TermName) {
                        code = item.TermCode;
                    }
                });
                this.$emit('changed', code, "term");
            },
            getDefault() {
                this.items.forEach((item) => {
                    if (item.Default === 'Y') {
                        this.selected = item.TermName;
                    }
                });
            }
        }
    }
</script>
