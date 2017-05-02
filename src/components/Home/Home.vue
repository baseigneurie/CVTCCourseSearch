<template>
    <div>
        <div class="container">
            <main-form @status="setSpin" @error="setError" @complete="setResults" @clear="clearForm"></main-form>
            <spinner :status="spin"></spinner>
            <error :status="error" :title="errorBody.title" :msg="errorBody.msg"></error>
            <compact class="compact-show" v-if="!spin" :searchResults="searchResults"></compact>
        </div>
        <div>
            <res-table class="table-show" v-if="!spin" :searchResults="searchResults"></res-table>
        </div>
        <back-to-top></back-to-top>
    </div>
</template>

<script>
import Lookup from '../LookupForm/LookupForm.vue';
import Spinner from '../Spinner/Spinner.vue';
import MyError from '../Error/Error.vue';
import ResultsTable from '../ResultsTable/ResultsTable.vue';
import CompactResults from '../CompactResults/CompactResults.vue';
import BackToTop from '../BackToTop/BackToTop.vue';

export default {
    data () {
        return {
            spin: false,
            error: false,
            errorBody: {
                title: '',
                msg: ''
            },
            searchResults: []
        }
    },
    components: {
        'main-form': Lookup,
        'spinner': Spinner,
        'error': MyError,
        'res-table': ResultsTable,
        'compact': CompactResults,
        'back-to-top': BackToTop
    },
    methods: {
        setSpin(bool) {
            this.spin = bool;

            if (this.error) {
                this.error = false;
            }
        },
        setError(title, msg) {
            this.error = true;
            this.errorBody.title = title;
            this.errorBody.msg = msg;
            this.searchResults = [];

            if (this.spin) {
                this.spin = false;
            }
        },
        setResults(res, term) {
            this.searchResults = res;
            this.term = term;
        },
        clearForm() {
            this.error = false;
            this.errorBody.title = '';
            this.errorBody.msg = '';
            this.searchResults = [];
        }
    }
}
</script>

<style scoped>
    .table-show {
    display: none;
    }

    .compact-show {
    display: inherit;
    }

    @media (min-width: 992px) {
        .table-show {
            display: inherit;
        }

        .compact-show {
            display: none;
        }
    }

</style>
