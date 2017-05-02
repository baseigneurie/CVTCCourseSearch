<template>
    <div>
        <div id="loadWrapper" v-if="status">
            <div class="loader"></div>
            <p>Loading...</p>
        </div>
    </div>

</template>

<script>
export default {
    props: ['status'],
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    #loadWrapper {
        margin-top: 50px;
        text-align: center;
        width: 100%;
    }

    #loadWrapper p {
        margin-top: 15px;
        font-size: 2em;
        font-family: 'Work Sans', sans-serif;
    }

    .loader {
        border: 12px solid #f3f3f3; /* Light grey */
        border-top: 12px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 1s linear infinite;
        margin: 0px auto;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
