<template>
    <div v-bind:id="item.CrnKey" class="panel-collapse collapse" role="tabpanel" v-if="item.Class !== 'alphalink'">
      <div class="panel-body">
          <div class="container-fluid">
              <div class="row">
                  <div class="col-xs-12 col-sm-2">
                      <span class="heavy sub-title">Course Number</span>
                      <p>{{ item.FullCourseNum}}</p>
                  </div>
                  <div class="col-xs-12 col-sm-1">
                      <span class="heavy sub-title">CRN</span>
                      <p>{{ item.CrnKey}}</p>
                  </div>
                  <div class="col-xs-12 col-sm-3">
                      <span class="heavy sub-title">Start/End Date</span>
                      <p>{{ item.Section.StartDate }} - {{ item.Section.EndDate }}</p>
                  </div>
                  <div class="col-xs-12 col-sm-1">
                      <span class="heavy sub-title">Days</span>
                      <p>{{ item.Weekday }}</p>
                  </div>
                  <div class="col-xs-12 col-sm-3">
                      <span class="heavy sub-title">Time</span>
                      <p>{{ item.Hours }}</p>
                  </div>
                  <div class="col-xs-12 col-sm-1">
                      <span class="heavy sub-title">Weeks</span>
                      <p>{{ item.TermWeeks}}</p>
                  </div>
                  <div class="col-xs-12 col-sm-1">
                      <span class="heavy sub-title">Credits</span>
                      <p>{{ item.Credits}}</p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-xs-12 col-sm-4">
                      <span class="heavy sub-title">Building/Room</span>
                      <p v-html="item.Location"></p>
                  </div>
                  <div class="col-xs-12 col-sm-3">
                      <span class="heavy sub-title">Instructor</span>
                      <p>{{ item.Instructor }}</p>
                  </div>
                  <div class="col-xs-12 col-sm-2">
                      <span class="heavy sub-title">Book Info</span>
                      <p><a v-bind:href="item.BookLink" target="_blank">Click Here</a></p>
                  </div>
                  <div class="col-xs-12 col-sm-2">
                      <span class="heavy sub-title">Seats Avail.</span>
                      <p>{{ item.AvailableSeats }}</p>
                  </div>
                  <div class="col-xs-12 col-sm-1">
                      <span class="heavy sub-title">Fees</span>
                      <p>{{ item.Fees }}</p>
                  </div>
              </div>
              <div class="row" v-if="item.subs.length > 0">
                  <div class="col-xs-12 sub-table">
                      <span class="heavy sub-title">Additional Classes</span>
                      <table class="table table-condensed">
                          <thead>
                              <tr>
                                  <th>Dates</th>
                                  <th>Days</th>
                                  <th>Time</th>
                                  <th>Location</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr v-for="s in item.subs">
                                  <td>{{ s.Section.StartDate }} - {{ s.Section.EndDate }}</td>
                                  <td>{{ s.Weekday  }}</td>
                                  <td>{{ s.Hours }}</td>
                                  <td v-html="s.Location"></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
              <div class="row">
                  <div class="col-xs-12">
                      <span class="heavy sub-title"><a :href="link" target="_blank">More Information</a></span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['item'],
    data() {
        return {
            link: '/details/' + this.item.CodeKey + '/' + this.item.CrnKey
        }
    }
}
</script>

<style scoped>
    .heavy {
        font-weight: bold;
    }

    .sub-title {
        text-decoration: underline;
    }

    .sub-table {
        margin: 5px 0px;
    }

    .sub-table th, .sub-table td {
        text-align: left;
    }

    .sub-table table.table-condensed {
        margin-bottom: 5px;
    }

</style>
