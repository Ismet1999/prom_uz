<template>
  <div>
    <BCard style="width: 50vh; min-width: 320px">
      <BForm @submit.prevent>
        <BRow>
          <BCol cols="12" class="mb-2">
            <h1>Login</h1>
          </BCol>
          <BCol cols="12" class="d-flex flex-column">
            <BFormGroup label="Username token">
              <BFormInput
                v-model="usernameToken"
                placeholder="Enter the username token"
                @input="validate"
              />
            </BFormGroup>
            <div v-if="!formState.state" class="d-flex justify-content-center">
              <small
                class="text-center"
                :class="{ 'text-danger': !formState.state }"
                >{{ formState.message }}</small
              >
            </div>
          </BCol>
          <BCol cols="12" class="d-flex justify-content-center mt-2"
            ><BButton variant="success" type="submit" @click="logIn"
              >Log in</BButton
            ></BCol
          >
        </BRow>
      </BForm>
    </BCard>
  </div>
</template>

<script>
import validation from '@/utils/validation.js'
const validateFunc = validation({
  numbers: false,
  characters: false,
  cyrillic: false,
  minLength: 16,
  maxLength: 16,
})
export default {
  name: 'LoginPage',
  layout: 'empty',
  data() {
    return {
      usernameToken: '',
      formState: {
        state: null,
        message: null,
      },
    }
  },
  methods: {
    validate(value) {
      validateFunc(value)
        .then((r) => {
          this.formState.state = true
          this.formState.message = ''
        })
        .catch((e) => {
          this.formState.state = false
          this.formState.message =
            'Token should be length 16 characters , not contain special characters, numbers or cyrillic'
        })
    },

    logIn() {
      if (this.formState.state) {
        this.$router.push('/')
      }
    },
  },
}
</script>

<style>
</style>