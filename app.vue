<script setup lang="ts">
    const colorMode = useColorMode();

    const toggleColorMode = () => {
        colorMode.preference = colorMode.value === "light" ? "dark" : "light";
    };

    useHead({
        title: "Koki Matsuo",
        link: [
            {
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico",
            },
        ],
    });
</script>

<template>
    <main class="bg-slate-50 dark:bg-slate-900">
        <nav class="fixed top-4 right-4 z-10">
            <ul class="flex items-center">
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
        <section class="flex justify-center items-center w-full min-h-screen relative z-0 overflow-hidden">
            <div class="fixed top-1/4 right-1/2 max-md:right-0.5 h-72 w-72 animate-pop-blob3 rounded-sm bg-blue-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter -z-10"></div>
            <div class="fixed top-1/2 max-md:top-2/5 animate-pop-blob max-md:right-0.5 right-1/3 h-72 w-72 rounded-sm bg-purple-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter -z-10"></div>
            <div class="fixed top-1/3 right-1/4 h-72 w-72 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter -z-10"></div>
            <div class="fixed top-1/4 right-1/3 h-72 w-72 animate-pop-blob2 rounded-sm bg-purple-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter -z-10"></div>
            <div class="fixed top-1/2 max-md:top-2/5 animate-pop-blo3 max-md:left-0.5 left-1/3 h-72 w-72 rounded-sm bg-violet-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter -z-10"></div>
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
                        />
                    </div>
                </div>
                <h1 class="text-center text-xl font-semibold mt-4 font-nunito">Koki Matsuo</h1>
                <h6 class="text-center text-sm text-gray-600 dark:text-gray-300 font-nunito">@sailnov</h6>
                <nav class="flex items-center justify-center mt-2">
                    <UButton
                        v-for="link in [
                            {
                                icon: 'i-tabler-brand-github',
                                to: 'https://github.com/sailnov',
                                target: '_blank',
                            },
                            {
                                icon: 'i-tabler-brand-twitter',
                                to: 'https://twitter.com/sailnov',
                                target: '_blank',
                            },
                        ]"
                        variant="ghost"
                        color="gray"
                        :icon="link.icon"
                        size="xl"
                        square
                        class="rounded-full transition-colors duration-300"
                        :to="link.to"
                        :target="link.target"
                    />
                </nav>
            </div>
        </section>
    </main>
</template>

<style scoped>
    .font-nunito {
        font-family: "Nunito", sans-serif;
    }
</style>
