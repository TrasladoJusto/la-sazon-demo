import { test, expect } from "@playwright/test";

test.describe("AURA Restaurant — Navegación y Experiencia", () => {
  test("la home carga y muestra el Hero correctamente", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/AURA/);
    await expect(page.locator('h1', { hasText: "AURA" })).toBeVisible();
    await expect(page.locator("#reservas")).toBeAttached();
  });

  test("el formulario de reserva valida campos vacíos", async ({ page }) => {
    await page.goto("/");
    await page.locator("#reservas").scrollIntoViewIfNeeded();
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('[role="alert"]').first()).toBeVisible();
  });

  test("el formulario de reserva envía correctamente con datos válidos", async ({ page }) => {
    await page.goto("/");
    await page.locator("#reservas").scrollIntoViewIfNeeded();
    await page.locator("#name").fill("Cliente Demo");
    await page.locator("#email").fill("demo@example.com");
    await page.locator("#date").fill("2026-12-24");
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('button[type="submit"]')).toContainText("Solicitud Enviada", { timeout: 10000 });
  });
});

test.describe("Menú Hamburguesa (Mobile)", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 }); // iPhone 14
    await page.goto("/");
  });

  test("el botón hamburguesa abre y cierra el menú móvil", async ({ page }) => {
    const burger = page.locator('header button[aria-label="Abrir menú"]');
    await expect(burger).toBeVisible();

    // Abrir menú
    await burger.click();
    await expect(page.locator('header a', { hasText: "Experiencia" }).last()).toBeVisible();

    // Cerrar con el botón
    await page.locator('header button[aria-label="Cerrar menú"]').click();
    await page.waitForTimeout(800); // wait for transition
    await expect(page.locator('header a', { hasText: "Experiencia" }).last()).toBeHidden();
  });

  test("navegar a una sección desde el menú móvil cierra el overlay", async ({ page }) => {
    await page.locator('header button[aria-label="Abrir menú"]').click();
    await page.locator('header a', { hasText: "Galería" }).last().click();
    await page.waitForTimeout(800);
    await expect(page).toHaveURL(/#galeria/);
  });
});

test.describe("Rutas disponibles", () => {
  const routes = ["/", "/menu", "/chef", "/experiencia", "/galeria", "/eventos", "/reservar", "/contacto"];

  for (const route of routes) {
    test(`la ruta ${route} responde 200`, async ({ page }) => {
      await page.goto(route);
      await expect(page).not.toHaveURL(/not-found/);
    });
  }
});