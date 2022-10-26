<script>
export default {
  data() {
    return {
      vehicles: ['Vehiculo 1', 'Vehiculo 2', 'Vehiculo 3'],
      selected: '',
      prefix: '',
      /* first: '',
      last: '', */
      vehicle: ''
    }
  },
  computed: {
    filteredNames() {
      return this.vehicles.filter((n) =>
        n.toLowerCase().startsWith(this.prefix.toLowerCase())
      )
    }
  },
  watch: {
    selected(name) {
      /* ;[this.last, this.first] = name.split(', ') */
      this.vehicle = name
    }
  },
  methods: {
    create() {
    //   const fullName = this.parking
      this.vehicles.push(this.vehicle)
      /* if (this.hasValidInput()) {
        const fullName = `${this.last}, ${this.first}`
        if (!this.names.includes(fullName)) {
          this.names.push(fullName)
          this.first = this.last = ''
        }
      } */
    },
    update() {
      if (/* this.hasValidInput() &&  */this.selected) {
        const i = this.vehicles.indexOf(this.selected)
        this.vehicles[i] = this.selected = this.vehicle
      }
    },
    del() {
      if (this.selected) {
        const i = this.vehicles.indexOf(this.selected)
        this.vehicles.splice(i, 1)
        this.selected = this.vehicle = ''
      }
    }/* ,
    hasValidInput() {
      return this.first.trim() && this.last.trim()
    } */
  }
}
</script>

<template>
  <!-- <div><input v-model="prefix" placeholder="Filter prefix"></div> -->
  <h1>This is a vehicle page</h1>
  <select size="5" v-model="selected">
    <option v-for="name in filteredNames" :key="name">{{ name }}</option>
  </select>

  <label>Nombre: <input v-model="vehicle"></label>

  <div class="buttons">
    <button @click="create" class="btn btn-primary mb-3">Registrar</button>
    <button @click="update" class="btn btn-warning mb-3">Actualizar</button>
    <button @click="del" class="btn btn-danger mb-3">Borrar</button>
  </div>
</template>

<style>
* {
  font-size: inherit;
}

input {
  display: block;
  margin-bottom: 10px;
}

select {
  float: left;
  margin: 0 1em 1em 0;
  width: 14em;
}

.buttons {
  clear: both;
}

button + button {
  margin-left: 5px;
}
</style>