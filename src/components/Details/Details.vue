<template>
    <div class="container">
        <error :status="errParms.status" :title="errParms.title" :msg="errParms.msg"></error>
        <div v-if="!errParms.status && !spin">
            <h3>Course Details</h3>
            <p>
                <span class="heavy sub-title">{{ this.details.Title }} - {{ this.reqBody.crn }} -
                {{ this.details.Code + '-' + this.details.CrsNumber + '-' + this.details.SeqNumber }}</span>
            </p>
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-5 top-left">
                    <p><span class="heavy">Associated Term: </span>{{ this.details.Term }}</p>
                    <p><span class="heavy">Levels: </span>{{ this.details.Levels }}</p>
                    <div class="sub-content">
                        <p>Campus: {{ this.details.Campus }}</p>
                        <p>Schedule Type: {{ this.details.SchedType }}</p>
                        <p>Delivery: {{ this.details.Delivery }}</p>
                        <p>Credits: {{ this.details.CrHours }}</p>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-7 top-right">
                    <p class="heavy">Course Description</p>
                    <p>{{ this.details.Description }}</p>
                </div>
            </div>
            <div class="row">
                <regTable :details="details"></regTable>
            </div>
            <div class="row">
                <feeTable :details="details"></feeTable>
            </div>
			<div class="row">
				<reqDetails v-if="details.PreReqs || details.CoReqs" class="col-xs-12" :class="{ 'col-md-7': details.MajorRest || details.ProgRest }"
					:details="details"></reqDetails>
				<restDetails class="col-xs-12" :class="{ 'col-md-5': details.PreReqs || details.CoReqs }" :details="details"></restDetails>
			</div>
        </div>
        <spinner :status="spin"></spinner>
    </div>
</template>

<script>
import DetailsRegTable from '../DetailsRegTable/DetailsRegTable.vue';
import DetailsFeeTable from '../DetailsFeeTable/DetailsFeeTable.vue';
import MyError from '../Error/Error.vue';
import Spinner from '../Spinner/Spinner.vue';
import ReqDetails from '../ReqDetails/ReqDetails.vue';
import RestDetails from '../RestDetails/RestDetails.vue';

export default {
    data () {
        return {
            details: {},
            reqBody: {
                term: '',
                crn: ''
            },
            errParms: {
                status: false,
                title: '',
                msg: ''
            },
            spin: false,
        }
    },
    components: {
        'regTable': DetailsRegTable,
        'feeTable': DetailsFeeTable,
        'error': MyError,
        'spinner': Spinner,
		'reqDetails': ReqDetails,
		'restDetails': RestDetails
    },
    created() {
        this.fetchDetails();
    },
    methods: {
        fetchDetails() {
            this.spin = true;
            this.reqBody.term = this.$route.params.term;
            this.reqBody.crn = this.$route.params.crn;
            this.$http.post(process.env.API_URL + '/course/details', this.reqBody).then(function(resp) {
                if (resp.body.status && resp.body.status <= 0) {
                    this.errParms.title = resp.body.title;
                    this.errParms.msg = resp.body.message;
                    this.errParms.status = true;
                }

                this.details = resp.body;
                this.spin = false;
            }, function(err) {
                console.log(err);
            });
        }
    }
}
</script>

<style scoped>
    .heavy {
        font-weight: bold;
    }

    .sub-title {
        font-size: 1.2em;
    }

    .row {
        margin-top: 25px;
    }

    p {
        margin-bottom: 0px;
    }

    .sub-content {
        margin-top: 10px;
    }

    .top-right {
        margin-top: 10px;
    }

    @media (min-width: 992px) {
        .top-right {
            margin-top: 0px;
        }
    }
</style>
