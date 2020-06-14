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

## References

[Nunjucks Docs - If](https://mozilla.github.io/nunjucks/templating.html#if)
[11ty - Inline Minified CSS](https://www.11ty.dev/docs/quicktips/inline-css/)
