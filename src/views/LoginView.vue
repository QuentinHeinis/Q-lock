<template>
    <div class="mt-12 px-5 grid grid-cols-1 lg:grid-cols-2 gap-20 relative">
        <form class="grid grid-cols-[minmax(max-content,8rem)_minmax(10rem,35rem)] gap-1">
            <fieldset class="contents">
              <legend class="my-1 border-b-2 col-span-full">Se connecter</legend>
              <label for="code-postal">Email :</label>
              <input type="email" class="rounded-sm border-2" name="email" id="email">
              <label for="ville">Password : </label>
              <input class="rounded-sm border-2" name="password" id="password" type="password" />
              
                  <button type="button" >Se Connecter</button>
                  <button type="button" >Se Déconnecter</button>
              
              
            </fieldset>
          </form>
          <form class="grid grid-cols-[minmax(max-content,8rem)_minmax(10rem,35rem)] gap-1">
            <fieldset class="contents">
              <legend class="my-1 border-b-2 col-span-full">Créer un compte</legend>
              <label for="code-postal">Login :</label>
              <input type="text" class="rounded-sm border-2" name="login" id="login">
              <label for="code-postal">Email :</label>
              <input type="email" class="rounded-sm border-2" name="email" id="email">
              <label for="ville">Password : </label>
              <input class="rounded-sm border-2" name="password" id="password" type="password" />
                  <button type="button" >Créer</button>
              
              
            </fieldset>
          </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>