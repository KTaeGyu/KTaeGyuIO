import React from "react"
import Device from "../icons/Device.inline.svg"
import Idea from "../icons/Idea.inline.svg"
import Rocket from "../icons/Rocket.inline.svg"
import Timer from "../icons/Timer.inline.svg"

interface feature {
  icon: JSX.Element
  title: string
  content: string
}

const features: feature[] = [
  {
    icon: <Timer />,
    title: "Fast",
    content: "Fast load times and lag free interaction, my highest priority.",
  },
  {
    icon: <Device />,
    title: "Responsive",
    content: "My layouts will work on any device, big or small.",
  },
  {
    icon: <Idea />,
    title: "Intutive",
    content: "Strong preference for easy to use, intuitive UX/UI.",
  },
  {
    icon: <Rocket />,
    title: "Dynamic",
    content:
      "Websites don't have to be static, I love making pages come to life.",
  },
  {
    icon: <Rocket />,
    title: "Dynamic",
    content:
      "Websites don't have to be static, I love making pages come to life.",
  },
]

export type { feature }
export default features
