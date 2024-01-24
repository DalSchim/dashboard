<template>
  <div class="wraper">


  <v-stepper
      v-model="step"
      :items="items"
      show-actions
      class="stepper"
  >
    <template v-slot:item.1>
      <form @submit.prevent="handlesubmit">
        <h1>Connexion</h1>
        <div class="pack-form">
          <label for="identifiant">Identifiant</label>
          <input type="text" name="" id="identifiant" placeholder="Votre identifiant" v-model="user.identifiant">
        </div>

        <div class="pack-form">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" v-model="user.password">
        </div>

        <button type="submit">Connexion</button>
      </form>
    </template>

    <template v-slot:item.2>
      <h1> code totp</h1>
      <form @submit.prevent="handlesubmit">
        <div class="pack-form">
          <label for="code">code</label>
          <input type="text" name="" id="code" placeholder="Votre code" v-model="user.code">
        </div>
        <button type="submit">Connexion</button>
      </form>

    </template>

    <template v-slot:item.3>

    </template>

  </v-stepper>
  </div>
</template>
<script>
export default {
  name: 'LoginView',
  // check for the user

  data: () => ({
    shipping: 0,
    step: 1,
    user: {
      identifiant: '',
      password: '',
    },
    items: [
      'Review Order',
      'Select Shipping',
      'Submit',
    ],
  }),
}
</script>

<style scoped>

.wraper{
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
}

.stepper{

  max-width: 500px;

}

  .pack-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .pack-form label {
    margin-bottom: 5px;
  }

  .pack-form input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .pack-form input:focus {
    outline: none;
  }

  .pack-form button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }

  .pack-form button:hover {
    background-color: #333;
  }
</style>