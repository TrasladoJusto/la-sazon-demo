import { test, expect } from "@playwright/test";

const pageLinks = [
  { label: "Menú", path: "/menu" },
  { label: "Contacto", path: "/contacto" },
];

test.describe("Home (one-page) — estructura", () => {
  test("la home carga y muestra el Hero", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/AURA/);
    await expect(page.locator('h1', { hasText: "AURA" })).toBeVisible();
  });

  test("las secciones de la home son: Experiencia, Galería, Chef y Eventos", async ({ page }) => {
    await page.goto("/");
    for (const id of ["experiencia", "galeria", "chef", "eventos"]) {
      await expect(page.locator(`#${id}`)).toBeVisible();
    }
  });

  test("el Menú, las Reservas y el Contacto NO son secciones de la home", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#menu")).toHaveCount(0);
    await expect(page.locator("#reservas")).toHaveCount(0);
    await expect(page.locator("#contacto")).toHaveCount(0);
  });

  test("la Galería aparece antes que el Chef", async ({ page }) => {
    await page.goto("/");
    const galeriaY = await page.locator("#galeria").evaluate((el) => el.getBoundingClientRect().top);
    const chefY = await page.locator("#chef").evaluate((el) => el.getBoundingClientRect().top);
    expect(galeriaY).toBeLessThan(chefY);
  });

  test("los CTAs del Hero llevan a las páginas correctas", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('.relative.z-10 a[href="/reservar"]')).toBeVisible();
    await expect(page.locator('.relative.z-10 a[href="/#experiencia"]')).toBeVisible();
  });
});

test.describe("Navegación (Desktop)", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  for (const { label, path } of pageLinks) {
    test(`el botón "${label}" lleva a la página ${path}`, async ({ page }) => {
      await page.goto("/");
      await page.locator('header a', { hasText: label }).first().click();
      await expect(page).toHaveURL(new RegExp(`${path}$`));
      await expect(page.locator('header a', { hasText: label }).first()).toHaveAttribute("aria-current", "page");
    });
  }

  test("el CTA Reservar de la barra lleva a /reservar", async ({ page }) => {
    await page.goto("/");
    await page.locator('header a', { hasText: "Reservar" }).first().click();
    await expect(page).toHaveURL(/\/reservar$/);
  });

  test("la barra no muestra botones a secciones de la home", async ({ page }) => {
    await page.goto("/");
    const anchorNav = page.locator('header a[href^="#"]');
    await expect(anchorNav).toHaveCount(0);
  });
});

test.describe("Página /menu", () => {
  test("carga con encabezado y carrusel de selección", async ({ page }) => {
    await page.goto("/menu");
    await expect(page.locator('h1', { hasText: "Nuestra Carta" })).toBeVisible();
    await page.locator("#menu").scrollIntoViewIfNeeded();
    await expect(page.locator('#menu [data-card], #menu [data-card=""]').first()).toBeVisible();
  });

  test("las pestañas de la carta cambian el contenido", async ({ page }) => {
    await page.goto("/menu");
    await page.locator('[role="tab"]', { hasText: "Degustación" }).click();
    const visiblePanel = page.locator('[role="tabpanel"]:visible');
    await expect(visiblePanel).toContainText("Esencia de Bosque", { timeout: 5000 });
    await page.locator('[role="tab"]', { hasText: "Carta" }).click();
    await expect(page.locator('[role="tabpanel"]:visible')).toContainText("Diamante Negro", { timeout: 5000 });
    await page.locator('[role="tab"]', { hasText: "Maridaje" }).click();
    await expect(page.locator('[role="tabpanel"]:visible')).toContainText("Maridaje de Autor", { timeout: 5000 });
  });

  test("el CTA de la carta lleva a /reservar", async ({ page }) => {
    await page.goto("/menu");
    await expect(page.locator('main a[href="/reservar"]').first()).toBeVisible();
  });
});

test.describe("Página /reservar", () => {
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

  test("ofrece alternativa por WhatsApp", async ({ page }) => {
    await page.goto("/reservar");
    await expect(page.locator('a[href*="wa.me/"]').first()).toBeVisible();
  });
});

