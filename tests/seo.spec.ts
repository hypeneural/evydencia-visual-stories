import { test, expect } from "@playwright/test";

test.describe("Auditoria SEO On-Page e Metadados", () => {
  test("Home possui H1 factual, Title com Tijucas SC e JSON-LD válido", async ({ page }) => {
    await page.goto("/");
    
    // Title
    const title = await page.title();
    expect(title).toContain("Tijucas SC");
    expect(title).toContain("Estúdio Evydência");

    // H1
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("Estúdio de Fotos em Tijucas SC");

    // Description
    const metaDesc = page.locator('meta[name="description"]');
    await expect(metaDesc).toHaveAttribute("content", /Tijucas/);

    // Canonical
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute("href", "https://evydencia.com.br/");

    // JSON-LD
    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd.first()).toBeAttached();
    const content = await jsonLd.first().textContent();
    expect(content).toContain("LocalBusiness");
    expect(content).toContain("Tijucas");
    expect(content).toContain("Anderson");
    expect(content).toContain("Elaine");
  });

  test("Página de Ensaio Gestante possui H1 e FAQ", async ({ page }) => {
    await page.goto("/ensaios/gestante-tijucas/");
    
    const h1 = page.locator("h1");
    await expect(h1).toContainText("Ensaio de Gestante em Tijucas");

    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute("href", "https://evydencia.com.br/ensaios/gestante-tijucas/");
  });
});
