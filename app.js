(
    function () {

        function color() {
            let color = Math.round(Math.random() * 0xffffff).toString(16)
            return color.padStart(6, "0")

        }
        let wrapper = document.querySelector(".wrapper")
        for (let count = 1; count <= 30; count++) {
            const box = document.createElement("div")
            const colorName = document.createElement("h3")
            box.classList.add("box")
            let JavaColor = "#" + color()
            box.style.backgroundColor = JavaColor;
            colorName.textContent = JavaColor
            box.appendChild(colorName)
            wrapper.appendChild(box)
        }
        document.querySelectorAll(".wrapper .box").forEach((box) => {
            box.addEventListener("mouseover", () => {
                let color = box.style.backgroundColor
                document.querySelector(".container").style.backgroundColor = color
            })
            let synth = speechSynthesis;
            function msg(data) {
                text = data ? "color code copied to your clipboard" : "something went wrong";
                let speaker = new SpeechSynthesisUtterance(text)
                speaker.volume = 0.6
                synth.speak(speaker)
            }
            box.addEventListener("mouseup", (e) => {
                let text = e.currentTarget.textContent
                let result = navigator.clipboard.writeText(text).then(() => {
                    let copiedMsg=document.createElement("h3")
                    copiedMsg.textContent="Color Copied...";
                    copiedMsg.style.backgroundColor=text
                    copiedMsg.classList.add("copied-text")
                    document.body.appendChild(copiedMsg)
                    const timer = setTimeout(() => {
                        copiedMsg.remove()
                    }, 2000)
                    return ()=>{
                        clearTimeout(timer)
                    }
                }).catch((error) => {
                    console.log(error)
                })

                msg(result);
            })
        })
    })();