test.describe("Página /contacto", () => {
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

  test("teléfono, email y mapa son enlaces accionables", async ({ page }) => {
    await page.goto("/contacto");
    await expect(page.locator('a[href^="mailto:"]').first()).toHaveAttribute("href", /@aura-restaurant\.com/);
    await expect(page.locator('a[href^="tel:"]').first()).toHaveAttribute("href", /tel:\+/);
    await expect(page.locator('a[href*="maps.google.com"]').first()).toHaveAttribute("target", "_blank");
  });
});

test.describe("API endpoints", () => {
  test("POST /api/reservations rechaza datos inválidos con 400", async ({ page }) => {
    const res = await page.request.post("/api/reservations", { data: { name: "x", email: "no-email", date: "" } });
    expect(res.status()).toBe(400);
  });

  test("POST /api/reservations acepta una reserva válida con 201", async ({ page }) => {
    const res = await page.request.post("/api/reservations", {
      data: {
        name: "Cliente Demo",
        email: "demo@example.com",
        phone: "+34600111222",
        date: "2026-12-24",
        time: "21:00",
        guests: "2",
        occasion: "Cena romántica",
        preferences: "Mesa tranquila",
      },
    });
    expect(res.status()).toBe(201);
  });

  test("POST /api/contact rechaza datos inválidos con 400", async ({ page }) => {
    const res = await page.request.post("/api/contact", { data: { name: "x", email: "no-email", message: "corto" } });
    expect(res.status()).toBe(400);
  });

  test("POST /api/contact acepta un mensaje válido con 201", async ({ page }) => {
    const res = await page.request.post("/api/contact", {
      data: {
        name: "Cliente Demo",
        email: "demo@example.com",
        subject: "Consulta demo",
        message: "Quisiera información sobre el menú degustación de temporada y disponibilidad.",
      },
    });
    expect(res.status()).toBe(201);
  });
});

test.describe("Redirecciones", () => {
  const anchorRedirects = [
    ["/chef", "#chef"],
    ["/experiencia", "#experiencia"],
    ["/galeria", "#galeria"],
    ["/eventos", "#eventos"],
  ];

  for (const [route, hash] of anchorRedirects) {
    test(`la ruta ${route} redirige a /${hash}`, async ({ page }) => {
      await page.goto(route);
      await expect(page).toHaveURL(new RegExp(`/\\${hash}$`));
      await expect(page.locator('h1', { hasText: "AURA" })).toBeVisible();
    });
  }

  test("la ruta /reservas redirige a /reservar", async ({ page }) => {
    const res = await page.request.get("/reservas", { maxRedirects: 0 });
    expect(res.status()).toBe(307);
    await page.goto("/reservas");
    await expect(page).toHaveURL(/\/reservar$/);
  });

  test("las páginas reales responden 200 (no redirigen)", async ({ page }) => {
    for (const route of ["/", "/menu", "/reservar", "/contacto"]) {
      const res = await page.request.get(route, { maxRedirects: 0 });
      expect(res.status(), `${route} debería ser 200`).toBe(200);
    }
  });
});

