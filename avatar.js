// Sets values if available in local storage
export let optionValues = {}
if (JSON.parse(localStorage.getItem("optionsObject")) !== null) {
    optionValues = {
        "image-size": JSON.parse(localStorage.getItem("optionsObject"))["image-size"],
        "border-thickness": JSON.parse(localStorage.getItem("optionsObject"))["border-thickness"],
        "border-radius": JSON.parse(localStorage.getItem("optionsObject"))["border-radius"],
        "border-color": JSON.parse(localStorage.getItem("optionsObject"))["border-color"]
    };
} else {
    optionValues = {
        "image-size": "75",
        "border-thickness": "50",
        "border-radius": "50",
        "border-color": "#33D17A"
    };
}

// Gets image id if available in local storage
const imageValue = localStorage.getItem("image")

export const createAvatar = () => {

    // Defines variables and class toggle function
    const avatar = document.querySelector("#app-avatar");
    const optionsClass = document.querySelectorAll(".avatar-options")
    let options = {}
    const buttons = document.querySelectorAll(".image-btn");

    const toggleActive = () => {
        buttons.forEach(btnClass => {
            const classList = btnClass.classList;
            if (classList.contains("active")) {
                classList.remove("active")
            }
        })
    }

    // Choose image

    // Sets default image
    avatar.setAttribute("src", buttons[0].value);
    buttons[0].classList.add("active")

    buttons.forEach(button => {

        // Finds local storage
        if(button.id === imageValue) {
            avatar.setAttribute("src", button.value)
            toggleActive();
            button.classList.add("active")
        }
        
        // Changes image and saves to local storage
        button.addEventListener("click", () => {
            avatar.setAttribute("src", button.value)
            toggleActive();
            button.classList.add("active")

            const imageId = button.id;
            localStorage.setItem("image", imageId)
            console.log(imageId)
        })
    })
    
    // Update style  
    const render = () => {

        // Gets default options if values not in local storage
        options = {
            "image-size": document.querySelector("#image-size").value,
            "border-thickness": document.querySelector("#border-thickness").value,
            "border-radius": document.querySelector("#border-radius").value,
            "border-color": document.querySelector("#border-color").value,
        }

        // Adjust values for use
        const imageAdjusted = Number.parseInt(options["image-size"]) + 150;
        const borderAdjusted = Number.parseInt(options["border-thickness"]) / 5;

        // Applies options to avatar
        avatar.setAttribute("style", `
        border: ${borderAdjusted}px solid ${options["border-color"]};
        border-radius: ${options["border-radius"]}px;
        width: ${imageAdjusted}px;
        ,`);

        // Saves options to local storage
        const optionsSerialized = JSON.stringify(options);
        localStorage.setItem("optionsObject", optionsSerialized);

    };

    // Renders page load
    render();

    // Updates avatar on change of option
    optionsClass.forEach(option => {
        option.addEventListener("change", () => {
            render()        
        })
    })
};