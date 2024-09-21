<script setup lang="ts">
import { ref, onMounted, computed, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '@/stores/language'

const { locale, availableLocales, setLocale } = useI18n()
const languageStore = useLanguageStore()

const handleLanguageChange = (lang: string) => {
    languageStore.setLanguage(lang)
}

const languageOptions = ref<HTMLElement | null>(null)

const handleShowLanguageOptions = (e) => {
    console.log(languageOptions.value)
    e.stopPropagation()
    languageOptions.value?.classList.toggle('hidden')
}

onMounted(() => {
    languageOptions.value?.addEventListener('click', (e) => {
        e.stopPropagation()
    })
})

</script>
<template>
    <div class="relative flex items-center content-center align-middle text-center top-[45%] left-4 rounded-full bg-[rgb(255,255,255,0.5)] h-fit w-fit p-1.5">
        <button @click.prevent="handleShowLanguageOptions" class="flex items-center content-center align-middle text-center top-[45%] right-4 rounded-full h-fit w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        </button>
        <div  ref="languageOptions" class="hidden absolute right-0 top-8 mt-2 w-fit origin-top-right bg-white dark:bg-slate-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[9999]">
            <div class="py-1" role="none">
                <button v-for="locale in availableLocales" :key="locale" @click="handleLanguageChange(locale)" class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700 dark:text-white">
                    {{ locale }}
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .bi-globe {
        width: 20px;
        height: 20px;
    }

    .bi-globe::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: radial-gradient(circle, transparent 0%, rgba(0, 204, 255, 0.4) 70%, rgba(254, 254, 254, 0) 80%);
        opacity: 0;
        transition: all 0.3s ease-in-out;
    }

    .bi-globe:hover::before {
        opacity: 1;
        width: 150%;
        height: 150%;
        animation: pulse 1s infinite;
    }

    @keyframes pulse {
        0% {
            transform: translate(-50%, -50%) scale(1);
        }
        50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
        }
    }

    @media (max-width: 1024px) {
        .bi-globe {
            width: 18px;
            height: 18px;
        }
    }
</style>