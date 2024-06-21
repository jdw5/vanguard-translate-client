# Vanguard Translate Client
[![npm version](https://badge.fury.io/js/vanguard-translate.svg)](https://badge.fury.io/js/vanguard-translate)

Vanguard Translate is a simple wrapping for dot notation on objects from Inertia JS props. When combined with the [companion package](https://github.com/jdw5/vanguard-translate) it can be used to pass translations to the client side without any configuration, in the same way you would a `blade.php` template. 

This package is built for use with **Inertia JS and Vue 3**.

## Installation
The package can be installed using any of the common package managers.

```console
npm i vanguard-translate
```

## Usage
Inside a `.vue` file, you can import the composable and use it to access translations from the server side.

```vue
<script setup>
import useTranslate from 'vanguard-translate'

const props = defineProps(['translations'])

const __ = useTranslate(props.translations)
</script>

<template>
    {{ __('auth.login.label') }}
</template>
```

If you do not pass the composable any arguments, it will resolve to use a `translations` prop by default. If neither is find, it will throw an error.

This behaviour allows the composable to be defined at a global scope, so you don't need to pass the translations prop to every component.

## Licnese
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.