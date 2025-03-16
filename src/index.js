// @ts-check

export class WobblyEyes {
  constructor(outerContainer, options = {}) {
    this.outerContainer = outerContainer;
    this.container = document.createElement("div");
    this.outerContainer.appendChild(this.container);
    this.options = Object.assign(
      {
        eyeColor: "white",
        pupilColor: "black",
        eyelidColor: "#ffccaa",
        lashColor: "black",
        width: 100,
        height: 50,
      },
      options
    );

    this.init();
  }

  init() {
    this.container.style.position = "relative";
    this.container.style.width = `${this.options.width * 2.2}px`;
    this.container.style.height = `${this.options.height * 1.2}px`;
    this.container.style.display = "flex";
    this.container.style.justifyContent = "space-between";

    this.eyes = [];
    for (let i = 0; i < 2; i++) {
      const eye = document.createElement("div");
      eye.classList.add("eye");
      eye.style.cssText = `
                position: relative;
                width: ${this.options.width}px;
                height: ${this.options.height}px;
                background: ${this.options.eyeColor};
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                border: 2px solid black;
            `;

      const pupil = document.createElement("div");
      pupil.classList.add("pupil");
      pupil.style.cssText = `
                width: 40%;
                height: 40%;
                background: ${this.options.pupilColor};
                border-radius: 50%;
                position: relative;
                transition: transform 0.1s linear;
            `;

      const eyelidUpper = document.createElement("div");
      eyelidUpper.classList.add("eyelid");
      eyelidUpper.style.cssText = `
                position: absolute;
                top: 0;
                width: 100%;
                height: 10%;
                background: ${this.options.eyelidColor};
                transition: height 0.2s ease-in-out;
				border-bottom: 2px solid black;
            `;

      const eyelidLower = document.createElement("div");
      eyelidLower.classList.add("eyelid");
      eyelidLower.style.cssText = `
				position: absolute;
				bottom: 0;
				width: 100%;
				height: 2%;
				background: ${this.options.eyelidColor};
				transition: height 0.2s ease-in-out;
				border-top: 2px solid black;
			`;

      eye.appendChild(pupil);
      eye.appendChild(eyelidUpper);
      eye.appendChild(eyelidLower);
      this.container.appendChild(eye);
      this.eyes.push({ eye, pupil, eyelidUpper, eyelidLower });
    }

    this.trackMouse();
    this.blink();
  }

  trackMouse() {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      this.eyes.forEach(({ eye, pupil }) => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const deltaX = clientX - eyeX;
        const deltaY = clientY - eyeY;
        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(
          eye.offsetWidth / 4,
          Math.hypot(deltaX, deltaY) / 8
        );
        pupil.style.transform = `translate(${Math.cos(angle) * distance}px, ${
          Math.sin(angle) * distance
        }px)`;
      });
    });
  }

  blink() {
    setInterval(() => {
      this.eyes.forEach(({ eyelidUpper, eyelidLower }) => {
        eyelidUpper.style.height = "70%";
        eyelidLower.style.height = "30%";
      });
      setTimeout(() => {
        this.eyes.forEach(({ eyelidUpper, eyelidLower }) => {
          eyelidUpper.style.height = "10%";
          eyelidLower.style.height = "2%";
        });
      }, Math.random() * 200 + 200);
    }, Math.random() * 5000 + 2000);
  }
}

// Bruk i et prosjekt:
// import WobblyEyes from 'eyes';
// const container = document.getElementById('eye-container');
// new WobblyEyes(container, { eyeColor: 'blue' });
