<script setup lang="ts">
import type { MemberProps } from '../../types/components.types';

const props = defineProps<MemberProps>();
const { id, name, position, social, image } = props.member;
</script>

<template>
    
<div class="cursor-pointer">
    <img :src="image" alt="member-image">
    <div>
        <div>
            <h2>{{ name }}</h2>
            <h5>{{ position }}</h5>
        </div>
        <div>
            
        </div>
    </div>
</div>

</template>

<style scoped></style>