<script setup>
import { useHead } from '#imports'
const props = defineProps({
  version: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: "Nuxt 3 with MySql"
  }
})
useHead({
  title: `${props.title}`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,h2{margin:0}h1,h2{font-size:inherit;font-weight:inherit}svg{display:block;vertical-align:middle}`
    }
  ]
})

const products = ref([])

async function getProducts() {
  const { data: services } = await useFetch('/api/product')
  products.value = services.value
}

</script>
<template>
  <div
    class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white min-h-screen place-content-center flex flex-col items-center justify-center p-8 text-sm sm:text-base">
    <div class="grid grid-cols-3 gap-4 md:gap-8 max-w-5xl w-full z-20">
      <div class="flex justify-between items-end col-span-3"><a href="https://v3.nuxtjs.org" target="_blank"
          rel="noopener" class="nuxt-logo"><svg viewBox="0 0 221 65" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="w-40 text-black dark:text-white">
            <g clip-path="url(#a)">
              <path fill="currentColor"
                d="M82.5623 18.5705h7.3017l15.474 24.7415V18.5705h6.741v35.0576h-7.252L89.3025 28.938v24.6901h-6.7402V18.5705ZM142.207 53.628h-6.282v-3.916c-1.429 2.7559-4.339 4.3076-8.015 4.3076-5.822 0-9.603-4.1069-9.603-10.0175V28.3847h6.282v14.3251c0 3.4558 2.146 5.8592 5.362 5.8592 3.524 0 5.974-2.7044 5.974-6.4099V28.3847h6.282V53.628ZM164.064 53.2289l-6.026-8.4144-6.027 8.4144h-6.69l9.296-13.1723-8.58-12.0709h6.843l5.158 7.2641 5.106-7.2641h6.895l-8.632 12.0709 9.295 13.1723h-6.638ZM183.469 20.7726v7.6116h7.149v5.1593h-7.149v12.5311c0 .4208.17.8245.473 1.1223.303.2978.715.4654 1.144.4661h5.532v5.9547h-4.137c-5.617 0-9.293-3.2062-9.293-8.8109V33.5484h-5.056v-5.1642h3.172c1.479 0 2.34-.8639 2.34-2.2932v-5.3184h5.825Z">
              </path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M30.1185 11.5456c-1.8853-3.24168-6.5987-3.24169-8.484 0L1.08737 46.8747c-1.885324 3.2417.47133 7.2938 4.24199 7.2938H21.3695c-1.6112-1.4081-2.2079-3.8441-.9886-5.9341l15.5615-26.675-5.8239-10.0138Z"
                fill="#80EEC0"></path>
              <path
                d="M43.1374 19.2952c1.5603-2.6523 5.461-2.6523 7.0212 0l17.0045 28.9057c1.5603 2.6522-.39 5.9676-3.5106 5.9676h-34.009c-3.1206 0-5.0709-3.3154-3.5106-5.9676l17.0045-28.9057ZM209.174 53.8005H198.483c0-1.8514.067-3.4526 0-6.0213h10.641c1.868 0 3.353.1001 4.354-.934 1-1.0341 1.501-2.3351 1.501-3.9029 0-1.8347-.667-3.2191-2.002-4.1532-1.301-.9674-2.985-1.4511-5.054-1.4511h-2.601v-5.2539h2.652c1.701 0 3.119-.4003 4.253-1.2009 1.134-.8006 1.701-1.9849 1.701-3.5527 0-1.301-.434-2.3351-1.301-3.1023-.834-.8007-2.001-1.201-3.503-1.201-1.634 0-2.918.4837-3.853 1.4511-.9.9674-1.401 2.1517-1.501 3.5527h-6.254c.133-3.2358 1.251-5.7877 3.352-7.6558 2.135-1.868 4.887-2.8021 8.256-2.8021 2.402 0 4.42.4337 6.055 1.301 1.668.834 2.919 1.9515 3.753 3.3525.867 1.4011 1.301 2.9523 1.301 4.6536 0 1.9681-.551 3.636-1.651 5.0037-1.068 1.3344-2.402 2.235-4.004 2.7021 1.969.4003 3.57 1.3677 4.804 2.9022 1.234 1.5011 1.852 3.4025 1.852 5.7043 0 1.9347-.468 3.7028-1.402 5.304-.934 1.6012-2.301 2.8855-4.103 3.8529-1.768.9674-3.953 1.4511-6.555 1.4511Z"
                fill="#00DC82"></path>
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h221v65H0z"></path>
              </clipPath>
            </defs>
          </svg> </a><a :href="`https://github.com/nuxt/framework/releases/tag/${version}`" target="_blank"
          rel="noopener" class="flex justify-end pb-1 sm:pb-2" v-text="version" />
        <div class="spotlight-wrapper">
          <div class="fixed z-10 left-0 right-0 spotlight"></div>
        </div>
      </div>
      <div class="col-span-3 rounded p-4 flex flex-col gradient-border">
        <div class="flex justify-between items-center mb-4">
          <NuxtLink @click="getProducts" class="btn-sm gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer">
            Get Products
          </NuxtLink>
        </div>
        <p class="mb-2">Remove this welcome page by replacing <a
            class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold">&lt;NuxtWelcome /&gt;</a> in <a
            href="https://v3.nuxtjs.org/docs/directory-structure/app" target="_blank" rel="noopener"
            class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold">app.vue</a> with your own code.</p>
      </div>

      <a v-for="item in products" :key="item.id" href="https://v3.nuxtjs.org" target="_blank" rel="noopener"
        class="gradient-border cursor-pointer col-span-3 sm:col-span-1 p-4 flex flex-col"><svg width="40" height="40"
          viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 10.4217C21.9467 9.12833 24.59 8.33333 27.5 8.33333C30.4117 8.33333 33.0533 9.12833 35 10.4217V32.0883C33.0533 30.795 30.4117 30 27.5 30C24.59 30 21.9467 30.795 20 32.0883M20 10.4217V32.0883V10.4217ZM20 10.4217C18.0533 9.12833 15.41 8.33333 12.5 8.33333C9.59 8.33333 6.94667 9.12833 5 10.4217V32.0883C6.94667 30.795 9.59 30 12.5 30C15.41 30 18.0533 30.795 20 32.0883V10.4217Z"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <rect x="23.3334" y="13.3333" width="8.33334" height="1.66667" rx="0.833333" fill="currentColor"></rect>
          <rect x="8.33337" y="13.3333" width="8.33333" height="1.66667" rx="0.833333" fill="currentColor"></rect>
          <rect x="8.33337" y="18.3333" width="8.33333" height="1.66667" rx="0.833333" fill="currentColor"></rect>
          <rect x="8.33337" y="23.3333" width="8.33333" height="1.66667" rx="0.833334" fill="currentColor"></rect>
          <rect x="23.3334" y="18.3333" width="8.33334" height="1.66667" rx="0.833333" fill="currentColor"></rect>
          <rect x="23.3334" y="23.3333" width="8.33334" height="1.66667" rx="0.833334" fill="currentColor"></rect>
        </svg>
        <h2 class="font-semibold text-xl mt-4">{{ item.nombre }}</h2>
        <p class="mt-2" :v-text="item.descripcion" />
      </a>
    </div>
  </div>
</template>
<style scoped>
.btn-sm {
  width: 50% !important;
  padding: .7rem;
  font-size: 2rem;
}

.spotlight {
  background: linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);
  filter: blur(20vh);
  height: 50vh;
  bottom: -40vh
}

.spotlight-wrapper {
  opacity: 0.5;
  transition: opacity 0.4s ease-in
}

.nuxt-logo:hover~.spotlight-wrapper {
  opacity: 0.95
}

.gradient-border {
  position: relative;
  border-radius: 0.5rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  width: 100%
}

@media (prefers-color-scheme: light) {
  .gradient-border {
    background-color: rgba(255, 255, 255, 0.3)
  }

  .gradient-border::before {
    background: linear-gradient(90deg, #e2e2e2 0%, #e2e2e2 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)
  }
}

@media (prefers-color-scheme: dark) {
  .gradient-border {
    background-color: rgba(20, 20, 20, 0.3)
  }

  .gradient-border::before {
    background: linear-gradient(90deg, #303030 0%, #303030 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)
  }
}

.gradient-border::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0.5rem;
  padding: 2px;
  width: 100%;
  background-size: 400% auto;
  background-position: 0 0;
  opacity: 0.5;
  transition: background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;
  -webkit-mask: linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude
}

.gradient-border:hover::before {
  background-position: -50% 0;
  opacity: 1
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity))
}

