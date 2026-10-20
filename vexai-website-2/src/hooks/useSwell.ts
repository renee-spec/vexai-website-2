import { useCallback } from 'react'

/**
 * Positions the radial hover fill under the cursor.
 * Works for `.btn` and `.card` elements that contain a `.fill`/`.swell` layer.
 */
export function useSwell<T extends HTMLElement>() {
  return useCallback((e: React.MouseEvent<T>) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
    el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
  }, [])
}
