import React from "react"

const Contact = () => (
    <section id="contact">
        <div class="container mt-3 contactContent">
            <h1 class="text-center">Contact Me</h1>

            <div class="row mt-4">
                <div class="col-lg-6">
                    <div style="max-width:100%;overflow:hidden;color:red;width:500px;height:500px;">
                        <div id="embedmap-canvas" style="height:100%; width:100%;max-width:100%;">
                            <iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=new+york&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                            </iframe>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <form>
                        <input type="text" class="form-control form-control-lg" placeholder="Name"> </input>
                        <input type="email" class="form-control mt-3" placeholder="Email"> </input>
                        <input type="text" class="form-control mt-3" placeholder="Subject"> </input>
                        <div class="mb-3 mt-3">
                            <textarea class="form-control" rows="5" id="comment" name="text" placeholder="Project Details"></textarea>
                        </div>
                    </form>
                    <button type="button" class="btn btn-success mt-3">Contact Me</button>
                </div>
            </div>
        </div>
    </section>
)


export default Contact()