.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity))
}

.rounded {
  border-radius: .25rem
}

.cursor-pointer {
  cursor: pointer
}

.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex
}

.grid {
  display: -ms-grid;
  display: grid
}

.flex-col {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  flex-direction: column
}

.place-content-center {
  place-content: center
}

.items-end {
  -webkit-box-align: end;
  -ms-flex-align: end;
  -webkit-align-items: flex-end;
  align-items: flex-end
}

.items-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center
}

.justify-end {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end
}

.justify-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center
}

.justify-between {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between
}

.font-sans {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji"
}

.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace
}

.font-medium {
  font-weight: 500
}

.font-bold {
  font-weight: 700
}

.font-semibold {
  font-weight: 600
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem
}

.text-sm {
  font-size: .875rem;
  line-height: 1.25rem
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem
}

.mb-2 {
  margin-bottom: .5rem
}

.mb-4 {
  margin-bottom: 1rem
}

.mt-4 {
  margin-top: 1rem
}

.mt-2 {
  margin-top: .5rem
}

.max-w-5xl {
  max-width: 64rem
}

.min-h-screen {
  min-height: 100vh
}

.p-4 {
  padding: 1rem
}

.p-8 {
  padding: 2rem
}

.p-1 {
  padding: .25rem
}

.pb-1 {
  padding-bottom: .25rem
}

.fixed {
  position: fixed
}

.left-0 {
  left: 0px
}

.right-0 {
  right: 0px
}

.text-black {
  --tw-text-opacity: 1;
  color: rgba(0, 0, 0, var(--tw-text-opacity))
}

.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
}

.w-full {
  width: 100%
}

.w-40 {
  width: 10rem
}

.z-10 {
  z-index: 10
}

.z-20 {
  z-index: 20
}

.gap-4 {
  grid-gap: 1rem;
  gap: 1rem
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr))
}

.col-span-3 {
  -ms-grid-column-span: span 3 / span 3;
  grid-column: span 3 / span 3
}

@media (min-width: 640px) {
  .sm\:text-base {
    font-size: 1rem;
    line-height: 1.5rem
  }

  .sm\:pb-2 {
    padding-bottom: .5rem
  }

  .sm\:col-span-1 {
    -ms-grid-column-span: span 1 / span 1;
    grid-column: span 1 / span 1
  }
}

@media (min-width: 768px) {
  .md\:gap-8 {
    grid-gap: 2rem;
    gap: 2rem
  }
}

@media (prefers-color-scheme: dark) {
  .dark\:bg-black {
    --tw-bg-opacity: 1;
    background-color: rgba(0, 0, 0, var(--tw-bg-opacity))
  }

  .dark\:bg-white\/10 {
    --tw-bg-opacity: .1;
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity))
  }

  .dark\:text-white {
    --tw-text-opacity: 1;
    color: rgba(255, 255, 255, var(--tw-text-opacity))
  }
}
</style>