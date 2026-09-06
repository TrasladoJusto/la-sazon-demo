import { test, expect } from "@playwright/test";

const navLinks = [
  { label: "Experiencia", hash: "experiencia" },
  { label: "Menú", hash: "menu" },
  { label: "Chef", hash: "chef" },
  { label: "Galería", hash: "galeria" },
  { label: "Eventos", hash: "eventos" },
  { label: "Contacto", hash: "contacto" },
];

test.describe("AURA — Home y Hero (one-page)", () => {
  test("la home carga y muestra el Hero correctamente", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/AURA/);
    await expect(page.locator('h1', { hasText: "AURA" })).toBeVisible();
  });

  test("todas las secciones principales existen en la home", async ({ page }) => {
    await page.goto("/");
    for (const id of ["experiencia", "menu", "chef", "galeria", "reservas", "eventos", "contacto"]) {
      await expect(page.locator(`#${id}`)).toBeVisible();
    }
  });

  test("los CTAs del Hero llevan a anclas de la home", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('.relative.z-10 a[href="/#reservas"]')).toBeVisible();
    await expect(page.locator('.relative.z-10 a[href="/#experiencia"]')).toBeVisible();
  });
});

test.describe("Navegación por anclas (Desktop)", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  for (const { label, hash } of navLinks) {
    test(`el botón "${label}" lleva a #${hash}`, async ({ page }) => {
      await page.goto("/");
      await page.locator('header a', { hasText: label }).first().click();
      await expect(page).toHaveURL(new RegExp(`/\\#${hash}$`));
      // La sección destino queda visible
      await expect(page.locator(`#${hash}`)).toBeInViewport({ timeout: 10000 });
    });
  }

  test("el CTA Reservar de la barra lleva a #reservas", async ({ page }) => {
    await page.goto("/");
    await page.locator('header a', { hasText: "Reservar" }).first().click();
    await expect(page).toHaveURL(/\/\#reservas$/);
    await expect(page.locator("#reservas")).toBeInViewport({ timeout: 10000 });
  });

  test("scrollspy resalta la sección activa mientras se hace scroll", async ({ page }) => {
    await page.goto("/");
    await page.locator("#menu").scrollIntoViewIfNeeded();
    await expect(page.locator('header a[href="#menu"]').first()).toHaveAttribute("aria-current", "true", { timeout: 10000 });
    await page.locator("#contacto").scrollIntoViewIfNeeded();
    await expect(page.locator('header a[href="#contacto"]').first()).toHaveAttribute("aria-current", "true", { timeout: 10000 });
  });
});

test.describe("Formulario de reserva en la home", () => {
  test("valida campos obligatorios vacíos", async ({ page }) => {
    await page.goto("/");
    await page.locator("#reservas").scrollIntoViewIfNeeded();
    await page.locator('#reservas button[type="submit"]').click();
    await expect(page.locator('#reservas [role="alert"]').first()).toBeVisible();
  });

  test("envía la reserva completa con datos válidos", async ({ page }) => {
    await page.goto("/");
    await page.locator("#reservas").scrollIntoViewIfNeeded();
    await page.locator("#nombre").fill("Cliente Demo");
    await page.locator("#email").fill("demo@example.com");
    await page.locator("#telefono").fill("+34600111222");
    await page.locator("#fecha").fill("2026-12-24");
    await page.locator("#hora").selectOption("21:00");
    await page.locator("#comensales").selectOption("2");
    await page.locator("#ocasion").selectOption("Cena romántica");
    await page.locator("#preferencias").fill("Mesa tranquila");
    await page.locator('#reservas button[type="submit"]').click();
    await expect(page.locator('#reservas button[type="submit"]')).toContainText("RESERVA CONFIRMADA", { timeout: 10000 });
  });
});

test.describe("Formulario de contacto en la home", () => {
  test("valida campos obligatorios vacíos", async ({ page }) => {
    await page.goto("/");
    await page.locator("#contacto").scrollIntoViewIfNeeded();
    await page.locator('#contacto button[type="submit"]').click();
    await expect(page.locator('#contacto [role="alert"]').first()).toBeVisible();
  });

  test("envía el mensaje con datos válidos", async ({ page }) => {
    await page.goto("/");
    await page.locator("#contacto").scrollIntoViewIfNeeded();
    await page.locator("#c-nombre").fill("Cliente Demo");
    await page.locator("#c-email").fill("demo@example.com");
    await page.locator("#c-asunto").fill("Consulta demo");
    await page.locator("#c-mensaje").fill("Me gustaría información sobre el menú degustación de temporada.");
    await page.locator('#contacto button[type="submit"]').click();
    await expect(page.locator('#contacto button[type="submit"]')).toContainText("Mensaje Enviado", { timeout: 10000 });
  });

  test("teléfono, email y mapa son enlaces accionables", async ({ page }) => {
    await page.goto("/");
    await page.locator("#contacto").scrollIntoViewIfNeeded();
    await expect(page.locator('#contacto a[href^="mailto:"]').first()).toHaveAttribute("href", /@aura-restaurant\.com/);
    await expect(page.locator('#contacto a[href^="tel:"]').first()).toHaveAttribute("href", /tel:\+/);
    await expect(page.locator('#contacto a[href*="maps.google.com"]').first()).toHaveAttribute("target", "_blank");
  });
});

