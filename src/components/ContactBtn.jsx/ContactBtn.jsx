import React from 'react'
import { Link } from "react-router-dom";
import "./contactBtn.scss"

export default function ContactBtn() {
  return (
    <div>   <Link className="fixed-contact" to="../Contact">
    contact{" "}
  </Link></div>
  )
}
