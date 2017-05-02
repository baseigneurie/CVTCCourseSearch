<template>
    <div v-if="searchResults.length > 0">
        <alpha></alpha>
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div class="panel panel-default" v-for="item in compactResults">
                <panel-header :item="item"></panel-header>
                <panel-body :item="item"></panel-body>
            </div>
        </div>
    </div>
</template>

<script>
import AlphaJump from '../AlphaJump/AlphaJump.vue';
import PanelHeader from '../CompactPanel/PanelHeader.vue';
import PanelBody from '../CompactPanel/PanelBody.vue';

export default {
    props: ['searchResults'],
    components: {
        'alpha': AlphaJump,
        'panel-header': PanelHeader,
        'panel-body': PanelBody
    },
    computed: {
       compactResults: function() {
           var sorted = _.sortBy(this.searchResults, ['Title', 'FullCourseNum']);
           var crn = 0;
           var results = [];
           var char = '';

           sorted.forEach(function(item) {
               var c = item.Title.substring(0, 1).toUpperCase();

               if (c === '.') {
                   console.log('dot: ' + c);
                   c = '.';
               } else if (!isNaN(c) && c !== '.' && c !== '') {
                   console.log('num: ' + c);
                   c = '#';
               }

               if (char !== c) {
                   var i = {
                       Class: '',
                       Title: ''
                   };

                   i.Class = "alphalink";
                   i.Title = c;
                   char = c;
                   results.push(i);
               }

               if (item.CrnKey !== crn) {
                   var subs = sorted.filter(function(r) {
                       if (r.CrnKey === item.CrnKey && r.Sort > 0) {
                           return true;
                       }
                       return false;
                   });

                   item.subs = subs;
                   results.push(item);
                   crn = item.CrnKey;
               }
           });
           return results;
       }
   }
}
</script>

<style scoped>
    .panel-group {
    margin-top: 20px;
    }

    .panel-group .panel+.panel {
    margin-top: 10px;
    }

</style>
