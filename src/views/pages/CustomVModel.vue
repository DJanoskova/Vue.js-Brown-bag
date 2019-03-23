<template>
  <div>

    <div class="row mb-3">
      <div class="col-12 col-md-6">
        <div class="card">
          <ButtonPicker v-model="flower" :data="flowers" />
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card">
          <pre>{{ flower }}</pre>
        </div>
      </div>
    </div>

    <div class="row mb-2">
      <div class="col-12 col-md-6">
        <div class="card">
          <ButtonPicker v-model="color" :data="colors" />
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card">
          <pre>{{ color }}</pre>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-6">
        <span class="text-muted small">Parent.vue</span>
        <Codemirror v-model="parentSource" />
      </div>
      <div class="col-12 col-md-6">
        <span class="text-muted small">ButtonPicker.vue</span>
        <Codemirror v-model="buttonPickerSource" />
      </div>
    </div>
  </div>
</template>

<script>
import Codemirror from '../../components/Codemirror'
import ButtonPicker from '../../components/ButtonPicker'

import { buttonPickerSource, buttonPickerParentSource } from '../../data';

export default {
  data () {
    return {
      buttonPickerSource: buttonPickerSource,
      parentSource: buttonPickerParentSource,
      flower: 'rose',
      flowers: [
        {
          title: 'Rose',
          value: 'rose'
        },
        {
          title: 'Lily',
          value: 'lily'
        },
        {
          title: 'Sunflower',
          value: 'sunflower'
        },
        {
          title: 'Cactus',
          value: 'they-are-beautiful-too'
        }
      ],
      color: '#0000ff',
      colors: [
        {
          title: 'Red',
          value: '#ff0000'
        },
        {
          title: 'Green',
          value: '#00ff00'
        },
        {
          title: 'Blue',
          value: '#0000ff'
        }
      ]
    }
  },
  components: {
    Codemirror,
    ButtonPicker
  }
}
</script>