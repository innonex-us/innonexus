"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Set up smooth scrolling
    const smoothScroll = (content: Element, viewport: Element, smoothness: number) => {
      content = content || document.querySelector("#smooth-content")!
      viewport = viewport || document.querySelector("#smooth-wrapper")!
      smoothness = smoothness || 1

      gsap.set(viewport, { overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 })
      gsap.set(content, { overflow: "visible", width: "100%" })

      let currentY = 0
      let target = 0
      let resizeObserver: ResizeObserver

      const st = ScrollTrigger.create({
        scroller: viewport,
        invalidateOnRefresh: true,
        start: 0,
        end: () => `+=${content.scrollHeight}`,
        onRefresh: self => {
          const scrollHeight = content.scrollHeight
          const viewportHeight = viewport.clientHeight
          const scrollRange = scrollHeight - viewportHeight
          self.scroll(scrollRange)
        }
      })

      const updateScroll = () => {
        currentY += (target - currentY) * smoothness
        gsap.set(content, { y: -currentY })
        requestAnimationFrame(updateScroll)
      }

      const onResize = () => {
        const scrollHeight = content.scrollHeight
        const viewportHeight = viewport.clientHeight
        const scrollRange = scrollHeight - viewportHeight
        st.scroll(scrollRange)
      }

      ScrollTrigger.addEventListener("refresh", onResize)
      resizeObserver = new ResizeObserver(onResize)
      resizeObserver.observe(content)

      window.addEventListener("resize", onResize)

      const onWheel = (e: WheelEvent) => {
        e.preventDefault()
        target = Math.min(Math.max(target + e.deltaY, 0), st.end)
      }

      viewport.addEventListener("wheel", onWheel as EventListener)

      updateScroll()

      return () => {
        ScrollTrigger.removeEventListener("refresh", onResize)
        window.removeEventListener("resize", onResize)
        viewport.removeEventListener("wheel", onWheel as EventListener)
        resizeObserver.disconnect()
        st.kill()
      }
    }

    const cleanup = smoothScroll(
      document.querySelector("#smooth-content")!,
      document.querySelector("#smooth-wrapper")!,
      0.1
    )

    return () => {
      cleanup()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  )
}

