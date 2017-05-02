<template>
	<div>
		<div v-if="preqsList.length > 0" class="reqlist">
			<h4>Prerequisites</h4>
			<ul>
				<li v-for="item in preqsList" v-if="item !== ''">{{ item }}</li>
			</ul>
		</div>
		<div v-if="creqsList.length > 0" class="reqlist">
			<h4>Corequisites</h4>
			<ul>
				<li v-for="item in creqsList" v-if="item !== ''">{{ item }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
    export default {
		props: ['details'],
		components: {
			preqsList: [],
			creqsList: []
		},
		created () {
			this.loadLists();
		},
		methods: {
			loadLists() {
				this.preqsList = this.parseList(this.details.PreReqs);
				this.creqsList = this.parseList(this.details.CoReqs);
			},

			parseList(reqs) {
				var results = [];
				if (!reqs || reqs.length === 0) {
					return results;
				}

				var prs = this.parseReqs('(', ')', reqs);
				if (prs.length > 0) {
					results = results.concat(prs);
				}
				return results;
			},

			parseReqs(a, b, str) {
				var results = [];

				while (str.lastIndexOf(a) > -1) {
					var x = str.substring(str.lastIndexOf(a) + 1, str.lastIndexOf(b));

					results.push(x);

					if ((str.lastIndexOf(b) + 1) === str.length) {
						str = str.substring(0, str.lastIndexOf(a));
					} else {
						str = str.substring(0, str.lastIndexOf(a)) + str.substring(str.lastIndexOf(b) + 1, str.length);
					}
				}

				var temp = str.split(' and ');
				temp = temp.filter((item) => { return item !== ' or ' });
				results = results.concat(temp);

				return results.reverse();
			}
		}
    }
</script>

<style scoped>
	.reqlist {
		font-size: .9em;
		margin-bottom: 20px;
	}
</style>
