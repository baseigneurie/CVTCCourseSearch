<template>
    <tr v-bind:class="row.Class">
            <td><span :class="row.Class"><a :href="link" target="_blank">{{ row.Title }}</a></span></td>
            <td><span :class="row.Class">{{ row.FullCourseNum }}</span></td>
            <td><input type="hidden" :value="row.CrnKey">{{ row.CrnDisp }}</td>
            <td>{{ row.Section.StartDate }} - {{ row.Section.EndDate }}</td>
            <td>{{ row.Weekday }}</td>
            <td>{{ row.Hours }}</td>
            <td><span :class="row.Class">{{ row.TermWeeks }}</span></td>
            <td><span :class="row.Class">{{ row.Credits }}</span></td>
            <td><span :class="row.Class">{{ row.Fees }}</span></td>
            <td><a v-if="row.BookLink" :href="row.BookLink" target="_blank"><img src="../../assets/book_btn.png" width="20" height="18" alt="Books" title></a></td>
            <td v-html="row.Location"></td>
            <td><span :class="row.Class">{{ row.Instructor }}</span></td>
            <td><span :class="row.Class">{{ row.AvailableSeats }}</span></td>
            <td class="noshow">{{ row.Sort }}</td>
        </tr>
</template>

<script>
export default {
    props: ['row'],
    data() {
        return {
            link: '/details/' + this.row.CodeKey + '/' + this.row.CrnKey
        }
    }
}
</script>

<style scoped>
    td {
        font-family: "arial", sans-serif;
        font-size: 0.9em;
        vertical-align: middle;
        text-align: center;
        padding: 5px;
    }

    tr td:first-child {
        padding-left: 5px;
        text-align: left;
    }

    .firstRow {
        background-color: #F2EEED;
    }

    td a {
        color: #148EB8;
    }

    span.hidden-row {
        visibility: hidden;
    }

    .noshow {
        display: none;
    }
</style>
