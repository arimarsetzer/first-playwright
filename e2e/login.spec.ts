import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page'

let loginPage: LoginPage

test.beforeEach(async({page})=>{
  loginPage = new LoginPage(page)
})

test('Deve logar com sucesso', async ({ page }) => {
  await loginPage.go()
  await loginPage.signIn('qa', 'cademy')
  await loginPage.userLoggedIn()
})

test('senha incorreta', async ({ page }) => {
  await loginPage.go()
  await loginPage.signIn('qa', 'cadem')
  await loginPage.toastMessage('Oops! Credenciais inválidas :(')
})

test('senha obrigatória', async ({ page }) => {
  await loginPage.go()
  await loginPage.signInUserOnly('qa')
  await loginPage.toastMessage('Informe a sua senha secreta!')
})

test('usuário obrigatório', async ({ page }) => {
  await loginPage.go()
  await loginPage.signInPasswordOnly('cademy')
  await loginPage.toastMessage('Informe o seu nome de usuário!')
})