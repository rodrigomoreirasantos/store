const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imageUrl:
          "https://utfs.io/f/ba2c005c-6a54-400b-8fe0-efb49aea5201-hejlql.png",
      },
    });

    const mouses = [
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/c8ca4858-7f0f-433e-9cc8-936e2f1a151c-otetkp.png",
          "https://utfs.io/f/24bbf4b9-3ba2-4d17-9291-c8f2eb1ead92-x6ep3u.png",
          "https://utfs.io/f/ba717d9a-47e4-46ef-a353-5064e486c46d-thphc5.png",
          "https://utfs.io/f/bcf27822-8ceb-41d1-8ce5-c770cf852536-l4plt0.png",
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X Superlight",
        slug: "logitech-pro-x-superlight",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/ba2c005c-6a54-400b-8fe0-efb49aea5201-hejlql.png",
          "https://utfs.io/f/7b305da2-084e-4924-b56f-c73a7afde48e-40f9t2.png",
          "https://utfs.io/f/077e022e-95c1-4446-a676-dce9cee83103-qe5e93.png",
          "https://utfs.io/f/4a122c8b-11ea-4b43-84e9-8dfc15bb05fb-m98ja0.png",
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Logitech G305 Lightspeed",
        slug: "logitech-g305-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/763bf207-2dfb-4aa4-a633-61718a2c4d51-6pfvtn.png",
          "https://utfs.io/f/c108e7d0-da91-4db7-a6ae-0dec03a8db4c-t3609o.png",
          "https://utfs.io/f/2855b69d-345a-40c0-8f0f-65a6b62f7cbb-jk7x9f.png",
          "https://utfs.io/f/0a100cb9-6208-4f25-85d5-20dd83a3cf7d-2ti76m.png",
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Hyperx Pulsefire Dart",
        slug: "hyperx-pulsefire-dart",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/12eaba65-1d8c-4d57-a9e6-52dfb1e74697-1xd5uq.png",
          "https://utfs.io/f/20f33895-c218-4fbb-ba96-a25456dece06-7s04kc.png",
          "https://utfs.io/f/ba2c005c-6a54-400b-8fe0-efb49aea5201-hejlql.png",
          "https://utfs.io/f/f649d3b3-d8d5-4ae0-b907-555b2c8a1d58-cmorrv.png",
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Razer Deathadder V2 Pro",
        slug: "razer-deathadder-v2-pro",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/78894238-3978-41f1-aca4-b4d212781462-5jk68j.png",
          "https://utfs.io/f/a5dc98d8-e3c9-458b-97a4-67594e735667-m16w6s.png",
          "https://utfs.io/f/234fd685-40fa-43d8-b394-94a6b0e1ecb1-wiafu3.png",
          "https://utfs.io/f/da2d1a28-1799-41b4-902a-22d001c88f19-g0npvu.png",
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Keyboards",
        slug: "keyboards",
        imageUrl:
          "https://utfs.io/f/cef25187-51d4-4fb8-a7c7-92474d8fc07e-y9wlrz.png",
      },
    });

    const keyboards = [
      {
        name: "Logitech MX Keys Mini",
        slug: "logitech-mx-keys-mini",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/cef25187-51d4-4fb8-a7c7-92474d8fc07e-y9wlrz.png",
          "https://utfs.io/f/6010aa47-0155-40bb-9b37-e859d7b8aeb0-ausijr.png",
          "https://utfs.io/f/0c421d22-002c-4907-afe6-582d207493be-otkh7q.png",
          "https://utfs.io/f/8f959fce-38e0-4cb0-b335-219bcc6d495e-w8rm3f.png",
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech MX Keys S",
        slug: "logitech-mx-keys-s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/dfb0e9cc-749a-4609-9b0f-02837529ddb3-m9yl8y.png",
          "https://utfs.io/f/ae0dfb13-a9b8-4806-86d4-4d6911ca9f96-du02k1.png",
          "https://utfs.io/f/5f6cd025-3127-48b2-80ce-84234e4c95d3-5e1jv4.png",
          "https://utfs.io/f/f1231a8e-25c2-4511-b0e2-a2883b08f479-31wytt.png",
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/427049c3-9b77-4968-8de6-253d9fc2ba30-u67teu.png",
          "https://utfs.io/f/be05ad50-63db-489a-a19e-42d474b8227a-jowbfg.png",
          "https://utfs.io/f/be05ad50-63db-489a-a19e-42d474b8227a-jowbfg.png",
          "https://utfs.io/f/da64efca-b399-49e4-aa54-b1d98b2257d6-qeno4j.png",
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/848f0842-5345-4320-acaf-c693d3680038-tbfuuf.png",
          "https://utfs.io/f/f915b150-6978-44fb-95a5-5aa301948b44-mk1c1y.png",
          "https://utfs.io/f/3079d117-7f5e-441d-891c-b81f1ef67d62-fsmt9h.png",
          "https://utfs.io/f/7c6635a3-588c-41af-ac2b-75859401401f-918ah0.png",
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Epomaker TH80",
        slug: "epomaker-th80",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/6bcfd697-047f-4893-9aa2-5e0c6767789e-4b9e6c.png",
          "https://utfs.io/f/cef25187-51d4-4fb8-a7c7-92474d8fc07e-y9wlrz.png",
          "https://utfs.io/f/3e5105c0-1425-4f24-8ff3-13957641d100-kmao8t.png",
          "https://utfs.io/f/d5ad0728-37ae-4731-8488-00d4ac158b7f-ph9bb6.png",
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Redragon Gamer Ashe",
        slug: "redragon-gamer-ashe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/fde09309-9b0e-4a29-b2e3-6a635997fb13-b14pyz.png",
          "https://utfs.io/f/df3ce3f0-cdc6-4015-b0c4-23cd55f7e612-7jaqka.png",
          "https://utfs.io/f/084f0557-dd16-4ae6-9026-52ebf73c85a5-41gr5l.png",
          "https://utfs.io/f/97aa9d7c-4c54-4b20-8c42-2d7fb4b5ef43-jmrqw.png",
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Headphones",
        slug: "headphones",
        imageUrl:
          "https://utfs.io/f/ccba27c2-077a-4ed2-9388-b41eef13e3cd-cuwa00.png",
      },
    });

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/ccba27c2-077a-4ed2-9388-b41eef13e3cd-cuwa00.png",
          "https://utfs.io/f/f3652ee4-72b6-4d87-975e-74019bb5ef1e-guymjj.png",
          "https://utfs.io/f/e016d081-48ef-424b-b414-29443db64f91-ogaiw2.png",
          "https://utfs.io/f/63462f1b-7d39-4ca9-9ef9-92a32ab8c6f6-59kdnh.png",
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X 2 Lightspeed",
        slug: "logitech-pro-x-2-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/de27713e-2253-4ab4-9a12-32ab77913491-cnu60s.png",
          "https://utfs.io/f/50e19b9b-52a8-4874-b9bb-6eb8ece74b63-x8xsfx.png",
          "https://utfs.io/f/d0139f61-92f9-4f28-b64a-c11b7c72e686-h72n42.png",
          "https://utfs.io/f/4018e4bb-e7e3-4a20-8fc2-235b81622cd5-3e0zb3.png",
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Astro A30",
        slug: "logitech-astro-a30",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/7590d5f0-7b7e-4cec-bad3-7d44065e85ad-3us24m.png",
          "https://utfs.io/f/ce8c1f19-6de7-4907-ac34-10a6712dc477-4l6gkb.png",
          "https://utfs.io/f/a4e192a3-f912-43a9-ba74-015e6e6e80b3-d14z98.png",
          "https://utfs.io/f/2441f500-b11e-4f19-bfc3-c34ad5c89cd8-lh3hy5.png",
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Logitech Zone Wired Earbuds",
        slug: "logitech-zone-wired-earbuds",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/876940b0-026a-44c3-9dd0-b58faa4d5400-l6h1vy.png",
          "https://utfs.io/f/1780083e-2b0d-4294-a44b-0e1747a0f6dc-cth6ct.png",
          "https://utfs.io/f/8afe4b0a-58da-4367-8668-97d25542a0d9-4ghato.png",
          "https://utfs.io/f/9a22e19e-2eb1-4b44-ae24-31e3d078feee-3wikph.png",
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Hyperx Cloud Stinger 2",
        slug: "hyperx-cloud-stinger-2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/bbfc7084-b394-4f85-a6d6-f70f8521a5df-oxvmyz.png",
          "https://utfs.io/f/40c8d604-bd9c-4ffe-b506-4cf37216aeed-ghx4a2.png",
          "https://utfs.io/f/47e85b66-2dc2-4fce-a010-ecc38ab6c6e7-81yll5.png",
          "https://utfs.io/f/de461592-bc91-464a-b68f-f529a0ccfe9c-dzx3s.png",
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Razer Kraken X",
        slug: "razer-kraken-x",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/f430c118-1e72-4584-a5cd-98d1fc3fc6cd-pbckc3.png",
          "https://utfs.io/f/5c073867-2247-4090-acb2-7cfc4b18e60d-xocfv8.png",
          "https://utfs.io/f/c55221f5-8782-4ce5-9eee-8e24c8166343-szrqkr.png",
          "https://utfs.io/f/93b22b12-92cf-4b05-adc6-6c280f0201df-kmrv1m.png",
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: "Mousepads",
        slug: "mousepads",
        imageUrl:
          "https://utfs.io/f/fb99e590-5cd1-4aba-8cb8-8b425aaff4fa-z4kbli.png",
      },
    });

    const mousepads = [
      {
        name: "Logitech Powerplay",
        slug: "logitech-powerplay",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/33121a38-6ba1-45f9-8637-a18a5fd83a21-z4kbli.png",
          "https://utfs.io/f/40ae8f4e-c410-466f-8a7f-0ff1d7e9b814-x3442a.png",
          "https://utfs.io/f/1641a291-5119-448d-a9c3-8acea2b7a821-ti1f7x.png",
          "https://utfs.io/f/617a3302-751f-4a37-989e-f0d16fd5fe65-l22wj0.png",
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Desk Mat",
        slug: "logitech-desk-mat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/d735162e-b31b-4d8a-866f-c4a033e77e37-n9raei.png",
          "https://utfs.io/f/088ca574-d3ef-4e1b-977b-08662ab7ba66-1nss0n.png",
          "https://utfs.io/f/f1a29556-c699-4c30-8041-70fa50594a26-qlcufs.png",
          "https://utfs.io/f/a053bb3c-1aa2-4515-a882-e97d4ac48741-ji7547.png",
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Logitech G740",
        slug: "logitech-g740",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/5c88a8a2-2a6d-46ae-91e4-76f4c7554330-culmza.png",
          "https://utfs.io/f/9179298a-5c6a-41b4-8205-b94172ab75b9-gv99k9.png",
          "https://utfs.io/f/63278a5c-0e0f-413a-941c-8549f6fb7a74-ofzvvc.png",
          "https://utfs.io/f/48f04c80-0e08-42ae-a53c-806b2ae045ab-59v0o7.png",
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Mousepad Studio Series",
        slug: "logitech-mousepad-studio-series",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/25f1384b-8c48-432f-940b-1ae9e5ad77f1-k45quc.png",
          "https://utfs.io/f/1323ec1d-bfce-4cb2-9eb8-a35003b669a6-dcr81v.png",
          "https://utfs.io/f/b3263ee2-6bb1-4cf0-806a-9888a9d38946-6lcp9e.png",
          "https://utfs.io/f/c76c33f9-8d09-429c-8fc7-e1a7ca444cd3-61tj3.png",
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Force One Skyhawk Dark",
        slug: "force-one-skyhawk-dark",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/5a39af70-a3d0-4bf0-8fa1-08d3509bb964-x7k2s6.png",
          "https://utfs.io/f/023775a4-d8d4-4bbd-9d06-a89c281f2d01-zcern9.png",
          "https://utfs.io/f/1d1cfa0c-6cf9-4232-a7a3-45def3cfc3ca-xjulgs.png",
          "https://utfs.io/f/2c11ac75-eb3b-4122-9960-1e4022fdaeba-vezwlp.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Force One Skyhawk Snow",
        slug: "force-one-skyhawk-snow",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/a390f36f-9826-4b85-845f-87d989cb8b54-x7tx5v.png",
          "https://utfs.io/f/d3c2967f-2e2e-46a5-b671-f08389e5bdde-zcom0y.png",
          "https://utfs.io/f/ca0f4081-dcd8-4c43-85b6-0d5e6369ea78-xjkr33.png",
          "https://utfs.io/f/031e42ae-7058-494b-893b-bf7dd465d32f-veq280.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: mousepads,
    });

    const monitorsCategory = await prisma.category.create({
      data: {
        name: "Monitors",
        slug: "monitors",
        imageUrl:
          "https://utfs.io/f/e54d2518-04ad-4294-827b-22ef50ccf10b-n2ha4u.png",
      },
    });

    const monitors = [
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/e54d2518-04ad-4294-827b-22ef50ccf10b-n2ha4u.png",
          "https://utfs.io/f/88000402-eefc-4250-98b8-28418840621b-te7tat.png",
          "https://utfs.io/f/ca0f4081-dcd8-4c43-85b6-0d5e6369ea78-xjkr33.png",
          "https://utfs.io/f/ddd08296-4ae2-4c24-8b8f-5995c6fed799-owwhm1.png",
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Dell P2422H",
        slug: "dell-p2422h",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/70b18460-df2d-4550-a844-d63d9fff4b3d-rax9q4.png",
          "https://utfs.io/f/14350ee4-042e-4fe3-b4bc-1e25488660a5-w5lwxn.png",
          "https://utfs.io/f/3d27f338-efbf-4116-82d0-8a4937590049-y0thty.png",
          "https://utfs.io/f/59bbcf3a-bab1-4a9f-b081-364b69644728-t64umf.png",
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Dell P2723QE",
        slug: "dell-p2723qe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/a7bff8b3-a2e7-4b48-8f3c-004dcac84db7-60cp0c.png",
          "https://utfs.io/f/e5f32852-af04-4e0c-a3c0-1d2853691c9b-2cn6it.png",
          "https://utfs.io/f/2fa8ed48-7070-499a-a662-da53acf03eb2-apn21y.png",
          "https://utfs.io/f/6a6fc552-10c6-4386-b936-fee162972948-j2mxl3.png",
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3422DWG",
        slug: "dell-s3422dwg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/82f51449-dbb1-454e-aff3-39e1f03d7a9c-1wl9gu.png",
          "https://utfs.io/f/5dec17da-e114-4f12-9a36-58748f355ea2-qu5bvz.png",
          "https://utfs.io/f/3734b584-1ceb-43df-9cfb-041474439c9b-j9eno0.png",
          "https://utfs.io/f/793f9bc7-df0b-418d-8537-3548475371ca-5o5er5.png",
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3222DGM",
        slug: "dell-s3222dgm",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/9ce6feee-1b15-4377-9772-64696157ba92-n2ha4u.png",
          "https://utfs.io/f/9ce6feee-1b15-4377-9772-64696157ba92-n2ha4u.png",
          "https://utfs.io/f/9ce6feee-1b15-4377-9772-64696157ba92-n2ha4u.png",
          "https://utfs.io/f/9ce6feee-1b15-4377-9772-64696157ba92-n2ha4u.png",
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell AW2524HF",
        slug: "dell-aw2524hf",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/9ce6feee-1b15-4377-9772-64696157ba92-n2ha4u.png",
          "https://utfs.io/f/9ce6feee-1b15-4377-9772-64696157ba92-n2ha4u.png",
          "https://utfs.io/f/9ce6feee-1b15-4377-9772-64696157ba92-n2ha4u.png",
          "https://utfs.io/f/9ce6feee-1b15-4377-9772-64696157ba92-n2ha4u.png",
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: monitors,
    });

    const speakersCategory = await prisma.category.create({
      data: {
        name: "Speakers",
        slug: "speakers",
        imageUrl:
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
      },
    });

    const speakers = [
      {
        name: "Logitech Surround Sound Z607",
        slug: "logitech-surround-sound-z607",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Dock",
        slug: "logitech-dock",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Sony SA-Z9R Speakers",
        slug: "sony-sa-z9r-speakers",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Sony XB43 Extra Bass",
        slug: "sony-xb43-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony XB23 Extra Bass",
        slug: "sony-xb23-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony HT-S200F Soundbar",
        slug: "sony-ht-s200f-soundbar",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
          "https://utfs.io/f/6b9b47cb-bb8e-4512-a79c-6e1be5a3d0e4-ccd7uf.png",
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: speakers,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
