<template>
  <component :is="type || 'div'" :class="classes">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Column extends Vue {
  @Prop({ default: null })
  cols: Array<{ nom: number, den: number, mod: string }>

  @Prop({ default: 'div' })
  type: string

  classes: string[] = []

  created() {
    // Possible nominators.
    const arrNoms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    // Possible denominators.
    const arrDens = [1, 2, 3, 4, 6, 12]
    // Possible modifiers.
    const arrMods = ['l', 'm', 's', 'xs']

    // Check if cols attribute is present.
    if (this.cols) {
      // Loop through all col elements
      this.cols.forEach((col) => {
        // Check if nominator is present.
        if (!col.nom) return ''
        // Check if denominator is present.
        if (!col.den) return ''
        // Check if nominator is present inside the possible options (arrNoms).
        if (!arrNoms.includes(col.nom)) return ''
        // Check if denominator is present inside the possible options (arrDens).
        if (!arrDens.includes(col.den)) return ''
        // Check if modifier is present inside the possible options (arrMods).
        if (col.mod && !arrMods.includes(col.mod)) return ''
        // Create classname based on nom, den and mod.
        const cls = `col--${col.nom}-${col.den}` + (col.mod ? `--${col.mod}` : '')
        this.classes.push(cls)
      })
    } else {
      // If cols is not present set to default full-width column.
      this.classes = ['col--1-1']
    }
  }
}
</script>
