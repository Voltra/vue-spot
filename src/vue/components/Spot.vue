<template>
    <div :class="className">
        <slot></slot>
    </div>
</template>

<script>    
	export default {
		name: "spot",
        computed: {
            className(){
                return `spot ${this.sizingClasses}`;
            }
        }
	};
</script>

<style lang="scss" scoped>
	@import "../../scss/Spot";
</style>