# Use components in MDX

Add them to MDXProvider shorcodes list in layout.

```jsx
import { MDXProvider } from "@mdx-js/react"
import { Hint } from "../../components/hint"
import { TrackedLink } from "../../components/trackedLink"

const shortcodes = { Hint, TrackedLink }
```
