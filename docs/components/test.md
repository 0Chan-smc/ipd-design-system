---
sidebar_position: 1
---

# Button 컴포넌트

export const Example = () => {
const url = 'https://main--6620de02a5e20036aa48cf04.chromatic.com/?path=/docs/example-button--docs';

return (

<iframe
      title="Storybook Example"
      allowFullScreen
      src={url}
      frameBorder="0"
      width="800"
      height="800"
></iframe>
 );
}

사용 예시: <button class="tw-smc-button"></button>

```mdx
<Example story="name_of_storybook_story" />
```

<Example />

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
