import { TextSplitter } from "../../utils/textSplitter";
import gsap from "gsap";
import { lenis } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (lenis) {
    lenis.start();
  }
  const mainEl = document.getElementsByTagName("main")[0];
  if (mainEl) {
    mainEl.classList.add("main-active");
  }
  gsap.to("body", {
    backgroundColor: "#030712",
    duration: 0.5,
    delay: 0.2,
  });

  try {
    const selectors = [".landing-info h3", ".landing-intro h2", ".landing-intro h1"];
    const elements = selectors.flatMap(selector => Array.from(document.querySelectorAll(selector)));
    if (elements.length > 0) {
      const landingText = new TextSplitter(elements, {
        type: "chars,lines",
        linesClass: "split-line",
      });
      if (landingText.chars && landingText.chars.length > 0) {
        gsap.fromTo(
          landingText.chars,
          { opacity: 0, y: 80, filter: "blur(5px)" },
          {
            opacity: 1,
            duration: 1.2,
            filter: "blur(0px)",
            ease: "power3.inOut",
            y: 0,
            stagger: 0.025,
            delay: 0.3,
          }
        );
      }
    }
  } catch (e) {
    console.warn("initialFX landingText error:", e);
  }

  const TextProps = { type: "chars,lines", linesClass: "split-h2" };

  try {
    const elH21 = document.querySelector(".landing-h2-1");
    const elH22 = document.querySelector(".landing-h2-2");
    if (elH21) {
      const split1 = new TextSplitter(".landing-h2-1", TextProps);
      if (split1.chars && split1.chars.length > 0) {
        gsap.fromTo(
          split1.chars,
          { opacity: 0, y: 45, filter: "blur(4px)" },
          {
            opacity: 1,
            duration: 0.9,
            filter: "blur(0px)",
            ease: "power3.out",
            y: 0,
            stagger: 0.02,
            delay: 0.35,
          }
        );
      }
    }
    if (elH22) {
      const split2 = new TextSplitter(".landing-h2-2", TextProps);
      if (split2.chars && split2.chars.length > 0) {
        gsap.fromTo(
          split2.chars,
          { opacity: 0, y: 45, filter: "blur(4px)" },
          {
            opacity: 1,
            duration: 0.9,
            filter: "blur(0px)",
            ease: "power3.out",
            y: 0,
            stagger: 0.02,
            delay: 0.5,
          }
        );
      }
    }
  } catch (e) {
    console.warn("initialFX landing-h2 error:", e);
  }

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.1,
    }
  );
}

export function LoopText(Text1: TextSplitter, Text2: TextSplitter) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