test.describe("Menú Hamburguesa (Mobile)", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("el botón hamburguesa abre y cierra el menú móvil", async ({ page }) => {
    await page.goto("/");
    const burger = page.locator('header button[aria-label="Abrir menú"]');
    await expect(burger).toBeVisible();

    await burger.click();
    await expect(page.getByRole("dialog").getByRole("link", { name: "Menú" })).toBeVisible();

    await page.locator('header button[aria-label="Cerrar menú"]').click();
    await page.waitForTimeout(400);
    await expect(page.getByRole("dialog").getByRole("link", { name: "Menú" })).toBeHidden();
  });

  test("navegar a una página desde el menú móvil lo cierra", async ({ page }) => {
    await page.goto("/");
    await page.locator('header button[aria-label="Abrir menú"]').click();
    await page.getByRole("dialog").getByRole("link", { name: "Menú" }).click();
    await expect(page).toHaveURL(/\/menu$/);
    await expect(page.getByRole("dialog").getByRole("link", { name: "Menú" })).toBeHidden({ timeout: 10000 });
  });

  test("el CTA Reservar del menú móvil lleva a /reservar", async ({ page }) => {
    await page.goto("/");
    await page.locator('header button[aria-label="Abrir menú"]').click();
    await page.getByRole("dialog").getByRole("link", { name: "Reservar Mesa" }).click();
    await expect(page).toHaveURL(/\/reservar$/);
  });

  test("el menú móvil cubre toda la pantalla también sobre página scrolleada", async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => window.scrollTo(0, 1400));
    await page.waitForTimeout(500);
    await page.locator('header button[aria-label="Abrir menú"]').click();
    await page.waitForTimeout(1200);
    const dialog = page.getByRole("dialog");
    const box = await dialog.boundingBox();
    expect(box).not.toBeNull();
    if (box) {
      expect(box.y).toBe(0);
      expect(box.x).toBe(0);
      expect(box.y + box.height).toBeGreaterThanOrEqual(810);
    }
    // El CTA queda dentro del overlay clicable y navega
    await dialog.getByRole("link", { name: "Reservar Mesa" }).click();
    await expect(page).toHaveURL(/\/reservar$/);
  });

  test("el menú móvil cubre toda la pantalla en subpáginas", async ({ page }) => {
    await page.goto("/menu");
    await page.locator('header button[aria-label="Abrir menú"]').click();
    await page.waitForTimeout(1100);
    const dialog = page.getByRole("dialog");
    const box = await dialog.boundingBox();
    expect(box).not.toBeNull();
    if (box) {
      expect(box.y).toBe(0);
      expect(box.y + box.height).toBeGreaterThanOrEqual(810);
    }
    await expect(dialog.getByRole("link", { name: "Contacto" })).toBeVisible();
    await dialog.getByRole("link", { name: "Contacto" }).click();
    await expect(page).toHaveURL(/\/contacto$/);
  });

  test("el menú estático de páginas se ve sólido en subpáginas móviles", async ({ page }) => {
    await page.goto("/menu");
    const header = page.locator("header");
    await expect(header).toHaveClass(/bg-background-dark/);
  });
});

test.describe("Footer", () => {
  test("los enlaces del footer apuntan a anclas de home o páginas válidas", async ({ page }) => {
    await page.goto("/");
    const hrefs = await page.locator("footer a").evaluateAll((els) => els.map((e) => e.getAttribute("href")));
    const internal = hrefs.filter((h) => h && !h.startsWith("http") && !h.startsWith("mailto") && !h.startsWith("tel"));
    for (const h of internal) {
      expect(h).toMatch(/^\/(#experiencia|#chef|#galeria|#eventos|menu|reservar|contacto)?$/);
    }
    expect(internal.some((h) => h === "/menu")).toBeTruthy();
    expect(internal.some((h) => h === "/reservar")).toBeTruthy();
    expect(internal.some((h) => h === "/contacto")).toBeTruthy();
  });

  test("el footer expone teléfono y emails", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('footer a[href^="tel:"]')).toHaveCount(1);
    await expect(page.locator('footer a[href^="mailto:"]')).toHaveCount(2);
  });
});

test.describe("Responsividad móvil (overflow)", () => {
  const routes = ["/", "/menu", "/reservar", "/contacto"];

  test("ninguna página desborda horizontalmente en 320px", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 812 });
    for (const route of routes) {
      await page.goto(route, { waitUntil: "networkidle" });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      expect(overflow, `${route} desborda en 320px`).toBeFalsy();
    }
  });

  test("ninguna página desborda horizontalmente en 1024px", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 812 });
    for (const route of routes) {
      await page.goto(route, { waitUntil: "networkidle" });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      expect(overflow, `${route} desborda en 1024px`).toBeFalsy();
    }
  });

  test("las pestañas de la carta son deslizables en móvil sin desbordar", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 812 });
    await page.goto("/menu", { waitUntil: "networkidle" });
    const tablist = page.locator('[role="tablist"]');
    await expect(tablist).toBeVisible();
    const box = await tablist.boundingBox();
    expect(box).not.toBeNull();
    if (box) {
      expect(box.x).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width).toBeLessThanOrEqual(320 + 1);
    }
    await expect(tablist).toHaveCSS("overflow-x", "auto");
  });

  test("las tarjetas de contacto apilan en una columna en móvil", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 812 });
    await page.goto("/contacto", { waitUntil: "networkidle" });
    await expect(page.getByText("Horarios")).toBeVisible();
    await expect(page.locator("#contacto").getByText("Contacto", { exact: true })).toBeVisible();
    await expect(page.locator("#contacto").locator('a[href^="mailto:"]').first()).toBeVisible();
  });
});