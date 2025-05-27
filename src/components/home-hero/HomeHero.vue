<script lang="ts" setup> 
import Container from '../container/Container.vue'; 
import InnerContainer from '../inner-container/InnerContainer.vue'; 
import Button from '../button/Button.vue'; 
</script>

<template>
<Container class="home_hero">
    <InnerContainer>
        <div class="w-full min-h-[90vh] flex flex-col justify-between py-[50px]">
            <div class="flex flex-col gap-10">
                <div>
                    <h1 class="text-white leading-tight md:text-[56px] text-[40px]">Inclusive care for</h1>
                    <h1 class="text-white leading-tight md:text-[56px] text-[40px]">children with special</h1>
                    <h1 class="text-white leading-tight md:text-[56px] text-[40px]">needs</h1>
                </div>
                <div class="flex flex-col gap-3 md:flex-row">
                    <router-link to="/what-we-do">
                        <Button class="w-full md:w-[unset]" text="What we do" textColor="black" bgColor="#F2C94C"/>
                    </router-link>
                    <router-link to="/contact">
                        <Button class="w-full md:w-[unset]" text="Contact Us" textColor="black" bgColor="white"/>
                    </router-link>
                </div>
            </div>
            <div class="w-full md:grid md:grid-cols-[1fr_4fr_1fr] md:items-center gap-3 flex flex-col">
                <h5 class="heading-five text-white font-light">230 children under our care</h5>
                <hr class="border-1 border-white w-full">
                <h5 class="heading-five text-white font-light">58 donations collected</h5>
            </div>
        </div>
    </InnerContainer>
</Container>
</template>

<style scoped>
.home_hero {
    background-image: url('../../assets/images/hero-bg.png');
    background-repeat: no-repeat;
}
</style>