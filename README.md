# search-engine-autocomplete

This is a package for fetching major search engine's autocomplete / query recommendation.

Forked from [capablemonkey/google-autocomplete](https://github.com/capablemonkey/google-autocomplete),
rewrite with [typescript](https://www.typescriptlang.org/), using modern JS features, with zero dependencies.

## Getting Started

Install:

`npm i search-engine-autocomplete`

`yarn add search-engine-autocomplete`

`pnpm add search-engine-autocomplete`

`bun i search-engine-autocomplete`

And using with:

```typescript
import { completeGoogle } from "search-engine-autocomplete";
// if language not provided, default is "en-US"
const data = await completeGoogle("javascript round", "en-US");
```

`data`:

```JSON
{
  "query": "javascript round",
  "suggestions": [
    {
      "suggestion": "javascript round to two decimal places",
      "relativeRelevance": 0.96308,
      "relevance": 1252,
      "type": "QUERY"
    },
    {
      "suggestion": "javascript round to integer",
      "relativeRelevance": 0.96231,
      "relevance": 1251,
      "type": "QUERY"
    },
    {
      "suggestion": "javascript round to 2 decimal places",
      "relativeRelevance": 0.96154,
      "relevance": 1250,
      "type": "QUERY"
    },
    {
      "suggestion": "javascript round up",
      "relativeRelevance": 0.61538,
      "relevance": 800,
      "type": "QUERY"
    },
    {
      "suggestion": "javascript round to 1 decimal",
      "relativeRelevance": 0.53846,
      "relevance": 700,
      "type": "QUERY"
    },
    {
      "suggestion": "javascript round down",
      "relativeRelevance": 0.46231,
      "relevance": 601,
      "type": "QUERY"
    },
    {
      "suggestion": "javascript round function",
      "relativeRelevance": 0.46154,
      "relevance": 600,
      "type": "QUERY"
    },
    {
      "suggestion": "javascript round float",
      "relativeRelevance": 0.42846,
      "relevance": 557,
      "type": "QUERY"
    },
    {
      "suggestion": "javascript round to nearest 5",
      "relativeRelevance": 0.42769,
      "relevance": 556,
      "type": "QUERY"
    },
    {
      "suggestion": "javascript round up to whole number",
      "relativeRelevance": 0.42692,
      "relevance": 555,
      "type": "QUERY"
    },
    {
      "suggestion": "javascript round to 3 decimal places",
      "relativeRelevance": 0.42615,
      "relevance": 554,
      "type": "QUERY"
    },
    {
      "suggestion": "javascript round to 4 decimal places",
      "relativeRelevance": 0.42538,
      "relevance": 553,
      "type": "QUERY"
    },
    {
      "suggestion": "javascript round to nearest 10",
      "relativeRelevance": 0.42462,
      "relevance": 552,
      "type": "QUERY"
    },
    {
      "suggestion": "javascript round decimals",
      "relativeRelevance": 0.42385,
      "relevance": 551,
      "type": "QUERY"
    },
    {
      "suggestion": "javascript round float to 2 decimals",
      "relativeRelevance": 0.42308,
      "relevance": 550,
      "type": "QUERY"
    }
  ],
  "verbatimRelevance": 1300
}
```

Relevance is calculated by Google. Usually, if `relativeRelevance` is greater than 0.98 or 1, then the suggestion could be considered as an auto-complete result and will be automatically filled into the search box in Chrome.
