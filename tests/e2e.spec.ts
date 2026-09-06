import { test, expect } from "@playwright/test";

test.describe("AURA — Home y secciones", () => {
  test("la home carga y muestra el Hero correctamente", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/AURA/);
    await expect(page.locator('h1', { hasText: "AURA" })).toBeVisible();
  });

  test("el formulario de reserva de la home valida campos vacíos", async ({ page }) => {
    await page.goto("/");
    await page.locator("#reservas").scrollIntoViewIfNeeded();
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('[role="alert"]').first()).toBeVisible();
  });

  test("el formulario de reserva de la home envía correctamente con datos válidos", async ({ page }) => {
    await page.goto("/");
    await page.locator("#reservas").scrollIntoViewIfNeeded();
    await page.locator("#name").fill("Cliente Demo");
    await page.locator("#email").fill("demo@example.com");
    await page.locator("#date").fill("2026-12-24");
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('button[type="submit"]')).toContainText("Solicitud Enviada", { timeout: 10000 });
  });
});

test.describe("Barra de navegación (Desktop)", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test("cada botón de la barra lleva a su página correcta", async ({ page }) => {
    await page.goto("/");
    const expectNav = async (label: string, path: string) => {
      await page.locator('header a', { hasText: label }).first().click();
      await expect(page).toHaveURL(new RegExp(`^.*${path}$`));
      await expect(page.locator('header a', { hasText: label }).first()).toHaveAttribute("aria-current", "page");
    };
    await expectNav("Experiencia", "/experiencia");
    await expectNav("Menú", "/menu");
    await expectNav("Chef", "/chef");
    await expectNav("Galería", "/galeria");
    await expectNav("Eventos", "/eventos");
    await expectNav("Contacto", "/contacto");
  });

  test("el botón Reservar lleva a la página de reserva", async ({ page }) => {
    await page.goto("/");
    await page.locator('header a', { hasText: "Reservar" }).first().click();
    await expect(page).toHaveURL(/\/reservar$/);
  });
});

test.describe("Página /menu — Tabs funcionales", () => {
  test("las pestañas cambian el contenido del menú", async ({ page }) => {
    await page.goto("/menu");
    await expect(page.locator('[role="tab"]', { hasText: "Degustación" })).toBeVisible();
    // Pestaña activa por defecto: Degustación
    const visiblePanel = page.locator('[role="tabpanel"]:visible');
    await expect(visiblePanel).toContainText("Esencia de Bosque");
    // Cambiar a Carta
    await page.locator('[role="tab"]', { hasText: "Carta" }).click();
    await expect(page.locator('[role="tabpanel"]:visible')).toContainText("Diamante Negro", { timeout: 5000 });
    // Cambiar a Maridaje
    await page.locator('[role="tab"]', { hasText: "Maridaje" }).click();
    await expect(page.locator('[role="tabpanel"]:visible')).toContainText("Maridaje de Autor", { timeout: 5000 });
  });
});

test.describe("Página /galeria — Filtros y lightbox", () => {
  test("los filtros muestran solo la categoría seleccionada", async ({ page }) => {
    await page.goto("/galeria");
    await page.getByRole("button", { name: "Platos" }).click();
    await expect(page.locator('.masonry-grid button[data-category="platos"]').first()).toBeVisible();
    // Todos los visibles deben ser platos
    const cats = await page.locator('.masonry-grid button').evaluateAll((els) => els.map((e) => e.getAttribute("data-category")));
    expect(cats.length).toBeGreaterThan(0);
    expect(cats.every((c) => c === "platos")).toBeTruthy();
  });

  test("clic en una imagen abre el lightbox", async ({ page }) => {
    await page.goto("/galeria");
    await page.locator('.masonry-grid button').first().click();
    await expect(page.locator('[aria-label*="Cerrar"], button[aria-label*="cerrar"]')).toBeVisible({ timeout: 5000 });
    await page.keyboard.press("Escape");
    await expect(page.locator('.lightbox-active, [role="dialog"]')).toBeHidden({ timeout: 5000 });
  });
});

