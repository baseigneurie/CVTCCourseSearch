<template>
    <div id="results" v-if="searchResults.length > 0" class="container-fluid table-show">
        <table id="resultsTable" class="table">
            <thead>
                <tr>
                    <th>
                        <a href="#" @click.prevent="sortColumns('Title')">Course Title</a>
                        <span v-if="!reverse && currentSort === 'Title'" class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                        <span v-if="reverse && currentSort === 'Title'" class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
                    </th>
                    <th>
                        <a href="#" v-on:click.prevent="sortColumns('FullCourseNum')">Course Number</a>
                        <span v-if="!reverse && currentSort === 'FullCourseNum'" class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                        <span v-if="reverse && currentSort === 'FullCourseNum'" class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
                    </th>
                    <th>
                        <a href="#" v-on:click.prevent="sortColumns('CrnKey')">CRN</a>
                        <span v-if="!reverse && currentSort === 'CrnKey'" class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                        <span v-if="reverse && currentSort === 'CrnKey'" class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
                    </th>
                    <th>Start/End Date</th>
                    <th>Days</th>
                    <th>Time</th>
                    <th>
                        <a href="#" v-on:click.prevent="sortColumns('TermWeeks')">Weeks</a>
                        <span v-if="!reverse && currentSort === 'TermWeeks'" class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                        <span v-if="reverse && currentSort === 'TermWeeks'" class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
                    </th>
                    <th>
                        <a href="#" v-on:click.prevent="sortColumns('Credits')">Credit</a>
                        <span v-if="!reverse && currentSort === 'Credits'" class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                        <span v-if="reverse && currentSort === 'Credits'" class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
                    </th>
                    <th>
                        <a href="#" v-on:click.prevent="sortColumns('Fees')">Fees *</a>
                        <span v-if="!reverse && currentSort === 'Fees'" class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                        <span v-if="reverse && currentSort === 'Fees'" class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
                    </th>
                    <th>Book Info</th>
                    <th>Building/Room</th>
                    <th>
                        <a href="#" v-on:click.prevent="sortColumns('Instructor')">Instructor</a>
                        <span v-if="!reverse && currentSort === 'Instructor'" class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                        <span v-if="reverse && currentSort === 'Instructor'" class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
                    </th>
                    <th>
                        <a href="#" v-on:click.prevent="sortColumns('AvailableSeats')">Seats Avail.</a>
                        <span v-if="!reverse && currentSort === 'AvailableSeats'" class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                        <span v-if="reverse && currentSort === 'AvailableSeats'" class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr is="result-row" v-for="item in results" :row="item"></tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ResultRow from '../ResultRow/ResultRow.vue';

export default {
    props: ['searchResults'],
    data() {
        return {
            reverse: false,
            results: [],
            currentSort: ''
        }
    },
    created() {
        this.results = this.searchResults;
        this.sortColumns('Title');
    },
    components: {
        'result-row': ResultRow
    },
    methods: {
        sortColumns(key) {
            if (key !== this.currentSort) {
                this.reverse = false;
            }
            var ord = this.reverse ? 'desc' : 'asc';
            this.reverse = !this.reverse;
            this.results = _.orderBy(this.results, [key, 'FullCourseNum', 'Sort'], [ord, ord, 'asc']);
            this.currentSort = key;
        }
    }
}
</script>

<style scoped>
    #results {
        margin-top: 15px;
    }

    th {
        padding: 5px;
        text-align: center;
    }

    thead tr {
        border-bottom: 2px solid black;
    }

    th a, th a:hover {
        color: #000000;
        text-decoration: underline;
    }

</style>
