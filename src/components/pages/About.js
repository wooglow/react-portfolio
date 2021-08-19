import React from 'react';
import avatar from '../pages/images/avatar.png';

export default function About() {
  return (
    <section className="container">
      <h2 class="top-title">About Me</h2>
      <hr></hr>
      <div>
        <img src={avatar} width="144px" height="144px" alt="avatar" />

        <p>
          I started studying in USA in 2014, and transfered to University of California, San Diego in 2016. I was out of USA for two years in 2017 due to duty calls.
          Finally I am back to USA to finish my study in 2019, and found an interest of coding while I was studying STATA program on the curriculum.
          I figured out that coding is a new ocean I have to sail. After graduation BA degree in 2021, so I decided to study in Bootcamp.
        </p>
      </div>
    </section>
  )
}


