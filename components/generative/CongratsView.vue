<template>
  <section>
    <p class="title text-3xl">Waii you made it! ✨</p>
    <p class="title text-2xl">Your NFT should be ready in 1 minute</p>
    <nuxt-link
      class="text-2xl link"
      :to="`/${urlPrefix}/collection/${collectionId}`">
      In the meanwhile, click here to check the collection ♥️🍷
    </nuxt-link>
    <BasicImage
      src="https://imagedelivery.net/jk5b6spi_m_-9qC4VTnjpg/bafybeicezf5vihtb6vfgw7w7qiggayhzvq3iexd7ikk4qlqj5ybcashw3e/public" />
    <SubmitButton
      class="py-2"
      icon="sync"
      type="is-success"
      label="Start over"
      expanded
      @click="submit" />
  </section>
</template>

<script setup lang="ts">
import { COLLECTION_ID } from './promptBuilder'
import BasicImage from '@/components/shared/view/BasicImage.vue'
import SubmitButton from '@/components/base/SubmitButton.vue'

const { urlPrefix } = usePrefix()

const collectionId = COLLECTION_ID
const emit = defineEmits(['select'])
const submit = () => emit('select')
</script>
