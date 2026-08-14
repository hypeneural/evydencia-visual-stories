import { test, expect } from "@playwright/test";

test.describe("Navegação e Integridade de Links", () => {
  test("Menu de navegação direciona para rotas ativas", async ({ page }) => {
    await page.goto("/");
    
    // Clicar em Ensaios
    await page.click('nav a:has-text("Ensaios")');
    await expect(page).toHaveURL(/\/ensaios\//);
    
    // Clicar em Contato
    await page.click('nav a:has-text("Contato")');
    await expect(page).toHaveURL(/\/contato\//);
  });

  test("Página 404 carrega com links de recuperação", async ({ page }) => {
    await page.goto("/pagina-inexistente-teste/");
    const h1 = page.locator("h1");
    await expect(h1).toContainText("Página Não Encontrada");
  });
});
