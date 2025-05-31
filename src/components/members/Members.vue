<script setup lang="ts">
import SingleMember from '../../components/member/Member.vue';
import Container from '../container/Container.vue';
import InnerContainer from '../inner-container/InnerContainer.vue';
import getAllMembers from '../../services/getAllMembers/getAllMembers.ts';
import { ref, onMounted } from 'vue';
import type { Member } from '../../types/inerface.types.ts';

const members = ref<Member[]>([]);

onMounted(() => {
  getAllMembers({
    members: members
  });
});

</script>

<template>

<Container>
    <InnerContainer>
        <div class="mb-[30px]">
            <h1 class="heading-three text-center">Meet our team</h1>
            <h5 class="small-para text-[gray] text-center md:w-[80%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</h5>
        </div>
        <div class="w-full min-h-[50vh]">
            <div v-if="members.length !== 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-5">
                <SingleMember :key="member.id" v-for="member in members" :member="member"/>
            </div>
            <div class="w-full" v-if="members.length === 0">
                <h1>No Members Found...</h1>
            </div>
        </div>
    </InnerContainer>
</Container>

</template>

<style scoped></style>