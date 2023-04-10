import React from "react";

const About = () => (
    <section id="about">
        <div class="container mt-4 pt-4">
            <h1 class="text-center">About Me</h1>
            <div class="row mt-4">
                <div class="col-lg-4">
                    <img src="images/about.jpeg" class= "imageAboutPage" alt=""></img>
                </div>

                <div class="col-lg-8">
                    <p> Ari is a person who exists
                        
                    </p>
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <ul>
                                <li>Name: Ari Traver</li>
                                <li>Age: 22</li>
                                <li>Occupation: working on that...</li>

                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul>
                                <li>Name: Ari Traver</li>
                                <li>Age: 22</li>
                                <li>Occupation: my dad keeps asking</li>

                            </ul>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <p> This sure is some text.
                            Have you ever seen this much text before? Probably. If you're reading this, hope you have a great day.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default About()