<template>
	<div>
		<div v-if="majorList.length > 0" class="restlist">
			<h4>Major Restrictions</h4>
			<p>Must be enrolled in one of the following Majors:</p>
			<ul>
				<li v-for="item in majorList">{{ item }}</li>
			</ul>
		</div>
		<div v-if="progList.length > 0" class="restlist">
			<h4>Program Restrictions</h4>
			<p>Must be enrolled in one of the following Programs:</p>
			<ul>
				<li v-for="item in progList">{{ item }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
    export default {
		props: ['details'],
		components: {
			majorList: [],
			progList: []
		},
		created () {
			this.loadLists();
		},
		methods: {
			loadLists() {
				this.majorList = this.parseList(this.details.MajorRest);
				this.progList = this.parseList(this.details.ProgRest);
			},

			parseList(rests) {
				var results = [];
				if (rests && rests.length > 0) {
					results = rests.split(',');
				}
				return results;
			}
		}
    }
</script>

<style scoped>
	.restlist {
		font-size: .9em;
		
	}
</style>
