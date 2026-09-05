import type { OpenNextConfig } from "@opennextjs/cloudflare";

const config: OpenNextConfig = {
  output: "runtime",
  staticCache: {
    allowQuery: false,
    allowedPatterns: ["/(.*)"],
    cachePrivacy: "public",
    browserTTL: 3600,
  },
  functionDefaults: {
    runtime: {
      type: "workerd",
      bindings: {
        KV_NAMESPACE: { type: "kv", binding: "PROVENANCE_KV" },
      },
    },
  },
};

export default config;
