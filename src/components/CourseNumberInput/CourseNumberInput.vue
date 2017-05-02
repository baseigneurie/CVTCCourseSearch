<template>
    <div>
        <label for="course-number-wrap">Course Number <span class="optional">(Optional)</span></label>
        <div id="course-number-wrap" class="input-group course-number-wrapper">
            <input class="form-control course-number" name="subject" placeholder="Subject" id="txtSubject" type="text" v-model="subject" @input="valChange">
            <input class="form-control course-number" name="course" placeholder="Course" id="txtCourse" type="text" v-model="course" @input="valChange">
            <input class="form-control course-number" name="section" placeholder="Section" id="txtSection" type="text" v-model="section" @input="valChange">
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            subject: null,
            course: null,
            section: null,
        }
    },
    methods: {
        valChange(event) {
            this.$emit('changed', event.target.value, event.target.name);
        },
        resetSelected() {
            this.subject = null;
            this.course = null;
            this.section = null;
        }
    }
}
</script>

<style scoped>
    .course-number-wrapper {
    width: 100%;
    }

    .form-control.course-number:first-child {
    margin-right: 4px;
    margin-left: 0px;
    }

    .form-control.course-number:last-child {
    margin-left: 4px;
    }

    .form-control.course-number {
    margin: 0px 4px;
    width: 30%;
    }

    .optional {
    font-size: 0.8em;
    font-style: italic;
    color: #a9a9a9;
    }
</style>
