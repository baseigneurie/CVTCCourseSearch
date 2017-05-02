<template>
    <div id="form-wrapper" v-if="dataReady">
        <form class="row" @submit.prevent>
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <termDropDown class="select-box" :items="searchForm.term.allTerms" ref="term" @changed="changeVal"></termDropDown>
                    <blankDropDown class="select-box" :changing="changing" :items="searchForm.department.allDepartments" itemvalue="DeptCode" itemname="DeptDescription" namelabel="Department"
                     :disabled="disabled" ref="dept" @changed="changeVal"></blankDropDown>
                     <blankDropDown class="select-box" :changing="changing" :items="searchForm.program.allPrograms" itemvalue="ProgCode" itemname="ProgName" namelabel="Program"
                      :disabled="disabled" ref="prog" @changed="changeVal"></blankDropDown>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <blankDropDown class="select-box" :items="searchForm.location.allLocations" itemvalue="CampCode" itemname="CampDesc" namelabel="Location"
                      ref="loc" @changed="changeVal"></blankDropDown>
                    <deliveryDropDown class="select-box" :items="searchForm.delivery.allMethods" ref="del" @changed="changeVal"></deliveryDropDown>
                </div>
                <div class="col-xs-12 col-md-4">
                    <courseNumber class="input-box" ref="crs" @changed="changeNumber"></courseNumber>
                    <titleInput class="input-box" ref="title" @changed="changeTitle"></titleInput>
                </div>
                <div class="col-xs-12 form-bottom-row">
                    <input class="button-primary" id="btnSubmit" type="submit" value="Get Classes" v-on:click="this.searchCourses">
                    <input class="button" id="btnClear" type="button" value="Clear Form" v-on:click="this.clearForm" >
                </div>
        </form>
    </div>
</template>

<script>
    import TermSelect from '../TermSelect/TermSelect.vue';
    import DeliverySelect from '../DeliverySelect/DeliverySelect.vue';
    import BlankSelect from '../Select/Select.vue';
    import CrsNumber from '../CourseNumberInput/CourseNumberInput.vue';
    import TitleInput from '../TitleInput/TitleInput.vue';

    export default {
        data() {
            return {
                searchForm: {},
                searchResults: null,
                dataReady: false,
                changing: false,
                disabled: ''
            }
        },
        created() {
            this.setLoading(true);
            this.fetchFormContent().then((resp) => {
                this.searchForm = resp.body;
                this.setLoading(false);
                this.setReady();
            });
        },
        components: {
            'deliveryDropDown': DeliverySelect,
            'termDropDown': TermSelect,
            'blankDropDown': BlankSelect,
            'courseNumber': CrsNumber,
            'titleInput': TitleInput
        },
        methods: {
            fetchFormContent() {
                return (
                    this.$http.get(process.env.API_URL + '/course/lookup', (resp) => {
                        return resp;
                }, function(err) {
                    console.log(err);
                }));
            },
            setReady() {
                this.dataReady = true;
            },
            changeVal(value, name) {
                this.searchForm[name].selected = value;
                if (name === 'term') {
                    this.fetchDeptsProgs();
                }
            },
            changeNumber(value, name) {
                this.searchForm.courseNumber[name] = value;
            },
            changeTitle(value) {
                this.searchForm.title = value;
            },
            fetchDeptsProgs: function() {
                var term = this.searchForm.term.selected;
                this.$refs.dept.resetSelected();
                this.$refs.prog.resetSelected();
                this.searchForm.department.selected = null;
                this.searchForm.program.selected = null;
                this.changing = true;
                this.disabled = 'grayed';
                this.$http.get(process.env.API_URL + '/course/lookup/' + term).then(function(resp) {
                    var res = resp.body;
                    this.searchForm.department.allDepartments = res.depts;
                    this.searchForm.program.allPrograms = res.progs;
                    this.changing = false;
                    this.disabled = '';
                }, function(err) {
                    console.log(err);
                });
            },
            searchCourses: function() {
                this.setLoading(true);

                if (!this.searchForm.term.selected) {
                    this.searchForm.term.allTerms.forEach((item) => {
                        if (item.TermName === this.$refs.term.selected) {
                            this.searchForm.term.selected = item.TermCode;
                        }
                    });
                }

                var body = JSON.parse(JSON.stringify(this.searchForm));

                this.$http.post(process.env.API_URL + '/course/search', body).then(function(resp) {
                    if (resp.body.status <= 0) {
                        this.sendError(resp.body.title, resp.body.message);
                        return;
                    }
                    console.log(resp.body);
                    this.searchResults = resp.body;
                    this.sendResults();
                    this.setLoading(false);
                }, function(err) {
                    console.log(err);
                });
            },
            setLoading(bool) {
                this.$emit("status", bool);
            },
            sendError(title, msg) {
                this.$emit('error', title, msg);
            },
            sendResults() {
                this.$emit('complete', this.searchResults, this.searchForm.term.selected);
            },
            clearForm: function() {
                this.$refs.term.getDefault();
                this.$refs.term.changed();
                this.fetchDeptsProgs();
                this.$refs.loc.resetSelected();
                this.$refs.del.resetSelected();
                this.$refs.crs.resetSelected();
                this.$refs.title.resetSelected();

                this.searchForm.location.selected = null;
                this.searchForm.delivery.selected = null;
                this.searchForm.courseNumber.subject = null;
                this.searchForm.courseNumber.course = null;
                this.searchForm.courseNumber.section = null;
                this.searchForm.title = null;

                this.$emit("clear");
            }
        }
    }
</script>

<style scoped>
    .select-box, .input-box {
        margin-bottom: 10px;
    }

    #form-wrapper {
        background-color: #E2EFF1;
        padding: 10px;
        border-radius: 0px 0px 8px 8px;
        border: 1px solid #D1DEE0;
    }

    #form-wrapper > form {
        margin-bottom: 0px;
    }

    #btnSubmit, #btnClear {
        margin-bottom: 5px;
    }
</style>
