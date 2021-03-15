import { toTheme } from '@theme-ui/typography'
import wp2016 from 'typography-theme-wordpress-2016'
import merge from 'deepmerge'

const overrides = {}
export default merge(toTheme(wp2016), overrides)