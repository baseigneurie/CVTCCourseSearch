<template>
    <div class="col-xs-12 col-sm-12">
        <p class="heavy">Base fees (other charges may apply)</p>
        <table class="table table-condensed table-striped">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="fee in details.Fees">
                    <td>{{ fee.label }}</td>
                    <td>${{ fee.amount.toFixed(2) }}</td>
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
</style>
