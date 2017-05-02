<template>
    <div>
        <div class="panel-heading" role="tab" v-if="item.Class === 'alphalink'">
            <h4 class="panel-title">
                <a v-bind:name="item.Title">{{ item.Title }}</a>
            </h4>
        </div>
        <div class="panel-heading" role="tab" v-if="item.Class !== 'alphalink'" v-bind:id="'#' + item.CrnKey + '-heading'">
            <h4 class="panel-title">
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" v-bind:href="'#' + item.CrnKey" aria-expanded="true" v-bind:aria-controls="item.CrnKey">
                    {{ item.Title }} - {{ item.FullCourseNum }}
                </a>
            </h4>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style scoped>
    .panel-heading {
        background-color: #F2EEED;
    }
</style>
