/**
 * @name LoadExternalCSS
 * @version 1.0.0
 * @description Dynamically loads an external CSS file as a Discord background.
 */

module.exports = class LoadExternalCSS {
    start() {
        // URL of your external CSS
        const cssUrl = "https://raw.githubusercontent.com/yodabobasafdsagfads/tesseract/refs/heads/main/style.css";

        // Fetch and inject CSS
        fetch(cssUrl)
            .then(r => r.text())
            .then(css => {
                this.styleTag = document.createElement("style");
                this.styleTag.id = "external-github-css";
                this.styleTag.innerHTML = css;
                document.head.appendChild(this.styleTag);
            })
            .catch(err => console.error("Failed to load external CSS:", err));
    }

    stop() {
        if (this.styleTag) {
            this.styleTag.remove();
            this.styleTag = null;
        }
    }
}
