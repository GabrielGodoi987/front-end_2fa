<template>
    <div class="login-container">
      <div class="login-box">
        <h2>Login</h2>
        
        <!-- Campo de Email -->
        <div class="input-group">
          <label for="email">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            placeholder="Digite seu email"
            required
          />
        </div>
  
        <!-- Campo de Senha -->
        <div class="input-group">
          <label for="password">Senha</label>
          <input
            v-model="senha"
            type="password"
            id="password"
            placeholder="Digite sua senha"
            required
          />
        </div>
  
        <!-- Botão de Login -->
        <button class="btn-submit" @click="logingUser">Entrar</button>
      </div>
    </div>
  </template>

<script setup lang="ts">
import { ref } from 'vue';
import { LoginService } from '../services/LoginService';

const login = new LoginService();

const email = ref<string>('');
const senha = ref<string>('');

const logingUser = async () => {
    const data = await login.loginUser(email.value, senha.value);
    console.log(data);
}
</script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f7f7f7;
    padding: 20px;
  }
  
  .login-box {
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
  }
  
  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
  }
  
  .input-group {
    margin-bottom: 20px;
    text-align: left;
  }
  
  .input-group label {
    font-size: 14px;
    color: #555;
  }
  
  .input-group input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    outline: none;
  }
  
  .input-group input:focus {
    border-color: #007bff;
  }
  
  .btn-submit {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn-submit:hover {
    background-color: #0056b3;
  }
  </style>
  