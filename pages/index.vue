<script setup lang="ts">
    definePageMeta({
        layout: "base",
    });
    const colorMode = useColorMode();

    const toggleColorMode = () => {
        colorMode.preference = colorMode.value === "light" ? "dark" : "light";
    };
    const clickedCount = ref(0);
</script>

<template>
    <nav class="fixed top-4 right-4 z-10">
        <ul class="flex items-center">
            <li>
                <UButton
                    variant="ghost"
                    size="xl"
                    square
                    class="rounded-full transition-colors duration-300"
                    :icon="clickedCount > 0 ? `i-tabler-number-${clickedCount}-small` : 'i-tabler-hand-finger'"
                    @click="clickedCount++"
                    v-if="clickedCount <= 10"
                />
            </li>
            <li>
                <UButton
                    variant="ghost"
                    :icon="colorMode.value === 'light' ? 'i-tabler-sun' : 'i-tabler-moon'"
                    size="xl"
                    square
                    class="rounded-full transition-colors duration-300"
                    @click="toggleColorMode"
                />
            </li>
        </ul>
    </nav>
    <section class="flex justify-center items-center w-full min-h-[100dvh] relative z-0">
        <div class="top-1/4 right-1/2 max-md:right-0.5 absolute h-72 w-72 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter -z-10"></div>
        <div class="top-1/2 max-md:top-2/5 max-md:right-0.5 right-1/3 absolute h-72 w-72 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter -z-10"></div>
        <div class="top-1/3 right-1/4 absolute h-72 w-72 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter -z-10"></div>
        <div class="top-1/4 right-1/3 absolute h-72 w-72 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter -z-10"></div>

        <div class="flex flex-col justify-center">
            <div class="group relative mx-auto">
                <div
                    class="absolute top-[calc(50%-5rem)] right-[calc(50%-5rem)] group-hover:top-[calc(50%-8rem)] group-hover:right-[calc(50%-8rem)] h-40 w-40 group-hover:h-64 group-hover:w-64 transition-all duration-500 animate-pop-blob rounded-xl bg-red-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter z-[-1]"
                ></div>
                <div class="relative">
                    <img
                        src="https://avatars.githubusercontent.com/u/60248340?v=4"
                        alt="A picture of me"
                        class="rounded-full opacity-90 cursor-wait max-w-24"
                        :class="{
                            'animate-spin': 10 < clickedCount,
                        }"
                    />
                </div>
            </div>
            <h1 class="text-center text-xl font-semibold mt-4 font-nunito">Koki Matsuo</h1>
            <h6 class="text-center text-sm text-gray-600 dark:text-gray-300 font-nunito">@sailnov</h6>
        </div>
    </section>
</template>

<style scoped>
    .font-nunito {
        font-family: "Nunito", sans-serif;
    }
</style>
