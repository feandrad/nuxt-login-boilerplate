<template>
  <div class="min-h-screen grid lg:grid-cols-2 bg-cream text-ink">
    <!-- Coluna esquerda (hero) -->
    <section class="hidden lg:flex flex-col justify-between p-12 relative overflow-hidden">
      <header class="flex items-center gap-3">
        <div class="h-11 w-11 rounded-full flex items-center justify-center bg-[var(--almond-espresso)] text-white shadow">
          <span class="font-semibold tracking-wide">A</span>
        </div>
        <div class="leading-tight">
          <h1 class="text-xl font-semibold tracking-wide">Almond Café &amp; Eventos</h1>
          <p class="text-sm text-muted">Cafés premium para eventos</p>
        </div>
      </header>

      <div class="mt-16">
        <h2 class="text-4xl font-semibold tracking-tight mb-4">Seu evento, com aroma de experiência</h2>
        <p class="text-[15px] leading-relaxed text-muted max-w-md">
          Acesse o painel para gerenciar orçamentos, pedidos e logística.
        </p>
      </div>

      <footer class="text-xs text-muted">
        © {{ new Date().getFullYear() }} Almond Café &amp; Eventos — São Paulo, Brasil
      </footer>
    </section>

    <!-- Coluna direita (card de login) -->
    <section class="flex items-center justify-center p-6 lg:p-12 bg-silk">
      <div class="w-full max-w-md">
        <div class="card rounded-2xl p-7">
          <div class="mb-6">
            <h3 class="text-2xl font-semibold text-onw">Entrar</h3>
            <p class="text-sm muted-onw">Bem-vindo(a) de volta ao painel Almond</p>
          </div>

          <form @submit.prevent="onSubmit" class="grid gap-4">
            <div>
              <label for="email" class="label text-onw">E-mail</label>
              <input id="email" v-model="email" type="email" required autocomplete="email" class="input" />
            </div>

            <div>
              <div class="flex items-center justify-between mb-1">
                <label for="password" class="label text-onw mb-0">Senha</label>
                <NuxtLink to="/forgot" class="text-xs link-onw hover:underline">Esqueci a senha</NuxtLink>
              </div>
              <div class="relative">
                <input
                    :type="show ? 'text' : 'password'"
                    id="password"
                    v-model="password"
                    required
                    autocomplete="current-password"
                    class="input pr-10"
                />
                <button
                    type="button"
                    @click="show = !show"
                    class="absolute inset-y-0 right-3 my-auto muted-onw hover:text-onw"
                    aria-label="Mostrar/ocultar senha"
                >
                  <span v-if="!show">👁️</span>
                  <span v-else>🙈</span>
                </button>
              </div>
            </div>

            <button type="submit" :disabled="loading" class="btn-primary w-full py-3 mt-2 disabled:opacity-60 disabled:cursor-not-allowed">
              <svg v-if="loading" class="animate-spin -ml-1 mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
              </svg>
              Entrar
            </button>

            <div v-if="error" class="text-sm text-red-600">{{ error }}</div>
          </form>

          <div class="mt-6 border-t divider-onw pt-4 text-xs muted-onw">
            Ao continuar, você concorda com nossos Termos e Política de Privacidade.
          </div>
        </div>

        <div class="mt-6 text-center text-xs muted-onw">
          Precisa de acesso? <a href="/contato" class="link-onw hover:underline">Fale conosco</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')
const show = ref(false)
const loading = ref(false)
const error = ref('')

const onSubmit = async () => {
  error.value = ''
  loading.value = true
  try {
    // TODO: integrar com Supabase Auth
    await new Promise(r => setTimeout(r, 600))
    return navigateTo('/')
  } catch (e: any) {
    error.value = e?.message || 'Não foi possível entrar.'
  } finally {
    loading.value = false
  }
}
</script>
