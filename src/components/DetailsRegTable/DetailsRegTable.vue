<template>
    <div class="col-xs-12">
        <p class="heavy">Registration Availability</p>
        <table class="table table-condensed table-bordered">
            <thead>
                <tr>
                    <th>Capacity</th>
                    <th>Claimed</th>
                    <th>Remaining</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ this.details.Capacity}} Seats</td>
                    <td>{{ this.details.SeatsTaken}} Seats</td>
                    <td>{{ this.details.SeatsRemaining}} Seats</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: ['details']
    }
</script>

<style scoped>
    .heavy {
        font-weight: bold;
    }

    p {
        margin-bottom: 0px;
    }

    th {
        background: #F7F8FC;
    }
</style>
