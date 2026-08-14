import { test, expect } from "@playwright/test";

test.describe("Auditoria de Acessibilidade e Navegabilidade", () => {
  test("Skip link está presente e funcional no topo", async ({ page }) => {
    await page.goto("/");
    const skipLink = page.locator('a.skip-link');
    await expect(skipLink).toBeAttached();
    await expect(skipLink).toHaveAttribute("href", "#conteudo-principal");
  });

  test("Todas as imagens da Home possuem atributo alt descritivo", async ({ page }) => {
    await page.goto("/");
    const images = page.locator("img");
    const count = await images.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt).toBeTruthy();
      expect(alt?.trim().length).toBeGreaterThan(3);
    }
  });

  test("Menu mobile possui atributos ARIA adequados", async ({ page }) => {
    await page.goto("/");
    const menuButton = page.locator("#mobile-menu-button");
    await expect(menuButton).toHaveAttribute("aria-controls", "mobile-menu");
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });

  test("Hierarquia de títulos possui exatamente um H1 por página", async ({ page }) => {
    const testUrls = ["/", "/ensaios/", "/ensaios/gestante-tijucas/", "/sobre/", "/estudio/", "/contato/"];
    
    for (const url of testUrls) {
      await page.goto(url);
      const h1Count = await page.locator("h1").count();
      expect(h1Count).toBe(1);
    }
  });
});