test.describe("Carrusel del menú", () => {
  test("muestra platos y el botón siguiente hace scroll", async ({ page }) => {
    await page.goto("/");
    await page.locator("#menu").scrollIntoViewIfNeeded();
    const cards = page.locator('#menu [data-card=""], #menu [data-card]');
    await expect(cards.first()).toBeVisible();
    const before = await cards.first().evaluate((el) => el.getBoundingClientRect().x);
    await page.getByRole("button", { name: "Siguientes platos" }).click();
    await page.waitForTimeout(800);
    const after = await cards.first().evaluate((el) => el.getBoundingClientRect().x);
    expect(after).toBeLessThan(before);
  });

  test("los botones prev/next reflejan el estado del carrusel", async ({ page }) => {
    await page.goto("/");
    await page.locator("#menu").scrollIntoViewIfNeeded();
    await expect(page.getByRole("button", { name: "Platos anteriores" })).toBeDisabled();
    await page.getByRole("button", { name: "Siguientes platos" }).click();
  });
});

test.describe("Galería en la home", () => {
  test("la galería muestra imágenes reales", async ({ page }) => {
    await page.goto("/");
    await page.locator("#galeria").scrollIntoViewIfNeeded();
    const imgs = page.locator("#galeria img");
    await expect(imgs.first()).toBeVisible();
    const count = await imgs.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });
});

test.describe("Eventos en la home", () => {
  test("las tarjetas de eventos tienen datos (capacidad) y CTA a contacto", async ({ page }) => {
    await page.goto("/");
    await page.locator("#eventos").scrollIntoViewIfNeeded();
    await expect(page.locator('#eventos a[href="#contacto"]').first()).toBeVisible();
    await expect(page.locator("#eventos")).toContainText("personas");
  });
});

test.describe("Redirecciones one-page", () => {
  const redirects = [
    ["/menu", "#menu"],
    ["/chef", "#chef"],
    ["/experiencia", "#experiencia"],
    ["/galeria", "#galeria"],
    ["/eventos", "#eventos"],
    ["/reservar", "#reservas"],
    ["/contacto", "#contacto"],
    ["/reservas", "#reservas"],
  ];

  for (const [route, hash] of redirects) {
    test(`la ruta ${route} redirige a /${hash}`, async ({ page }) => {
      await page.goto(route);
      await expect(page).toHaveURL(new RegExp(`/\\${hash}$`));
      await expect(page.locator('.relative.z-10 a[href="/#reservas"]')).toBeVisible();
    });
  }

  test("las rutas hijas responden 307 en la API", async ({ page }) => {
    for (const route of ["/menu", "/chef", "/experiencia", "/galeria", "/eventos", "/reservar", "/contacto", "/reservas"]) {
      const res = await page.request.get(route, { maxRedirects: 0 });
      expect(res.status(), `${route} debería ser 307`).toBe(307);
    }
  });
});

test.describe("API endpoints", () => {
  test("POST /api/reservations rechaza datos inválidos con 400", async ({ page }) => {
    const res = await page.request.post("/api/reservations", {
      data: { name: "x", email: "no-email", date: "" },
    });
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
    const res = await page.request.post("/api/contact", {
      data: { name: "x", email: "no-email", message: "corto" },
    });
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

test.describe("Menú Hamburguesa (Mobile)", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("el botón hamburguesa abre y cierra el menú móvil", async ({ page }) => {
    await page.goto("/");
    const burger = page.locator('header button[aria-label="Abrir menú"]');
    await expect(burger).toBeVisible();

    await burger.click();
    await expect(page.locator('header a', { hasText: "Experiencia" }).last()).toBeVisible();

    await page.locator('header button[aria-label="Cerrar menú"]').click();
    await page.waitForTimeout(400);
    await expect(page.locator('header a', { hasText: "Experiencia" }).last()).toBeHidden();
  });

  test("navegar a un ancla desde el menú móvil lo cierra", async ({ page }) => {
    await page.goto("/");
    await page.locator('header button[aria-label="Abrir menú"]').click();
    await page.locator('header a', { hasText: "Galería" }).last().click();
    await expect(page).toHaveURL(/\/\#galeria$/);
    await expect(page.locator('header a', { hasText: "Experiencia" }).last()).toBeHidden({ timeout: 10000 });
  });

  test("el CTA Reservar del menú móvil lleva a #reservas", async ({ page }) => {
    await page.goto("/");
    await page.locator('header button[aria-label="Abrir menú"]').click();
    await page.locator('header a', { hasText: "Reservar Mesa" }).click();
    await expect(page).toHaveURL(/\/\#reservas$/);
  });
});

test.describe("Footer", () => {
  test("los enlaces del footer apuntan a anclas one-page", async ({ page }) => {
    await page.goto("/");
    const anchorHrefs = await page.locator("footer a[href^='/#']").evaluateAll((els) => els.map((e) => e.getAttribute("href")));
    expect(anchorHrefs.length).toBeGreaterThanOrEqual(7);
    for (const h of anchorHrefs) {
      expect(h).toMatch(/^\/(#experiencia|#menu|#chef|#galeria|#eventos|#reservas|#contacto)$/);
    }
  });

  test("el footer expone teléfono y emails", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('footer a[href^="tel:"]')).toHaveCount(1);
    await expect(page.locator('footer a[href^="mailto:"]')).toHaveCount(2);
  });
});