<script setup>

// Example props, generated as when using the server package
const props = {
    translate: {
        login: {
            email: {
                label: 'Email',
                placeholder: 'Enter your email',
            },
            password: {
                label: 'Password',
                placeholder: 'Enter your password',
            },
            submit: 'Login',
        }
    }
}

const __ = useTranslate(props.translate)
</script>

<template>
    <form>
        <div>
            <label for="email">
                {{ __('login.email.label') }}
            </label>
            <input type="email" id="email" :placeholder="__('login.email.placeholder')"  />
        </div>
        <div>
            <label for="password">
                {{ __('login.password.label') }}
            </label>
            <input type="password" id="password" :placeholder="__('login.password.placeholder')"  />
        </div>
        <button type="submit"> 
            {{ __('login.submit') }}
        </button>
    </form>
</template>