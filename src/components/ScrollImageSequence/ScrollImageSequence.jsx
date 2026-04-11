import { useRef, useState, useCallback, useEffect } from 'react'
import './ScrollImageSequence.css'

/**
 * ScrollImageSequence
 *
 * Props:
 *   images      – array of image URLs (JPG/PNG/etc), max 65 frames
 *   frameHeight – pixel height of the visible viewport (default 600)
 */
const ScrollImageSequence = ({
  images = [],
  frameHeight = 600,
}) => {
  const scrollRef  = useRef(null)
  const frameRef   = useRef(0)           // avoids stale-closure re-renders
  const [currentFrame, setCurrentFrame] = useState(0)
  const [loaded, setLoaded]             = useState(false)

  const frameCount = Math.min(images.length, 65)

  // Pre-load all frames so there's no flicker during scrubbing
  useEffect(() => {
    if (frameCount === 0) return
    setLoaded(false)
    let resolved = 0

    const imgs = images.slice(0, frameCount).map((src) => {
      const img = new Image()
      img.onload  = () => { resolved++; if (resolved === frameCount) setLoaded(true) }
      img.onerror = () => { resolved++; if (resolved === frameCount) setLoaded(true) }
      img.src = src
      return img
    })

    return () => { imgs.forEach((img) => { img.onload = null; img.onerror = null }) }
  }, [images, frameCount])

  // Map scroll position → frame index with no throttle (instant)
  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el || frameCount === 0) return

    const scrollTop  = el.scrollTop
    const maxScroll  = el.scrollHeight - el.clientHeight
    const progress   = maxScroll > 0 ? scrollTop / maxScroll : 0
    const newFrame   = Math.min(Math.floor(progress * frameCount), frameCount - 1)

    if (newFrame !== frameRef.current) {
      frameRef.current = newFrame
      setCurrentFrame(newFrame)
    }
  }, [frameCount])

  if (frameCount === 0) {
    return (
      <div className="sseq-empty">
        <span>No images provided — pass an array of image URLs via the <code>images</code> prop.</span>
      </div>
    )
  }

  return (
    <div
      ref={scrollRef}
      className="sseq-container"
      style={{ height: frameHeight }}
      onScroll={handleScroll}
    >
      {/* Tall track: one frame-height per frame gives the scroll distance */}
      <div
        className="sseq-track"
        style={{ height: frameHeight * frameCount }}
      >
        {/* Sticky panel stays pinned to the top while the track scrolls beneath */}
        <div
          className="sseq-sticky"
          style={{ height: frameHeight }}
        >
          {!loaded && (
            <div className="sseq-loader">
              <div className="sseq-spinner" />
              <span>Loading frames…</span>
            </div>
          )}

          <img
            key={currentFrame}              // forces a repaint if src is same size
            src={images[currentFrame]}
            alt={`Frame ${currentFrame + 1} of ${frameCount}`}
            className={`sseq-image${loaded ? ' sseq-image--visible' : ''}`}
            draggable={false}
          />

          {/* HUD: frame counter + progress bar */}
          <div className="sseq-hud">
            <div
              className="sseq-progress-bar"
              style={{ width: `${((currentFrame + 1) / frameCount) * 100}%` }}
            />
            <span className="sseq-counter">
              {currentFrame + 1} / {frameCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollImageSequence
