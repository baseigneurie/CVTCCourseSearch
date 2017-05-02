<template>
    <div>
        <div class="error-label" v-if="status">
            <h3>{{ title }}</h3>
            {{ msg }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['status', 'title', 'msg'],
    data () {
        return {
        }
    }
}
</script>

<style scoped>
    .error-label {
        font-weight: bold;
        color: #c02301;
        width: 100%;
    }
</style>