test.describe("Página /reservar — Formulario real", () => {
  test("valida campos obligatorios vacíos", async ({ page }) => {
    await page.goto("/reservar");
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('[role="alert"]').first()).toBeVisible();
  });

  test("envía la reserva completa con datos válidos", async ({ page }) => {
    await page.goto("/reservar");
    await page.locator("#nombre").fill("Cliente Demo");
    await page.locator("#email").fill("demo@example.com");
    await page.locator("#telefono").fill("+34600111222");
    await page.locator("#fecha").fill("2026-12-24");
    await page.locator("#hora").selectOption("21:00");
    await page.locator("#comensales").selectOption("2");
    await page.locator("#ocasion").selectOption("Cena romántica");
    await page.locator("#preferencias").fill("Mesa tranquila");
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('button[type="submit"]')).toContainText("RESERVA CONFIRMADA", { timeout: 10000 });
  });
});

test.describe("Página /contacto — Formulario funcional", () => {
  test("valida campos obligatorios vacíos", async ({ page }) => {
    await page.goto("/contacto");
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('[role="alert"]').first()).toBeVisible();
  });

  test("envía el mensaje con datos válidos", async ({ page }) => {
    await page.goto("/contacto");
    await page.locator("#c-nombre").fill("Cliente Demo");
    await page.locator("#c-email").fill("demo@example.com");
    await page.locator("#c-asunto").fill("Consulta demo");
    await page.locator("#c-mensaje").fill("Me gustaría información sobre el menú degustación de temporada.");
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('button[type="submit"]')).toContainText("Mensaje Enviado", { timeout: 10000 });
  });

  test("mailto y teléfono son enlaces válidos", async ({ page }) => {
    await page.goto("/contacto");
    await expect(page.locator('a[href^="mailto:"]').first()).toHaveAttribute("href", /@aura-restaurant\.com/);
    await expect(page.locator('a[href^="tel:"]').first()).toHaveAttribute("href", /tel:\+/);
  });
});

test.describe("Menú Hamburguesa (Mobile)", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("el botón hamburguesa abre y cierra el menú móvil", async ({ page }) => {
    await page.goto("/");
    const burger = page.locator('header button[aria-label="Abrir menú"]');
    await expect(burger).toBeVisible();

    // Abrir menú
    await burger.click();
    await expect(page.locator('header a', { hasText: "Experiencia" }).last()).toBeVisible();

    // Cerrar con el botón
    await page.locator('header button[aria-label="Cerrar menú"]').click();
    await page.waitForTimeout(300);
    await expect(page.locator('header a', { hasText: "Experiencia" }).last()).toBeHidden();
  });

  test("navegar a una página desde el menú móvil cierra el overlay", async ({ page }) => {
    await page.goto("/");
    await page.locator('header button[aria-label="Abrir menú"]').click();
    await page.locator('header a', { hasText: "Galería" }).last().click();
    await expect(page).toHaveURL(/\/galeria$/);
    // El overlay se ha cerrado tras navegar
    await expect(page.locator('header a', { hasText: "Experiencia" }).last()).toBeHidden();
  });

  test("el CTA Reservar lleva a /reservar", async ({ page }) => {
    await page.goto("/");
    await page.locator('header button[aria-label="Abrir menú"]').click();
    await page.locator('header a', { hasText: "Reservar Mesa" }).click();
    await expect(page).toHaveURL(/\/reservar$/);
  });
});

test.describe("Todas las rutas responden 200", () => {
  const routes = ["/", "/menu", "/chef", "/experiencia", "/galeria", "/eventos", "/reservar", "/contacto"];

  for (const route of routes) {
    test(`la ruta ${route} responde correctamente`, async ({ page }) => {
      const res = await page.goto(route);
      expect(res?.status()).toBeLessThan(400);
    });
  }

  test("las rutas reservas redirigen correctamente", async ({ page }) => {
    const res = await page.request.get("/reservas", { maxRedirects: 0 });
    expect(res.status()).toBe(307);
    await page.goto("/reservas");
    await expect(page).toHaveURL(/\/reservar$/);
  });
});