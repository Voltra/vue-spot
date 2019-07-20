<template>
    <div :class="className">
        <slot></slot>
    </div>
</template>

<script>    
	export default {
		name: "spot-row",
        computed: {
            className(){
                return `spotRow ${this.sizingClasses}`;
            }
        }
	};
</script>

<style lang="scss" scoped>
	@import "../../scss/SpotRow";
</style>