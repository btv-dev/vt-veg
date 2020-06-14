---
permalink: false
---

Install eleventy

```bash
npm i @11ty/eleventy
```

[Permalink False](https://www.11ty.dev/docs/permalinks/#permalink-false)


## Filter / Search

```js
data.filter(rest => {
    return rest.name.toLowerCase().includes(term.toLowerCase()) || 
           rest.summary.toLowerCase().includes(term.toLowerCase())
})
```

## Nunjucks If statement

[Nunjucks Docs - If](https://mozilla.github.io/nunjucks/templating.html#if)
